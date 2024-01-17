// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getFirestore,
    getDocs,
    query,
    where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA00_Kf_HCVEbL9_MMp-acyi7l6EF-isWM",
    authDomain: "lhstore-80597.firebaseapp.com",
    projectId: "lhstore-80597",
    storageBucket: "lhstore-80597.appspot.com",
    messagingSenderId: "497674009483",
    appId: "1:497674009483:web:d8430573b2d64ffadccd8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize cloud firestore
const db = getFirestore(app);
const auth = getAuth();
const user = auth.currentUser;
var mainForm = document.getElementById('mainForm');
// submitData.addEventListener('click',(e)=>{
//   var email= document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   if(validate_email==false||validate_password||false){
//     alert("Email dan password wajib diisi");
//     return
//   }else{
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//   // Signed in
//   const user = userCredential.user;
//   alert('User login!');
//   // ...
//   })
//   .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   alert(errorMessage);
//   });
//   }

// });
let login = evt => {
    evt.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    print("test");
    if (validate_email == false || validate_password || false) {
        alert("Email dan password wajib diisi");
        return
    } else {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('User login!');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        // }
    }
};
// function login() {
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   if (validate_email == false || validate_password || false) {
//     alert("Email dan password wajib diisi");
//     return
//   } else {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         alert('User login!');
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//       });
//     // }
//   }
// };

function validate_email(email) {
    if (email == null) {
        return false;
    } else {
        return true;
    }
}

function validate_password(password) {
    if (password < 6) {
        return false;
    } else {
        return true;
    }
}

function test() {
    console.log("test");
}

mainForm.addEventListener('submit', login);
// async function cekRole() {
//   const cek =  query(collection(db,"Users"),where("Roles","==","admin"));
//   cek.for
// }
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     return uid;
//   } else {
//   }
// });

// void route() {
//     User? user = FirebaseAuth.instance.currentUser;
//     var kk = FirebaseFirestore.instance
//         .collection('users')
//         .doc(user!.uid)
//         .get()
//         .then((DocumentSnapshot documentSnapshot) {
//       if (documentSnapshot.exists) {
//         if (documentSnapshot.get('rool') == "Teacher") {
//           Navigator.pushReplacement(
//             context,
//             MaterialPageRoute(
//               builder: (context) => Teacher(),
//             ),
//           );
//         } else {
//           Navigator.pushReplacement(
//             context,
//             MaterialPageRoute(
//               builder: (context) => Student(),
//             ),
//           );
//         }
//       } else {
//         print('Document does not exist on the database');
//       }
//     });
//   }

// void signIn(String email, String password) async {
//   if (_formkey.currentState!.validate()) {
//     try {
//       UserCredential userCredential =
//           await FirebaseAuth.instance.signInWithEmailAndPassword(
//         email: email,
//         password: password,
//       );
//       route();
//     } on FirebaseAuthException catch (e) {
//       if (e.code == 'user-not-found') {
//         print('No user found for that email.');
//       } else if (e.code == 'wrong-password') {
//         print('Wrong password provided for that user.');
//       }
//     }
//   }
// }