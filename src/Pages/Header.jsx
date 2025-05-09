import {Stack, Link, Typography, Box} from '@mui/material';
import Logo from '../assets/images/logo.svg'
import Btn from '../components/ButtonsComp';
import OurStars from '../components/ourStars';
import Images from '../components/imageBank'
import ImageSelectedNow from '../components/WhichImage';

export default function Header() {
    return (
        <Stack component='header'  padding={{xs: '2em 3em' ,lg: '3em'}} marginBottom='5em'>
              <Stack component='nav' marginBottom='3em'>
                 <Link href='#'><img src={Logo} alt='tech-book-club' /></Link>
              </Stack>

              <Stack id='container'  sx={{display: 'flex',flexDirection: {xs: 'column', lg: 'row'}, justifyContent: {lg: 'space-between'}}}>
              <Stack component='section' width={{lg: '50%'}}>
                 <Typography variant='h1'  className='from-left'
                  fontSize={{xs: '2.5em', lg: '4.25em'}} marginBottom='.5em'
                    maxWidth={{lg: '445px'}}>Join the  ultimate tech <br/> book club</Typography>
                 <Typography variant='p' className='text' fontSize='1.4em' lineHeight='30px'
                  paddingRight={{lg: '2em'}}  >Turn your reading 
                    time into learning
                    time with fellow tech enthusiasts. 
                    Get curated recommendations,
                     join vibrant discussions, and level up your skills 
                     one chapter at a time.</Typography>
                <Box marginBottom='3em'>
                       <Box sx={{marginY: '2em'}}>
                       <Btn W1='250px' W2='350px' W3='360px'  Border='2px solid #000' Image={Images.arrowDown} 
                      imageTxt={true} bgColor='trasparent' btnLabel='REVIEW MEMBERSHIP OPTIONS' />
                     
                       </Box>
                       <OurStars cor='hsl(194, 78%, 11%)' />
                </Box>
              </Stack>
              
              <Stack className='from-right' width={{lg: '45%'}} >
              <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.heroImageM} />
              <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.heroImageT} />
              <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.heroImageD} />
              </Stack>
              </Stack>
             
        </Stack>
    )
}