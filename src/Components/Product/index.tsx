import { Badge, Box, Image } from "@chakra-ui/react";

function Product({ product }) {
    return (
        <Box maxW={{ base: '100%', md: 'sm' }} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image className="w-full md:w-72 h-48 rounded-md" src={product.imageUrl} alt={product.imageAlt} />

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
                    {product.title}
                </Box>

                <Box>
                    {product.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / VNĐ
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {/* {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < product.rating ? 'teal.500' : 'gray.300'}
                            />
                        ))} */}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {product.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Product;
