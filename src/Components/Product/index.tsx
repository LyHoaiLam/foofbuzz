import { Badge, Box, Image, Button, Wrap, WrapItem } from "@chakra-ui/react";
import '../../app/globals.css'

function Product({ product, handlePayment }) {
    return (
        <Box maxW={{ base: '100%', md: 'sm' }} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image className="w-full md:w-72 h-48 rounded-md" src={product.foodImage} alt={product.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge className="text-orange-600" borderRadius='full' px='2' colorScheme='teal' textTransform='uppercase'>
                        New
                    </Badge>
                    <Box
                        className="text-xl font-semibold"
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        // textTransform='uppercase'
                        ml='2'
                    >
                        {product.rank}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {product.foodName}
                </Box>

                <Box>
                    {product.price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / VNĐ
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {product.reviewCount} reviews
                    </Box>

                    <Button
                        onClick={handlePayment}
                        className="text-white bg-green-500 bg-slate-500 rounded-lg ml-5 p-2">
                        Mua Ngay
                    </Button>

                </Box>
            </Box>
        </Box>
    );
}

export default Product;
