import React, { useState } from "react";
import "./Manage.css"; // Import the CSS for styling

const Manage = () => {
  const [dogData, setDogData] = useState({
    name: "",
    age: "",
    height: "",
    color: "",
    favoriteToy: "",
    favoriteMeal: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Dog ${dogData.name} was added successfully!`);
    setDogData({
      name: "",
      age: "",
      height: "",
      color: "",
      favoriteToy: "",
      favoriteMeal: "",
    });
  };

  return (
    <div className="manage-container">
      <h1>Add a New Dog</h1>
      <main>
        <form onSubmit={handleSubmit} className="dog-form">
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              value={dogData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Dog name"
              aria-describedby="name-desc"
              placeholder="e.g., Charlie"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            {/* - Add a further aria attributes */}
            <input
              id="age"
              type="number"
              name="age"
              value={dogData.age}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Dog age"
              aria-describedby="age-desc"
              aria-invalid={isNaN(Number(dogData.age))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input
              id="height"
              type="text"
              name="height"
              value={dogData.height}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Dog height"
              aria-describedby="height-desc"
              placeholder="e.g., 24 inches"
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input
              id="color"
              type="text"
              name="color"
              value={dogData.color}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Dog color"
              aria-describedby="color-desc"
              placeholder="e.g., Golden"
            />
          </div>
          <div className="form-group">
            <label htmlFor="favoriteToy">Favorite Toy:</label>
            <input
              id="favoriteToy"
              type="text"
              name="favoriteToy"
              value={dogData.favoriteToy}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Favorite toy"
              aria-describedby="toy-desc"
              placeholder="e.g., Tennis Ball"
            />
          </div>
          <div className="form-group">
            <label htmlFor="favoriteMeal">Favorite Meal:</label>
            <input
              id="favoriteMeal"
              type="text"
              name="favoriteMeal"
              value={dogData.favoriteMeal}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Favorite meal"
              aria-describedby="meal-desc"
              placeholder="e.g., Chicken and Rice"
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            aria-label="Add new dog"
          >
            Add Dog
          </button>
        </form>
      </main>
      <figure className="dogs-form-image">
        <img
          src="https://placedog.net/1000/300/random?id=128"
          alt="A cute dog"
          loading="lazy"
        />
      </figure>
    </div>
  );
};

export default Manage;
