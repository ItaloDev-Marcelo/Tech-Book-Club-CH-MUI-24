import {Card, CardHeader, Stack, CardContent, CardActions, 
   Typography} from '@mui/material';
import CheckComponent from './CheckItems';
import Btn from './ButtonsComp';


const CardComponent = ({Tx1, Tx2, Width, Border, ImageText, bgColor,btnLabel,
    CardT1, CardT2, month}) => {


      
      
   return (
     <Card className='from-top card' elevation={5}
       sx={{margin: {xs: '1.5em 0', lg: '0 1em'}, padding: '1em'}}>
       <CardContent>
         <Stack>
             <Typography variant='h2' fontSize={{xs: '1.7em', lg: '1.6em'}} 
             lineHeight={2}> {CardT1} <br/> {CardT2}{month ? <small>/month</small> : ''} </Typography>
             <hr/>
         </Stack>
          <CheckComponent Text={Tx1} />
          <CheckComponent Text={Tx2} />
       </CardContent>
       <CardActions sx={{marginLeft: '1em'}}>
          <Btn Width={Width} Border={Border}
           Image={'no image'} imageTxt={ImageText} bgColor={bgColor} btnLabel={btnLabel} />
       </CardActions>
     </Card>
   )
}

export default CardComponent