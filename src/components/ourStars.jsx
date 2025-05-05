import {Stack, Box, Typography} from '@mui/material';
import Images from '../components/imageBank'
const OurStars = () => {
  return (
      <Stack  className='ourStars' sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} component='article'>
          <Stack marginRight={1}>
            <img src={Images.avatar} alt='avatar'  className='avatar' />
          </Stack>
          <Stack>
          <Box className='star-box'>
              <img src={Images.star} alt='star-icon'/>
              <img src={Images.star} alt='star-icon'/>
              <img src={Images.star} alt='star-icon'/>
              <img src={Images.star} alt='star-icon'/>
              <img src={Images.star} alt='star-icon'/>
           </Box>
             <Typography variant='p'>200+ developers joined already</Typography> 
          </Stack>
      </Stack>
  )
}

export default OurStars