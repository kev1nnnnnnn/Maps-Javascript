import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
//import { getFirestone, collection, getDocs, getDoc } from 'firebase/firestone';

const firebaseApp = initializeApp({
   
});

const auth = getAuth(firebaseApp);

/*const db = getFirestone(firebaseApp);

db.collection('todos').getDocs();

const todosCol = colletcion(db, 'todos');

const snapshot = await getDocs(todosCol);*/


onAuthStateChanged(auth, user => {

    if(user != null) {
        console.log('está logado');
    } else {
        console.log('não está logado');
    }

});