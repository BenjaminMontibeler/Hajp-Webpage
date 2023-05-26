// import { useState, useEffect } from 'react';
// import { projectStorage } from '../config/firebase.js';

// const useStorage = (collection) => {
//     const [docs, setDocs] = useState([]);
//     let documents = [];
//     useEffect(() => {

//         const listRef = projectStorage.child(collection);
//         listRef.listAll().then(function(res){
//             res.items.forEach(function(itemRef){
//              itemRef.getDownloadURL().then(function (link) {
//                 documents.push({url:link})
//                console.log(link);
//              });
           
//           });
//         });
//         setDocs(documents);
//       }, [collection]);
//       return { docs };
// }

// export default useStorage;

// // var listRef = firebase.storage().ref().child('profiles/');


// //   listRef.listAll().then(function(res){
// //      res.items.forEach(function(itemRef){
// //       itemRef.getDownloadURL().then(function (link) {
// //         console.log(link);
// //       })
    
// //    })
// //  })


// // const [docs, setDocs] = useState([]);
// //     let documents = [];
// //     useEffect(() => {

// //         const listRef = projectStorage.child(collection);
// //         listRef.listAll().then((res) => {
          
// //           res.items.forEach((itemRef) => {
// //             itemRef.getDownloadURL().then((link) => {
// //               documents.push({ url: link });
// //             //   console.log(link);
// //             });
            
// //           });
// //           setDocs(documents);
// //         });
// //     return () =>  listRef;
// //       }, [collection])
// //       return { docs };
// // }