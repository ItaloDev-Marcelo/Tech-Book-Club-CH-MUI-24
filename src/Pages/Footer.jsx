import { Stack, Typography, Box} from "@mui/material";
import OurStars from '../components/ourStars';
import Btn from "../components/ButtonsComp";
import Imagens from "../components/imageBank";
export default function Footer() {
    return (
        <Stack component='footer'
           padding={{xs: '3em 2em', lg: '2.5em 4em'}}
            borderRadius='25px 25px 0 0'>
           <Stack id='footer-header-information'>
           <Typography variant="h5"  fontSize={{xs: '2.3em', lg: '4em'}} padding={{lg: '1em 2em'}} textAlign='center'>Ready to debug your reading list?</Typography>
            <Stack alignSelf='center' marginY={4}><OurStars cor='#fff' /></Stack>
            <Stack alignSelf='center' color='#fff' ><Btn W1='250px' W2='350px' W3='360px' Border='1px solid #000' 
            Image={Imagens.arrowUp} imageTxt={true} bgColor='trasparent' 
            btnLabel='REVIEW MEMBERSHIP OPTIONS' /></Stack>
           </Stack>
          <Stack id='line' sx={{display: 'flex', flexDirection: 'row',
             justifyContent: 'space-between', alignContent: 'center', marginY: 2}}>
              <Typography variant="h6">© 2024 - Tech Book Club</Typography>
               <Box display='flex'alignSelf='center' marginY={1} >
                 <Box marginRight={{xs: 1, lg: 2}}>
                 <img src={Imagens.bluesky} alt='bluesky-icon' />
                 </Box>
                 <Box>
                 <img src={Imagens.linkdin} alt='linkdin-icon' />
                 </Box>
               </Box>
          </Stack>
        </Stack>
    )
}