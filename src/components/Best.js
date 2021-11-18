import React from "react";

import '../css/products.css'
import productImg from '../images/main/4@2x.png';


const Best = () => {
    return (
        <div className="products">
            <div className="productList">
                <img src= {productImg} alt="image1"/>
                <h2>베스트</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>
            
            <div className="productList">
                <img src= {productImg} alt="image2"/>
                <h2>브랜드명</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>

            <div className="productList">
                <img src= {productImg} alt="image3"/>
                <h2>브랜드명</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>

            <div className="productList">
                <img src= {productImg} alt="image4"/>
                <h2>브랜드명</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>

            <div className="productList">
                <img src= {productImg} alt="image5"/>
                <h2>브랜드명</h2>

                <ul className="productLink">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>
        </div>
    );
}

export default Best;
