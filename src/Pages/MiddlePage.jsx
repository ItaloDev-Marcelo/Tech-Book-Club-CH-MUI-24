import { Stack, Typography, Box } from "@mui/material";
import Journey from "./Journey";
import CardComponent from "../components/Card";


export default function MiddlePage() {
    return (
      <Stack component='section' padding={{lg: '2em 4em'}}>
         <Journey/>
         <Stack component='section' className='Membership-options'>
            <Typography variant="h4" className="from-top" marginY={{xs: '1em', lg: '2em'}} textAlign={{lg: 'center'}}>Membership options</Typography>
            <Stack id='card-container' marginY='2em'  sx={{display: 'flex',flexDirection: 
               {xs: 'column', lg: 'row'},
                justifyContent: {lg: 'space-around'}}}>

            <CardComponent Tx1='1 book/month' Tx2='Online forums'
             Width='300px' Border='2px solid #000' ImageText={false}  bgColor='hsl(17, 41%, 97%)' 
            btnLabel='SUBSCRIBE NOW' CardT1='Starter' CardT2='$19' month={true} />

   <CardComponent Tx1='2 books/month' Tx2='Virtual meetups' Width='300px' Border='2px solid #000' ImageText={false} bgColor='hsl(17, 41%, 97%)'
   btnLabel='SUBSCRIBE NOW' CardT1='Pro' CardT2='$29'
    month={true} />

   <CardComponent Tx1='Team access' Tx2='Private sessions' Width='250px' Border='2px solid #000' ImageText={false} bgColor='hsl(17, 41%, 97%)'
   btnLabel='TALK TO US' CardT1='Enterprise' CardT2='Custom'
    month={false} />
            </Stack>
         </Stack>
      </Stack>
    )
}