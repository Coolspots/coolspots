import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // I had to add NEXT_PUBLIC so the browser can see it
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const auth = app.auth();
export const db = app.firestore();

// db.collection("spots")
//   .doc()
//   .set({
//     name: "metodo zero",
//     description:
//       "Flexing over 600 sqm, Metodo Zero is a great space for professional and social interactions. Up to 20 locations for rent in an open space of about 300 square meters. 5 large 250 × 130 cm desks for up to 4 people. 2 desks of 150 × 90 cm for single posts. In addition: cabinets and dedicated shelves on libraries, vision board, coffe area, purified water dispenser, padded chairs with wheels, power outlets on each table.",
//     images: [
//       "https://www.metodo-zero.it/mz/wp-content/uploads/2020/09/Chiara-Grossi-28.jpg",
//       "https://www.metodo-zero.it/mz/wp-content/uploads/2020/09/Chiara-Grossi-15.jpg",
//       "https://www.metodo-zero.it/mz/wp-content/uploads/2020/09/Chiara-Grossi-16.jpg",
//       "https://www.metodo-zero.it/mz/wp-content/uploads/2020/09/Chiara-Grossi-17.jpg",
//       "https://www.metodo-zero.it/mz/wp-content/uploads/2020/09/Chiara-Grossi-18.jpg",
//       "https://www.metodo-zero.it/mz/wp-content/uploads/2020/09/Chiara-Grossi-32.jpg",
//     ],
//     keywords: "Padova, free coffee, big terrace",
//     amenities: [
//       "Flexible desk",
//       "Ultra fast Internet",
//       "Power outlets",
//       "Air conditioning",
//       "Relax area",
//       "Phone booths",
//       "Kitchen access",
//       "Bathroom access",
//       "Parking",
//       "Water",
//       "Fruit",
//       "Coffee",
//     ],
//     priceFrom: "16",
//     reviews: [],
//     embeddedMapSource:
//       "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2800.862264605587!2d11.890053515555717!3d45.41211697910036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x477edb8548820495%3A0xbe60eb2153586d43!2sMetodo%20Zero%2C%20Via%20Niccol%C3%B2%20Tommaseo%2C%2096A%2C%2035131%20Padova%20PD%2C%20Italia!3m2!1d45.4121445!2d11.8922625!5e0!3m2!1ses!2ses!4v1623600021489!5m2!1ses!2ses",
//   })
//   .then((spot) => {
//     console.log("Document successfully written!", spot);
//   })
//   .catch((error) => {
//     console.error("Error writing document: ", error);
//   });

export default app;
