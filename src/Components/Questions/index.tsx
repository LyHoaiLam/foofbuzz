import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon,
    AccordionPanel,
    OrderedList,
    ListItem } from "@chakra-ui/react";

export default function AboutUs() {


    return (

        <div className="w-full pr-96 pl-96">
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left' className="text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        GrabBuzz là gì?
                        </Box>
                        <AccordionIcon color="green" className='text-4xl' />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left' className="text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            Làm cách nào để đặt đồ ăn ở Việt Nam?
                        </Box>
                        <AccordionIcon color="green" className='text-4xl' />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <p className="text-lg font-bold">Sau đây là cách đơn giản nhất để đặt đồ ăn qua GrabFood khi bạn ở Việt Nam: </p><br></br>

                        <p className="my-2 bg-gradient-to-r from-red-600 via-yellow-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            <span className="text-lg font-bold text-black">Tìm kiếm nhà hàng hoặc món ăn yêu thích</span> - Nhập địa chỉ của bạn vào trang chủ. Xem các Nhà hàng và điểm ăn uống gần chỗ bạn trong danh sách của GrabFood. Chọn nhà hàng yêu thích, duyệt hết thực đơn và chọn món ăn bạn muốn đặt.</p>
                        <br></br>

                       <p className="my-2 bg-gradient-to-r from-red-600 via-yellow-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            <span className="text-lg font-bold text-black">Kiểm tra & Thanh toán</span> - Sau khi chắc chắn rằng bạn đã đặt đầy đủ các món theo nhu cầu, hãy nhấp vào tab “ORDER NOW” (ĐẶT MÓN NGAY) và nhập địa chỉ giao đồ ăn cuối cùng. Chọn phương thức thanh toán phù hợp nhất với bạn và thanh toán.</p>
                       <br></br>

                       <p className="my-2 bg-gradient-to-r from-red-600 via-yellow-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            <span className="text-lg font-bold text-black">Giao hàng</span> - GrabFood đã thiết kế một hành trình phục vụ khách hàng liền mạch để bạn có thể thưởng thức món ăn một cách trọn vẹn. Chúng tôi sẽ gửi cho bạn email và tin nhắn SMS tức thời xác nhận đơn đặt hàng của bạn và thời gian giao hàng dự kiến. Sau đó chúng tôi sẽ giao ngay đồ ăn cho bạn.
                        </p>
                      
                        </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left' className="text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                            Vì sao bạn nên chọn chúng tôi?
                        </Box>
                        <AccordionIcon color="green" className='text-4xl' />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <OrderedList>
                        <ListItem>Chất lượng phục vụ tốt nhất trên thị trường</ListItem>
                        <ListItem>Liên kết với các nhà hàng có kiểm định về an toàn thực phẩm của chính phủ</ListItem>
                        <ListItem>Shipper thân thiện và dễ thương</ListItem>
                        <ListItem>Giá cả phải chăng</ListItem>
                    </OrderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}