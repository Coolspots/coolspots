// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "../../firebase";

export const getSpots = () => {
  db.collection("spots")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push({ ...doc.data(), id: doc.id });
      });
    })
    .then(() => {
      setData(data);
    });

  return data;
};
