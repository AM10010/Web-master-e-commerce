// src/services/productService.js
import axios from "axios";

// Fetch first 4 products
export const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data.slice(0, 4);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch products 6–9
export const getSecondProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data.slice(5, 9);
  } catch (error) {
    console.error("Error fetching second products:", error);
    return [];
  }
};
export const getThirdProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data.slice(9, 17);
  } catch (error) {
    console.error("Error fetching Third products:", error);
    return [];
  }
};
