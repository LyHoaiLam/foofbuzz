
import { Stat, StatLabel, StatNumber, StatHelpText, CircularProgress, CircularProgressLabel,
} from "@chakra-ui/react";


export default function Statistical3() {
   return (

       <div>
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
   )
}