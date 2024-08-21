"use client";
import { useState } from "react";
import CardPurchase from "./CardPurchase";
import { SmallCloseIcon, MinusIcon, PlusSquareIcon } from "@chakra-ui/icons";
import "./style.css";

interface CardProps {
    img: string;
    title: string;
    description: string;
    price: number;  // Ensure this is always a number
}

const Card: React.FC<CardProps> = ({ img, title, description, price }) => {
    const [showCard, setShowCard] = useState(true);
    const [totalPrice, setTotalPrice] = useState<number>(price);
    const [clickCount, setClickCount] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);  // Start with 0

    console.log("Initial Price:", price);
    console.log("Initial Amount:", amount);

    const handleClose = () => {
        setShowCard(false);
    };

    const handleAmountChange = (change: number) => {
        const newAmount = amount + change;
    
        if (newAmount >= 0) {
            setAmount(newAmount);
    
            // Ensure price is correctly parsed and multiplied
            const parsedPrice = typeof price === 'string' ? parseFloat(price.replace(/,/g, '')) : price;
            const newTotalPrice = newAmount * totalPrice;

            console.log("newTotalPrice", newTotalPrice)
    
            console.log("Price Used for Calculation:", parsedPrice);
            console.log("New Total Price Calculation:", newAmount, "*", parsedPrice, "=", newTotalPrice);
    
            setTotalPrice(isNaN(newTotalPrice) ? 0 : newTotalPrice);
        }
    };
    

    const handleUpdateBasket = () => {
        const basketItem = {
            img,
            title,
            totalPrice,
        };

        const existingBasketData = JSON.parse(localStorage.getItem('basketData') || '[]');
        const updatedBasketData = [...existingBasketData, basketItem];
        localStorage.setItem('basketData', JSON.stringify(updatedBasketData));

        setClickCount(clickCount + totalPrice);
        console.log("Total Clicks:", clickCount + totalPrice);
    };

    return (
        <div className='card'>
            {showCard && (
                <div style={{ display: "flex" }}>
                    <div className='card-01'>
                        <SmallCloseIcon className="text-2xl" onClick={handleClose} />
                        <div className='card-01-item01'>
                            <img className='img-card w-80' src={img} alt={title} />
                            <div className='card-01-item01-text'>
                                <p style={{ fontWeight: "700", textAlign: "left" }}>{title}</p>
                                <p className='card-01-item01-desc'>{description}</p>
                            </div>
                            <p className='card-01-item01-price'>{price} VNĐ</p>
                        </div>
                        <div className='card-01-item02'>
                            <div className='card-01-item02-div01'>
                                <h4>Đồ đi kèm</h4>
                            </div>
                        </div>

                        <div className='card-item02-04'>
                            <MinusIcon className="mt-8 text-2xl" onClick={() => handleAmountChange(-1)} />
                            <h3 className='card-num mt-8 text-2xl'>Số lượng: {amount}</h3>
                            <PlusSquareIcon className="mt-8 text-2xl" onClick={() => handleAmountChange(1)} />
                        </div>

                        <button onClick={handleUpdateBasket} className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Tổng tiền - {totalPrice} VNĐ
                        </button>
                    </div>
                    <div className='card-02'>
                        <CardPurchase clickCount={clickCount} Img={img} Name={title} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
