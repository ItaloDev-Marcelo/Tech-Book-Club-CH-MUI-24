import {Stack, Typography} from '@mui/material';
import Images from '../components/imageBank'
import Stars from './starts';
const OurStars = () => {
  return (
      <Stack  className='ourStars' sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} component='article'>
          <Stack marginRight={1}>
            <img src={Images.avatar} alt='avatar'  className='avatar' />
          </Stack>
          <Stack>
             <Stars/>
             <Typography variant='p'>200+ developers joined already</Typography> 
          </Stack>
      </Stack>
  )
}

export default OurStars