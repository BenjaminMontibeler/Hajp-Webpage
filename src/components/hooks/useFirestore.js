// import { useState, useEffect } from 'react';
// import { projectFirestore } from '../config/firebase.js';

// const useFirestore = (collection) => {
//     const [docs, setDocs] = useState([]);

//     useEffect(()=> {
//         const unsub = projectFirestore.collection(collection)
//             .onSnapshot((snap) => {
//                 let documents = [];
//                 snap.forEach(doc => {
//                     documents.push({...doc.data(), id: doc.id });
//                 });
//                 setDocs(documents);
//             });

//         return () =>  unsub();

//     }, [collection])

//     return { docs };
// }

// export default useFirestore;