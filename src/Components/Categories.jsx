import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, []);

  // Inline CSS for the categories section
  const categoriesContainerStyles = {
    backgroundColor: "white",
    padding: "40px 0",
    
  };

  const categoryCardStyles = {
    
    border: "none",
    borderRadius: "8px",
    transition: "box-shadow 0.3s ease-in-out",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#FEDC01"
    
    
  };

  const categoryCardTitleStyles = {
    fontSize: "18px",
    fontWeight: "bold",
    transition: "transform 0.3s ease-in-out",
    color:"black"
  };

  const categoryCardHoverStyles = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.05)",
    
    
  };

  return (



<div style={categoriesContainerStyles}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="text-dark" style={{ fontSize: "3rem" }}>
            Categories
            <span
              style={{
                display: "inline-block",
                fontSize: "1rem",
                marginLeft: "10px",
                animation: "pulse 1s infinite",
              }}
            >
              
            </span>
          </h1><hr />
        </div>
        <div className="row" >
          {categories.map((val, key) => (
            <div className="col-md-3 text-center  my-3" key={key}>
              <Link
                className="text-decoration-none"
                to={`/products/category/${val}`}
                
              >
                <Card
                  style={{
                    ...categoryCardStyles,
                    ...(key % 2 === 0 ? categoryCardHoverStyles : {}),
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      style={{
                        ...categoryCardTitleStyles,
                        ...(key % 2 === 0 ? { color: "black" } : {}),
                      }}
                    >
                      {key + 1}-{val.toUpperCase().replace("-", "  ")}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
