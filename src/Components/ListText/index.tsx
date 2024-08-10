
import { Stat, StatLabel, StatNumber, StatHelpText, ListItem, UnorderedList, CircularProgress, CircularProgressLabel, Step,
 } from "@chakra-ui/react";
import Statistical2 from "./index2";
import Statistical3 from "./index3";

export default function ListText() {
    return (

        <div className="w-full pr-96 pl-96">
            <div> 
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
                    
                    <div className="w-1/2">
                        <Statistical3 />
                    </div>
                </div>

                <div>
                    <Statistical2 />
                </div>

            </div>
        </div>

    )
}