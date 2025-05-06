import {Stack, Link, Typography, Box} from '@mui/material';
import Logo from '../assets/images/logo.svg'
import Btn from '../components/ButtonsComp';
import OurStars from '../components/ourStars';
import Images from '../components/imageBank'
import ImageSelectedNow from '../components/WhichImage';

export default function Header() {
    return (
        <Stack component='header'>
              <Stack component='nav'>
                 <Link href='#'><img src={Logo} alt='tech-book-club' /></Link>
              </Stack>

              <Stack id='container'>
              <Stack component='section'>
                 <Typography variant='h1' className='from-left'>Join the <br/> ultimate <br/> tech <br/> book club</Typography>
                 <Typography variant='p'>Turn your reading time into learning
                    time with fellow tech enthusiasts. 
                    Get curated recommendations,
                     join vibrant discussions, and level up your skills 
                     one chapter at a time.</Typography>
                <Box>
                      <Btn W1='250px' W2='350px' W3='360px'  Border='1px solid #000' Image={Images.arrowDown} 
                      imageTxt={true} bgColor='trasparent' btnLabel='REVIEW MEMBERSHIP OPTIONS' />
                      <OurStars />
                </Box>
              </Stack>
              
              <Stack className='from-right'>
              <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.heroImageM} />
              <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.heroImageT} />
              <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.heroImageD} />
              </Stack>
              </Stack>
             
        </Stack>
    )
}