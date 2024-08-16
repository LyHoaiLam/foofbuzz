import { useState, useEffect } from 'react';
import "./style.css";


// Define types for the props
interface CardPurchaseProps {
    clickCount: number;
    Img: string;
}

// Define the structure of basket data
interface BasketItem {
    img: string;
    title: string;
    totalPrice: number;
    selectedToppings: { name: string }[];
}

function CardPurchase({ clickCount, Img }: CardPurchaseProps) {
    const [basketData, setBasketData] = useState<BasketItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const updateBasketData = () => {
            const data: BasketItem[] = JSON.parse(localStorage.getItem('basketData') || '[]');
            setBasketData(data);
            const total = data.reduce((acc, item) => acc + item.totalPrice, 0);
            setTotalPrice(total);
        };

        updateBasketData();
        window.addEventListener('storage', updateBasketData);

        return () => {
            window.removeEventListener('storage', updateBasketData);
        };
    }, [clickCount]);

    return (
        <div>
            <div className='card-02-01' style={{ display: "flex", backgroundColor: "white" }}>
                <img className='img-card02 w-80' src={Img} alt="Card" />
                <div className='card-02-01-divtext'>
                    <div>
                        <p>Địa chỉ</p>
                        <input style={{ backgroundColor: "#ffffff" }} className="input-card-02" placeholder='791/Trần Xuân Soạn, KP4, P. Tân Hưng, Q7, Hồ Chí Minh ' />
                    </div>

                    <div>
                        <p>Chi tiết địa chỉ</p>
                        <input style={{ backgroundColor: "#ffffff" }} className="input-card-02" placeholder='791/Trần Xuân Soạn, KP4, P. Tân Hưng, Q7, Hồ Chí Minh ' />
                    </div>
                    <div>
                        <p>Ghi chú cho tài xế</p>
                        <input style={{ backgroundColor: "#ffffff" }} className="input-card-02" placeholder='Hãy gặp tôi tại sảnh' />
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "white" }} className='tt-dh'>
                <p style={{ fontWeight: "700", marginLeft: "5%" }}>Tóm tắt đơn hàng</p>

                <div className='item-00' style={{ display: "flex", marginLeft: "5%" }}>
                    <div className='tt-dh-15' style={{ display: "flex" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {basketData.map((item, index) => (
                                <div key={index} className='div-info'>
                                    <button className='button-Card015'>+</button>
                                    <h3 className='button-Card014'>1</h3>
                                    <button className='button-Card016'>-</button>
                                    <img className='w-60' src={item.img} alt={item.title} />
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <p className='mrg0'>{item.title}</p>
                                                <p className='mrg06'>{item.totalPrice}</p>
                                            </div>
                                        </div>
                                        {item.selectedToppings.map((topping, index) => (
                                            <p key={index} className='mrg0'>{topping.name}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='tong'>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", marginLeft: "5%" }}>
                        <h4 className='mg0'>Tổng tạm tính</h4>
                        <h4 className='mg0'>{totalPrice}</h4>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", marginLeft: "5%" }}>
                        <h4 className='mg0'>Phí áp dụng</h4>
                        <h4 className='mg0'>14.000</h4>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "white", marginTop: "20px" }}>
                <p className="mgrL pttt" style={{ fontWeight: "700", borderBottom: "1px solid #bcc3d1", padding: "2% 0", marginLeft: "5%" }}>Chi tiết thanh toán</p>
                <div style={{ padding: "2% 0" }} className="mgrL">
                    <p className='pttt'>Phương thức thanh toán</p>
                    <input placeholder='Tiền mặt' className='input-tt' />

                    <p className='hs'>Hồ sơ</p>
                    <input placeholder='Personal' className='input-hs' />
                </div>
            </div>

            <div style={{ backgroundColor: "white", paddingBottom: "50px" }}>
                <p className='mgrL' style={{ fontWeight: "700", borderBottom: "2px solid #bcc3d1", paddingBottom: "2%", paddingTop: "1%" }}>Khuyến mãi</p>
                <input className='input-Apply' placeholder='Nhập mã khuyến mãi' />
                <button className='button-Apply'>Áp dụng</button>
                <div className='voicher' style={{ backgroundColor: "white" }}>
                    <p style={{ fontWeight: "700" }} className='vc01'>ZaloPay - Giảm 20%</p>
                    <p className='vc02'>Promo Code: <span style={{ color: "green", fontWeight: "700" }}>ZALOPAYGF1</span></p>
                    <div className='vc03' style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
                        <p>Valid 2023-08-01 to 2023-08-31</p>
                        <button className='button-voicher'>APPLY</button>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "white", paddingBottom: "50px", display: "flex", alignItems: "center" }}>
                <div>
                    <p>Tổng cộng</p>
                    <p style={{ fontWeight: "1000" }}>{totalPrice} VĐ</p>
                </div>
                <button className='button-TT'>Thanh toán</button>
            </div>
        </div>
    );
}

export default CardPurchase;
