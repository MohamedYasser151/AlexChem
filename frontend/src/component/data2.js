import React,{useEffect,useState} from "react";
import img1 from "./image/1.png";
import img2 from "./image/2.png";
import img3 from "./image/3.png";
import img4 from "./image/4.png";


import img6 from "./image/6.jpg"
import img7 from "./image/7.jpg"
import img8 from "./image/8.jpg" 
import img9 from "./image/9.jpg" 

import { NavLink } from "react-router-dom";

const fetchProductPrices = async () => {
    try {
        const response = await fetch("https://alexchem-server.vercel.app/products");
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }
        const productsData = await response.json();
        const prices = {};
        productsData.forEach(product => {
            prices[product.id] = product.price;
        });
        return prices;
    } catch (error) {
        console.error("Error fetching product prices:", error);
        return {};
    }
};

const data = async () => {
    const prices = await fetchProductPrices(); 

    return [
        {
            id: 1,
            img: img1,
            title: "title1",
            price: prices[1] || 50, // السعر من API، وإذا لم يكن متاحاً سيتم وضع قيمة افتراضية
            discount: 25,
            description: "description1",
            number: 1,
        },
        {
            id: 2,
            img: img2,
            title: "title2",
            price: prices[2] || 70, // السعر من API أو قيمة افتراضية
            discount: 50,
            description: "description2",
            number: 1,
        },
        {
            id: 3,
            img: img4,
            title: "title3",
            price: prices[3] || 150,
            discount: 100,
            description: "description3",
            number: 1,
        },
        {
            id: 4,
            img: img3,
            title: "title4",
            price: prices[4] || 45,
            discount: 30,
            description: "description4",
            number: 1,
        },

        {
            id: 5,
            img: img6,
            title: "title5",
            price: prices[5] || 45,
            discount: 30,
            description: "description5",
            number: 1,
        },
        {
            id: 6,
            img: img7,
            title: "title6",
            price: prices[6] || 45,
            discount: 30,
            description: "description6",
            number: 1,
        },
        {
            id: 7,
            img: img8,
            title: "title7",
            price: prices[7] || 45,
            discount: 30,
            description: "description7",
            number: 1,
        },
        {
            id: 8,
            img: img9,
            title: "title8",
            price: prices[4] || 45,
            discount: 30,
            description: "description8",
            number: 1,
        },
    ];
};

export default data;
