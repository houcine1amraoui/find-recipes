import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function HeroSection({handleSearch}) {
  const [searchInput, setSearchInput] = useState("");
    
  const handleOnClick  = () => {
    handleSearch(searchInput)
    setSearchInput("")
  }
  
  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>Banger</span> food.
        </h1>
        <p className="text-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum maxime
          ipsam laborum, natus sequi asperiores alias aliquam aspernatur
          repellendus facilis.
        </p>
        <div className="header-input-container">
          <input type="text" 
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput} 
          placeholder="Find a recipe..." />
          <button onClick={handleOnClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          className="main_img"
          src="https://wallpapers.com/images/featured/delicious-food-pictures-i5wjpvjqrk3qroy0.jpg"
          alt=""
        />
      </div>
    </header>
  );
}
