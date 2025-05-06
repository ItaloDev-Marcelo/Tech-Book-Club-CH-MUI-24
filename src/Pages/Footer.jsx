import { Stack, Typography, Box} from "@mui/material";
import OurStars from '../components/ourStars';
import Btn from "../components/ButtonsComp";
import Imagens from "../components/imageBank";
export default function Footer() {
    return (
        <Stack component='footer'>
           <Stack id='footer-header-information'>
           <Typography variant="h5">"This book club transformed my technical 
            reading from a solitary activity into an 
            enriching community experience. The discussions are gold!"</Typography>
            <OurStars/>
            <Btn W1='250px' W2='350px' W3='360px' Border='1px solid #000' 
            Image={Imagens.arrowUp} imageTxt={true} bgColor='trasparent' 
            btnLabel='REVIEW MEMBERSHIP OPTIONS' />
           </Stack>
          <Stack id='line'>
              <Typography variant="h6">© 2024 - Tech Book Club</Typography>
               <Box>
                  <img src={Imagens.bluesky} alt='bluesky-icon' />
                  <img src={Imagens.linkdin} alt='linkdin-icon' />
               </Box>
          </Stack>
        </Stack>
    )
}