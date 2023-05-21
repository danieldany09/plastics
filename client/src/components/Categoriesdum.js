import React from "react";
import { categories } from "../data";
import CategoryItemdum from "./CategoryItemdum";
import "./Categoriesdum.css"
const Categoriesdum = () => {
    return(
        <>
        <div className="category-content">
                <h2 className="category-title">Categories</h2>
        </div>
        <div className="container2">
            {categories.map((item) => (
                <CategoryItemdum item={item} key={item.id} />
            ))}
        </div>
        </>
    )
}

export default Categoriesdum;