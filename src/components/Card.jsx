import {Card, CardHeader, Box, CardContent, CardActions, Typography} from '@mui/material';
import CheckComponent from './CheckItems';
import Btn from './ButtonsComp';


const CardComponent = ({Tx1, Tx2, Width, Border, ImageText, bgColor,
   btnLabel,CardT1, CardT2, month}) => {
   return (
     <Card>
       <CardHeader>
           <Box>
           <Typography varient='h2'>
              {CardT1} <br/> {CardT2} 
              <Typography variant='p' display={month ? 'block' : 'none'}>
                  /{month}
              </Typography> 
           </Typography>
           <hr/>
           </Box>
       </CardHeader>
       <CardContent>
          <CheckComponent Text={Tx1} />
          <CheckComponent Text={Tx2} />
       </CardContent>
       <CardActions>
          <Btn Width={Width} Border={Border}
           Image={Image} imageTxt={ImageText} bgColor={bgColor} btnLabel={btnLabel} />
       </CardActions>
     </Card>
   )
}

export default CardComponent