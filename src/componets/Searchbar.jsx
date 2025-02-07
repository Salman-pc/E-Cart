
import React, { useState } from "react";
import { searchproduct } from "../Redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

function Searchbar({ widthbar }) {

  const dispatch = useDispatch();
  
  const [searchValueClick, setSearchValueClick] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchValue, setSearchValue] = useState("");

  const { allProducts } = useSelector((state) => state.productReducer);

  const inputWidth = widthbar || "420px";

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    // If an item was previously selected, clear it on new input
    if (searchValueClick ) {
      setSearchValueClick("");
    }
    setSearchValue(value);
    setSearchTerm(value);
    
    dispatch(searchproduct(value));
  };

  // Handle item click in the dropdown
  const handleSelect = (title) => {
    setSearchValueClick(title); // Update the selected value
    setSearchValue(title);        // Ensure input reflects the selected value
    setSearchTerm("");            // Hide the dropdown
    
    // Dispatch search action with the selected title so that the Redux state updates.
    console.log("Dispatching selected value:", title);
    dispatch(searchproduct(title));
  };

  return (
    <div className="container search-container position-relative d-flex flex-column align-items-center">
      {/* Search Input */}
      <div className="w-100 d-flex justify-content-center">
        <input
          type="text"
          className="form-control rounded-2 search-input px-3"
          placeholder="Search products..."
          autoFocus
          style={{ width: inputWidth }}
          value={searchValueClick || searchValue} // Controlled input value
          onChange={handleSearch}
        />

        {/* Dropdown Results */}
        {searchTerm && allProducts?.length > 0 && (
          <div
            style={{
              top: "100%",
              width: inputWidth,
              zIndex: 1000,
            }}
            className="position-absolute bg-light shadow rounded mt-1 pb-2"
          >
            <ul style={{ listStyle: "none" }} className="py-2 m-0">
              {allProducts.map((item, index) => (
                <li
                  key={item.id || index}
                  onClick={() => handleSelect(item.title)}
                  style={{ cursor: "pointer" }}
                  className="border-bottom p-2"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
