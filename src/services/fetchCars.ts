// import { CarDTO } from "@dtos/CarDTO";
// import { firestore } from "./firebase";

// async function fetchCars(): Promise<CarDTO> {
//   const cards: CarDTO[];
//   try {
//     const response = await firestore.collection("cars").get();
//     response.docs.forEach(doc => {
//       cards.push(doc.data() as CarDTO);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
