import React, { useState, useEffect, useCallback } from 'react';
import './Sidebar.css';
import { AlphaGetter } from '../alphaGetter.js';
import { GlobalContext } from '../context/GlobalContext';
import { ingredientToXdict } from '../pages/util.js';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const { alphaValues, setAlphaValues } = React.useContext(GlobalContext);

  function handleSubmit() {
    console.log(selectedIngredients);

    const selectedIngredientsXdict = selectedIngredients.map(ingredient => ingredientToXdict(ingredient));

    setAlphaValues(AlphaGetter(selectedIngredientsXdict));

  }

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Function to find the key by name
  const findKeyByName = (name) => {
    for (const [key, value] of Object.entries(linkedValuesByIndex)) {
      if (value === name) {
        return key;
      }
    }
    return null;
  };

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredients((prevIngredients) =>
      prevIngredients.includes(ingredient)
        ? prevIngredients.filter((item) => item !== ingredient)
        : [...prevIngredients, ingredient]
    );

  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const xdict = [
    'inexpensive-meal',
    'meal-for-two',
    'mcdonalds-combo-meal',
     'domestic-beer',
     'imported-beer',
     'capuccino',
     'coke-pepsi',
     'third-liter-water-bottle',
     'liter-milk',
     'bread-loaf',
     'kg-rice',
     'dozen-eggs',
     'kg-cheese',
     'kg-chicken-fillets',
     'kg-beef',
     'kg-apples',
     'kg-bananas',
     'kg-oranges',
     'kg-tomato',
     'kg-potato',
     'kg-onion',
     'head-lettuce',
     'one-and-a-half-liter-water-bottle',
     'bottle-wine',
     'domestic-beer-restaurant',
     'imported-beer-restaurant',
     'pack-cigarettes',
     'bus-ticket',
     'month-bus-pass',
     'taxi-start',
     'taxi-km',
     'taxi-hour-waiting',
     'liter-gas',
     'volkswagen-golf',
     'toyota-corolla-sedan',
     'monthly-apartment-utilities',
     'local-mobile-tariff-minute',
     'month-internet',
     'month-gym-membership',
     'hour-tennis-court',
     'movie-ticket',
     'preschool-month',
     'international-school-yearly',
     'levis-jeans',
     'summer-dress',
     'running-shoes',
     'business-shoes',
     'apartment-monthly-rent-city-centre',
     'apartment-monthly-rent-outside-city-centre',
     'three-bed-apartment-monthly-rent-city-centre',
     'three-bed-apartment-monthly-rent-outside-city-centre',
     'month-rent-per-sqm-city-centre',
     'month-rent-per-sqm-outside-city-centre',
     'avg-montly-salary-after-tax',
     'twenty-year-mortgage-interest-rate',
     'pizza',
     'burger',
     'big-mac',
    "gdp-billions"];
 
 const dataArray = [...xdict];
 
 console.log(dataArray);
 
 
 


  // Define ingredients array
  const ingredients = ['Inexpensive Meal', 'Meal for 2 (3-Course)', 'McMeal', 'Domestic Beer (Rest)', 'Imported Beer (Rest)', 'Cappuccino (Rest)', 'Coke/Pepsi (Rest)', 'Water (Rest)', 'Milk', 'Loaf of Bread', 'Rice', 'Eggs', 'Cheese', 'Chicken Breasts', 'Beef Round', 'Apples', 'Banana', 'Oranges', 'Tomato',
    'Potato', 'Onion', 'Lettuce', 'Water (1.5L Store)', 'Bottle of Wine (Store)', 'Domestic Beer (Store)', 'Imported Beer (Store)', 'Cigarettes 20 Pack', 'One-way Ticket (Local Transport)', 'Monthly Pass (Regular Price)', 'Taxi Start', 'Taxi 1km', 'Taxi 1hour Waiting', 'Gasoline (1L)', 'Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)',
    'Toyota Corolla Sedan 1.6l 97kW Comfort (Or Equivalent New Car)', 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment', '1 min. of Prepaid Mobile Tariff Local (No Discounts or Plans)', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL)', 'Fitness Club, Monthly Fee for 1 Adult', 'Tennis Court Rent (1 Hour on Weekend)',
    'Cinema, International Release, 1 Seat', 'Preschool (or Kindergarten), Full Day, Private, Monthly for 1 Child', 'International Primary School, Yearly for 1 Child', '1 Pair of Jeans (Levis 501 Or Similar)', '1 Summer Dress in a Chain Store (Zara, H&M, ...)', '1 Pair of Nike Running Shoes (Mid-Range)',
    '1 Pair of Men Leather Business Shoes', 'Apartment (1 Bedroom) in City Center', 'Apartment (1 Bedroom) Outside of Center', 'Apartment (3 Bedrooms) in City Center', 'Apartment (3 Bedrooms) Outside of Center', 'Price per Square Meter to Buy Apartment in City Center',
    'Price per Square Meter to Buy Apartment Outside of Center', 'Average Monthly Net Salary (After Tax)', 'Mortage Interest Rate in Percentages, for 20 Years Fixed-Rate', 'Pizza', 'Burger', 'Big Mac', "GDP in Billions"];

  // Create an object to store the linked values
  const linkedValuesByIndex = {};

  // Iterate over the ingredients array
  ingredients.forEach((ingredient, index) => {
    // Get the value from xdict using the index
    const productKey = xdict[index];

    // Set the ingredient as the key and the value from xdict as the value in the linkedValuesByIndex object
    linkedValuesByIndex[ingredient] = productKey;
  });

  // Filter ingredients based on search query
  useEffect(() => {
    const filtered = ingredients.filter((ingredient) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredIngredients(filtered);
  }, [searchQuery]);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <div className='text-big'>{collapsed ? 'Categories' : 'Categories'}</div>
      </button>
      {!collapsed && (
        <div className="content">
          <div className="ingredient-list">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className='rounded'
            />
            <div className="ingredient-container">
              {filteredIngredients.map((ingredient) => (
                <label key={ingredient}>
                  <input
                    type="checkbox"
                    checked={selectedIngredients.includes(ingredient)}
                    onChange={() => handleIngredientClick(ingredient)}
                  />
                  {ingredient}
                </label>
              ))}
            </div>
          </div>
          <button onClick={handleSubmit} className='custom-button'>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;