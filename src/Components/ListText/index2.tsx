
import { StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow  } from '@chakra-ui/react'


export default function Example() {

    return (

        <StatGroup className='bg-slate-300 rounded-lg pl-6'>
        <Stat>
          <StatLabel className=''>Sent</StatLabel>
          <StatNumber className='text-4xl text-lime-700'>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type='increase' className='text-lime-700' />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel className=''>Clicked</StatLabel>
          <StatNumber className='text-4xl text-red-600'>45</StatNumber>
          <StatHelpText>
            <StatArrow type='decrease' className='text-red-600' />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    )   
}
  
// render(<Example />)
