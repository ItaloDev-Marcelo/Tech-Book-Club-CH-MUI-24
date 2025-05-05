import { Stack, Typography, Box } from "@mui/material";
import Journey from "./Journey";
import CardComponent from "../components/Card";


export default function MiddlePage() {
    return (
      <Stack component='section'>
         <Journey/>
         <Stack component='section' className='Membership-options'>
            <Typography variant="h4">Membership options</Typography>
            <Stack id='card-container'>
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