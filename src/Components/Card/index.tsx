"use client";
import { useState, useEffect } from "react";
import CardPurchase from "./CardPurchase"; // Ensure this path is correct
import { SmallCloseIcon } from "@chakra-ui/icons";
import "./style.css";


interface Topping {
    name: string;
    price: number;
    check: boolean;
}

interface CardProps {
    img: string;
    title: string;
    description: string;
    price: number;
}

const toppingData: Topping[] = [
    { name: "Thêm nước", price: 20000, check: false },
    { name: "Lấy dụng cụ ăn uống", price: 20000, check: false },
    { name: "Giao nhanh", price: 20000, check: false },
];

const Card: React.FC<CardProps> = ({ img, title, description, price }) => {
    const [showCard, setShowCard] = useState(true);
    const [toppings, setToppings] = useState<Topping[]>(toppingData);
    const [totalPrice, setTotalPrice] = useState<number>(price);
    const [clickCount, setClickCount] = useState<number>(0);

    const handleClose = () => {
        setShowCard(false);
    };

    const handleCheckboxChange = (index: number) => {
        const updatedToppings = [...toppings];
        updatedToppings[index].check = !updatedToppings[index].check;
        setToppings(updatedToppings);
    };

    useEffect(() => {
        const selectedToppings = toppings.filter(topping => topping.check);
        const toppingPrice = selectedToppings.reduce((acc, curr) => acc + curr.price, 0);
        setTotalPrice(price + toppingPrice);
    }, [toppings, price]);

    const handleUpdateBasket = () => {
        const selectedToppings = toppings.filter(topping => topping.check);
        const toppingPrice = selectedToppings.reduce((acc, curr) => acc + curr.price, 0);
        const totalPriceWithToppings = price + toppingPrice;

        const basketItem = {
            img,
            title,
            totalPrice: totalPriceWithToppings,
            selectedToppings
        };

        const existingBasketData = JSON.parse(localStorage.getItem('basketData') || '[]');
        const updatedBasketData = [...existingBasketData, basketItem];
        localStorage.setItem('basketData', JSON.stringify(updatedBasketData));

        setClickCount(clickCount + totalPriceWithToppings);
        console.log("Total Clicks:", clickCount + totalPriceWithToppings);
    };

    return (
        <div className='card'>
            {showCard && (
                <div style={{ display: "flex" }}>
                    <div className='card-01'>
                        <SmallCloseIcon onClick={handleClose}  />
                        <div className='card-01-item01'>
                            <img className='img-card w-80' src={img} alt={title} />
                            <div className='card-01-item01-text'>
                                <p style={{ fontWeight: "700", textAlign: "left" }}>{title}</p>
                                <p className='card-01-item01-desc'>{description}</p>
                            </div>
                            <p className='card-01-item01-price'>{price}</p>
                        </div>
                        <div className='card-01-item02'>
                            <div className='card-01-item02-div01'>
                                <h4>Đồ đi kèm</h4>
                            </div>
                            {toppings.map((topping, index) => (
                                <div className='card-01-item02-div02' key={index}>
                                    <input
                                        className='card-01-item02-div02-check'
                                        type='checkbox'
                                        checked={topping.check}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    <p className='card-01-item02-size'>{topping.name}</p>
                                    <p style={{ marginLeft: "54%" }}>{topping.price}</p>
                                </div>
                            ))}
                        </div>
                     
                        <div className='card-item02-04'>
                            <button className='button-Card01'>-</button>
                            <h3 className='card-num'>1</h3>
                            <button className='button-Card02'>+</button>
                            <button onClick={handleUpdateBasket} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Update Basket - {totalPrice}
                            </button>
                            
                        </div>
                    </div>
                    <div className='card-02'>
                        <CardPurchase clickCount={clickCount} Img={img} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
