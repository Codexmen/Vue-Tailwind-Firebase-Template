import { ref } from "vue";
import {app} from '/src/services/firebase';
import { getFirestore, collection, query, orderBy, addDoc, serverTimestamp, getDocs, setDoc, updateDoc, connectFirestoreEmulator } from "firebase/firestore";

import {TodoStatuses} from './enums'
const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost',8081)

const CollectionName = 'todos';
const collectionRef = collection(db, CollectionName);

export default function useTodoList() {
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
                id: doc.id,
                text: data.text,
                time: data.time,
                status: data.status || TodoStatuses.Unresolved
            })
        });
        isLoading.value = false;
        list.value = result;
        return result;
    }

    async function addTodo(text = 'default text') {
        try {
            const docRef = await addDoc(collectionRef, {text, time: Date.now()});
            fetchList()
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

   async function updateTodo(text, status = TodoStatuses.Resolved) {
        try {
            const docRef = await setDoc(collectionRef, {
                text: text,
                status: status,
            });
            fetchList()
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    fetchList();
    return {addTodo, updateTodo, list};
}
