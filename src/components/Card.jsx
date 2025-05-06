import {Card, CardHeader, Stack, CardContent, CardActions, 
   Typography} from '@mui/material';
import CheckComponent from './CheckItems';
import Btn from './ButtonsComp';


const CardComponent = ({Tx1, Tx2, Width, Border, ImageText, bgColor,btnLabel,
    CardT1, CardT2, month}) => {


      
      
   return (
     <Card className='from-top'>
       <CardContent>
         <Stack>
             <Typography variant='h2'>{CardT1} <br/> {`${CardT2}
              ${month ? '/month' : ''}`} </Typography>
         </Stack>
          <CheckComponent Text={Tx1} />
          <CheckComponent Text={Tx2} />
       </CardContent>
       <CardActions>
          <Btn Width={Width} Border={Border}
           Image={'no image'} imageTxt={ImageText} bgColor={bgColor} btnLabel={btnLabel} />
       </CardActions>
     </Card>
   )
}

export default CardComponent