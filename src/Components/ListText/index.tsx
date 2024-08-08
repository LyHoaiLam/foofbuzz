
import { Stat, StatLabel, StatNumber, StatHelpText, ListItem, UnorderedList, CircularProgress, CircularProgressLabel, Step,
 } from "@chakra-ui/react";
import Example from "./index2";

export default function ListText() {
    return (

        <div className="w-full pr-96 pl-96">

            <div className="flex">
                <div className="w-1/2">
                    <CircularProgress value={90} color='green'>
                        <CircularProgressLabel>90%</CircularProgressLabel>
                    </CircularProgress>

                    <UnorderedList>
                        <ListItem>Giao hàng nhanh chống</ListItem>
                        <ListItem>Đầy đủ đơn hàng</ListItem>
                        <ListItem>Chất lượng món ăn ngon</ListItem>
                        <ListItem>Thái độ chuyên chuyệp</ListItem>
                    </UnorderedList>
                </div>
                
                <div className="flex border-lime-600 border-solid border-2 w-1/2 rounded-lg p-3">
                    
                    <div>
                        <Stat>
                            <StatLabel>Collected Fees</StatLabel>
                            <StatNumber className="text-red-600">1.000.000.000  VNĐ</StatNumber>
                            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                        </Stat>
                    </div>

                    <div>
                        <CircularProgress value={50} color='green'>
                            <CircularProgressLabel>50%</CircularProgressLabel>
                        </CircularProgress>
                    </div>

                </div>
            </div>


            <div>
                <Example />
            </div>

        </div>
    )
}