import React from 'react';
import DogCard from './DogCard';
import './Catalog.css'; // Import the CSS for the catalog

const dogs = [
    {
      id: 1, // Unique numeric ID
      name: 'Buddy',
      age: 3,
      picture: 'https://http.dog/200.jpg', // Replace with actual image paths
      height: '24 inches',
      color: 'Golden',
      favoritePortFeature: 'Fetching Ball',
      favoriteMeal: 'Chicken and Rice',
    },
    {
      id: 2, // Unique numeric ID
      name: 'Bella',
      age: 2,
      picture: 'https://http.dog/204.jpg',
      height: '22 inches',
      color: 'Brown',
      favoritePortFeature: 'Jumping',
      favoriteMeal: 'Buchari', // Changed meal to Buchari
    },
    {
      id: 3, // Unique numeric ID
      name: 'Charlie',
      age: 4,
      picture: 'https://http.dog/203.jpg',
      height: '26 inches',
      color: 'Black',
      favoritePortFeature: 'Chasing Frisbees',
      favoriteMeal: 'Beef Stew',
    },
    {
      id: 4, // Unique numeric ID
      name: 'Daisy',
      age: 1,
      picture: 'https://http.dog/599.jpg',
      height: '20 inches',
      color: 'White',
      favoritePortFeature: 'Digging',
      favoriteMeal: 'Green Day', // Changed meal to Green Day
    },
    {
      id: 5, // Unique numeric ID
      name: 'Max',
      age: 5,
      picture: 'https://http.dog/530.jpg',
      height: '30 inches',
      color: 'Sable',
      favoritePortFeature: 'Swimming',
      favoriteMeal: 'Fish and Chips',
    },
    {
      id: 6, // Unique numeric ID
      name: 'Luna',
      age: 3,
      picture: 'https://http.dog/496.jpg',
      height: '22 inches',
      color: 'Brindle',
      favoritePortFeature: 'Barking at Birds',
      favoriteMeal: 'Pasta',
    },
    {
      id: 7, // Unique numeric ID
      name: 'Rocky',
      age: 6,
      picture: 'https://http.dog/561.jpg',
      height: '28 inches',
      color: 'Fawn',
      favoritePortFeature: 'Running',
      favoriteMeal: 'Chicken Nuggets',
    },
];
  

const Catalog: React.FC = () => {
  return (
    <section className="catalog">
      <h3>Dog's Catalog</h3>
      <div className="dog-cards-container">
        {dogs.map((dog, index) => (
          <DogCard key={index} {...dog} />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
