import React from "react";

import { Link } from "react-router-dom";
import "/src/components/Categories.css"; // Import CSS file


const categories = [
  { id : 1, name: "Fruits & Vegetables", image: "public/Fruits&Vegetables/Fruits_Veggies.jpg" },
  {  id : 2, name: "Rice & other grains", image: "public/Rice&Oil/rice_oil.jpg" },
  {  id : 3, name: "Dry Fruits", image: "public/Masala&DryFruits/masala_dry_fruits.jpg" },
  {  id : 4, name: "Sweet Cravings", image: "public/SweetCravings/sweets.jpg" },
  {  id : 5, name: "Frozen Food & Ice Creams", image: "public/FrozenFood&IceCreams/icecream.jpg" },
//   { name: "Packaged Food", image: "/images/packaged.png" },
  {  id : 6, name: "Dairy, Bread & Eggs", image: "public/Dairy,Bread&Eggs/dairy_bread.jpg" },
  { id : 7, name: "Cold Drinks & Juices", image: "public/ColdDrinks&Juices/colddrinks.jpg" },
  {  id : 8, name: "Munchies", image: "public/Munchies/munchies.jpg" },
  {  id : 9, name: "Meat", image: "public/Meats,Fish&Eggs/meat.jpg" },
  {  id : 10, name: "Sauces", image: "/public/Breakfast&Sauces/sauces.jpg" },
  {  id : 11, name: "Breakfast", image: "public/Dairy,Bread&Eggs/dairy_bread.jpg" },
  {  id : 12, name: "Masala ", image: "public/Masala&DryFruits/masala_dry_fruits.jpg" },
  {  id : 13, name: "Frozen Food", image: "public/FrozenFood&IceCreams/icecream.jpg" },
  {  id : 14, name: "Oil", image: "public/Rice&Oil/rice_oil.jpg" },

];

const Categories: React.FC = () => {
  return (
    <section className="categories-section card-wrapper w-100 ">
      <div className="categories-header">
        <h2>Explore By Categories</h2>
        <a href="#" className="see-all">See All →</a>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`} className="category-card">
           {/* <div key={index} className="category-card"> */}
            <div>
                <img src={category.image} alt={category.name} className="category-image" />
                {/* <img src={category.image} alt={category.name} className="styles.image" /> */}
                <h3>{category.name}</h3>
            </div>
        </Link>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  
  );
};

export default Categories;
