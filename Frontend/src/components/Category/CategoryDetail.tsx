import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CategoryDetail.css";
import { StoreItem } from "../StoreItem";
import items from "../../data/items.json";
import { Row, Stack } from "react-bootstrap";



const CategoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const categoryItems = items.filter((item) => item.categoryId === Number(id));
  const navigate = useNavigate();
  return (
    <div >
      <h2>Items in Category {id}</h2>
      <div >
      <Row md={2} xs={1} lg={3} className="g-3">
        {categoryItems.map((item) => (
          <div key={item.id} >
            <StoreItem category_id={0} {...item} />
            
          </div>
        ))}
        </Row>
      </div>
      <button 
        onClick={() => navigate("/")} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default CategoryDetail;
