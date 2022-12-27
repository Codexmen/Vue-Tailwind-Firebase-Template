import { ref } from "vue";
import {app} from '/src/services/firebase';
import { getFirestore, collection, query, orderBy, addDoc, getDocs, connectFirestoreEmulator } from "firebase/firestore";

const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost',8081)


export default function useStorage(collectionName, mapper) {
    const collectionRef = collection(db, collectionName);
    const list = ref([]);
    const isLoading = ref(false);

    async function fetchList() {
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
            const docRef = await addDoc(collectionRef, {...payload, time: Date.now()});
            return docRef;
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    fetchList();
    return {addItem,list, isLoading, fetchList,};
}
