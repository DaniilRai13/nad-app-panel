import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

function connectionWithDatabase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBYa7x5G7xWrBFQtN6Luxq4vSQG56uWjTo",
    authDomain: "nad-works.firebaseapp.com",
    projectId: "nad-works",
    storageBucket: "nad-works.appspot.com",
    messagingSenderId: "767518658072",
    appId: "1:767518658072:web:1ed12ec2ad0894f8fc3d6d",
    measurementId: "G-E94LHV0TBG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  const db = getDatabase(app)

  return db;
  // const db = getFirestore(app)
}

export const sendToServer = async (files) => {
  const id = new Date()
  console.log(+id, files)

  let images = []

  files.forEach(img => {
    images = [...images, {
      name: img.fileInfo.name,
      url: img.base64
    }
    ]
  })

  //REALTIME DATABASE
  const db = connectionWithDatabase()

  set(ref(db, 'works/' + +id), {
    mainImg: files[0].base64,
    images
  });

  console.log(images)
}