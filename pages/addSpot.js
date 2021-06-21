import { useState, useCallback } from "react";
import Layout from "../components/Layout/Layout";

const addSpot = () => {
  const [inputValues, setInputValues] = useState({
    name: "Another incredible Coffee Shop",
    keywords: "Barcelona, coffee, terrace",
    images:
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y28lMjB3b3JraW5nJTIwc3BhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    city: "Barcelona",
    amenities: [
      "Flexible desk",
      "Ultra fast Internet",
      "Power outlets",
      "Air conditioning",
      "Relax area",
      "Phone booths",
      "Kitchen access",
      "Bathroom access",
      "Parking",
      "Water",
      "Fruit",
      "Coffee",
    ],
    priceFrom: "20",
  });

  const handleOnChange = useCallback((event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/spots/add", {
      method: "POST",
      body: JSON.stringify(inputValues),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log("created spot =>", json))
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
      <div>
        <h1>Add your Spot</h1>
        <form action="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            value={inputValues.name}
            onChange={handleOnChange}
          />
          <label htmlFor="keywords">keywords</label>
          <input
            type="text"
            name="keywords"
            value={inputValues.keywords}
            onChange={handleOnChange}
          />
          <label htmlFor="images">images</label>
          <input
            type="text"
            name="images"
            onChange={handleOnChange}
            value={inputValues.images}
          />
          <label htmlFor="city">city</label>
          <select
            name="city"
            value={inputValues.city}
            onChange={handleOnChange}
          >
            <option defaultValue value="barcelona">
              Barcelona
            </option>
            <option value="padova">Padova</option>
            <option value="valencia">Valencia</option>
          </select>
          <label htmlFor="amenities">amenities</label>
          <input
            type="text"
            name="amenities"
            value={inputValues.amenities}
            onChange={handleOnChange}
          />
          <label htmlFor="priceFrom">priceFrom</label>
          <input
            type="text"
            name="priceFrom"
            value={inputValues.priceFrom}
            onChange={handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    </Layout>
  );
};

// name: String,
//   description: String,
//   images: [String],
//   keywords: [String],
//   amenities: [String],
//   priceFrom: String,
//   reviews: [{ author: String, body: String }],
//   createdAt: { type: Date, default: new Date() },

export default addSpot;
