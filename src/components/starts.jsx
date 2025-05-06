import {Stack, Box, Typography} from '@mui/material';
import Images from '../components/imageBank'
const Stars = () => {
   return (
    <Box className='star-box'>
                  <img src={Images.star} alt='star-icon'/>
                  <img src={Images.star} alt='star-icon'/>
                  <img src={Images.star} alt='star-icon'/>
                  <img src={Images.star} alt='star-icon'/>
                  <img src={Images.star} alt='star-icon'/>
               </Box>
   )   
}

export default Stars