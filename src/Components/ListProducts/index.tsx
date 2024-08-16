"use client";

import { Wrap, WrapItem, Center, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import Product from "../Product";
import { useState, useEffect } from "react";
import Card from "../Card";
import { AddIcon } from "@chakra-ui/icons";



const listproduct = [
    {
        imageUrl: 'https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/10/cach-lam-ga-u-muoi-thumbnail.jpg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Gà ủ muối hoa tiêu',
        formattedPrice: '89.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://file.hstatic.net/1000394081/article/bun-dau-mam-tom-thap-cam_2321472f6d634b1192e171c5e659e187.jpg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Bún đậu mắm tôm Hà Nội',
        formattedPrice: '211.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://tiki.vn/blog/wp-content/uploads/2023/07/thumb-1.jpeg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Gà sốt mắm tỏi',
        formattedPrice: '71,000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://static.vinwonders.com/production/ga-ran-nha-trang-1.jpg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Gà gán Huỳnh Trương (Tân Phú)',
        formattedPrice: '180.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },

    {
        imageUrl: 'https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Gà chiên giòn Tân Bình',
        formattedPrice: '89.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://globaltravel.com.vn/wp-content/uploads/2018/03/top-quan-banh-mi-ngon-ngat-ngay-o-Hoi-An-18.jpg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Bánh mì Hội An',
        formattedPrice: '211.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://i-giadinh.vnecdn.net/2022/12/30/Buoc-4-4-4790-1672386702.jpg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Cơm chiên Dương Châu',
        formattedPrice: '71,000',
        reviewCount: 34,
        rating: 4,
        rank: ""
    },
    {
        imageUrl: 'https://cdn.tgdd.vn/2020/10/CookProductThumb/Sushi-la-gi-co-tot-khong-nhung-loai-sushi-tot-va-khong-tot-cho-suc-khoe-1b-620x620.jpg',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Sushi cá ngừ Đại Dương',
        formattedPrice: '180.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://mms.img.susercontent.com/vn-11134513-7r98o-lstxuz2vomu1a6@resize_ss1242x600!@crop_w1242_h600_cT',
        imageAlt: 'Rear view of modern home with pool',
        title: 'Mì ý Spagetti',
        formattedPrice: '180.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://cdn3.ivivu.com/2023/11/pho-bo-ivivu-2.jpeg',
        title: 'Phở bò goc Bắc',
        formattedPrice: '75.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://cdn3.ivivu.com/2023/11/pho-bo-ivivu-2.jpeg',
        title: 'Phở bò góc Bắc to đặc biệt',
        formattedPrice: '60.000',
        reviewCount: 34,
        rating: 4,
        rank: ""
    },
    {
        imageUrl: 'https://hoasenfoods.vn/wp-content/uploads/2024/01/bun-bo-hue.jpg',
        title: 'Bún bò huế',
        formattedPrice: '45.000',
        reviewCount: 34,
        rating: 4,
        rank: ""
    },
    {
        imageUrl: 'https://assets.unileversolutions.com/v1/1188476.jpg',
        title: 'Trà chanh',
        formattedPrice: '35.000',
        reviewCount: 34,
        rating: 4,
        rank: "Món ăn nổi bật"
    },
    {
        imageUrl: 'https://cdn.tgdd.vn/Files/2022/03/11/1419827/2-cach-lam-soda-viet-quat-blueberry-soda-mat-lanh-sang-khoai-ngay-he-202203111731314390.jpg',
        title: 'Soda Việt quất',
        formattedPrice: '35.000',
        reviewCount: 34,
        rating: 4,
        rank: ""
    },
    

]

const ListProducts: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [showCard, setShowCard] = useState<boolean>(false);
    const [storedData, setStoredData] = useState<any[]>([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('productData') || '[]');
        if (savedData.length > 0) {
            setStoredData(savedData);
        } else {
            localStorage.setItem('productData', JSON.stringify(listproduct));
            setStoredData(listproduct);
        }
    }, []);

    const handlePayment = (index: number) => {
        setSelectedItem(index);
        setShowCard(true);
    };

    return (
        <>
            <Wrap spacing='30px' justify='center'>
                <SimpleGrid className='grid xl:grid-cols-4 sm:grid-cols-2' spacing='20px'>
                    {storedData.map((item, index) => (
                        <WrapItem key={index} marginTop="0px">
                            <Center h="auto" bg="red.200">
                                <Product product={item} handlePayment={() => handlePayment(index)} />
                            </Center>
                        </WrapItem>
                    ))}
                </SimpleGrid>
            </Wrap>

            <div className="flex justify-center">
                {selectedItem !== null && showCard && (
                    <Card
                        img={storedData[selectedItem].imageUrl}
                        title={storedData[selectedItem].title}
                        description={storedData[selectedItem].description}
                        price={storedData[selectedItem].formattedPrice}
                    />
                )}
            </div>
        </>
    );
};

export default ListProducts;
