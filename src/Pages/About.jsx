import { Stack, Typography, Box } from "@mui/material";
import Images from "../components/imageBank";
import ImageSelectedNow from "../components/WhichImage";
import CheckComponent from "../components/CheckItems";
import growTogether from '../components/GROWTOGETHERDT'

export default function AboutSection() {
 

  return (
    <Stack component="section">
      <Stack component="section" className="grow-together">
        <Stack className='banner from-left'>
            <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.togetherM} />
            <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.togetherT} />
            <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.togetherD} />
        </Stack>

        <Stack component='section' className='information from-right'>
        <Typography varient="h3">Read together, grow together</Typography>
        <Box>
             {
                growTogether.map((item, index) => {
                    return <CheckComponent Text={item.title} k={index} /> 
                })
             }
        </Box>
        </Stack>
      </Stack>

      <Stack component="section" className="average">
        <Stack className='banner from-right'>
            <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.averageM} />
            <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.averageT} />
            <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.averageD} />
            <Stack display={{xs: 'none', lg: 'block'}}>
            <img src={Images.techLogo} alt="" id="social-bubble" />
            </Stack>
        </Stack>

        <Stack component='section' className='information from-left'>
        <Typography varient="h3">Not your <br/> average <br/> book <span>club</span>
        </Typography>
        <Typography variant="p">
        Connect with a community that speaks your language
         - from <strong>Python</strong> to <strong>TypeScript</strong> and everything 
        in between. Our discussions blend technical depth with practical applications.
        </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
