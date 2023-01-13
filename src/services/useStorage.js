import { ref } from "vue";
import {app} from '/src/services/firebase';
import { getFirestore, collection, query, orderBy, addDoc, getDocs, connectFirestoreEmulator } from "firebase/firestore";
import useUser, {isUserLoggedInPromise} from '/src/useUser';

const db = getFirestore(app);
if (import.meta.env.DEV) {
    connectFirestoreEmulator(db, 'localhost', 8081)
}

export default function useStorage(collectionName, mapper) {

    const list = ref([]);
    const isLoading = ref(false);
    const {userData} = useUser();
    // console.log(userData);

    async function fetchList() {
        if (!userData.value) {
            return;
        }
        const collectionRef = collection(db, collectionName, userData.value.uid, 'events');
        const q = query(collectionRef, orderBy('time', "desc"));
        isLoading.value = true;
        const querySnapshot = await getDocs(q);
        const result = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            result.push({
               ...data
            })
        });
        isLoading.value = false;
        list.value = result;
        return result;
    }

    async function addItem(payload) {
        try {
            const collectionRef = collection(db, collectionName, userData.value.uid, 'events');
            const docRef = await addDoc(collectionRef, {...payload, time: Date.now()});
            return docRef;
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    isUserLoggedInPromise().then(() => {
        fetchList();
    })
    return {addItem,list, isLoading, fetchList,};
}
