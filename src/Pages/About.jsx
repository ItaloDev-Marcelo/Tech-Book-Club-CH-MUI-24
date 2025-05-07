import { Stack, Typography, Box } from "@mui/material";
import Images from "../components/imageBank";
import ImageSelectedNow from "../components/WhichImage";
import CheckComponent from "../components/CheckItems";
import growTogether from '../components/GROWTOGETHERDT'

export default function AboutSection() {
 

  return (
    <Stack component="section" id="about" margin={{xs: '5em 0', lg: '5em 3em'}}>
      <Stack component="section" className="grow-together" marginY={2} 
       sx={{display: 'flex',flexDirection: {xs: 'column', lg: 'row'}, justifyContent: {lg: 'space-between'}}}>
        <Stack className='banner from-left'  width={{lg: '40%'}}>
            <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.togetherM} />
            <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.togetherT} />
            <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.togetherD} />
        </Stack>

        <Stack component='section' className='information from-right'  width={{lg: '41%'}}>
        <Typography variant="h3" fontSize={{xs: '2em'}} width={{xs: '200px', lg: '400'}} marginY='1em'>Read together, grow together</Typography>
        <Box>
             {
                growTogether.map((item, index) => {
                    return <CheckComponent Text={item.title} k={index} /> 
                })
             }
        </Box>
        </Stack>
      </Stack>

      <Stack component="section" className="average" marginY={2}   sx={{display: 'flex',flexDirection: {xs: 'column', lg: 'row'}, justifyContent: {lg: 'space-between'}}}>
        

        <Stack component='section' className='information-l from-left' alignSelf='center' width={{lg: '40%'}}>
        <Typography variant="h3"  fontSize={{xs: '2em'}} marginY={2}  width={{xs: '250px', lg: '400'}} >Not your  average book <span> club <img src={Images.patternCircle} alt=''/>  </span></Typography>
        <Typography variant="p"  className='text'  fontSize='1.4em'>
        Connect with a community that speaks your language
         - from <strong>Python</strong> to <strong>TypeScript</strong> and everything 
        in between. Our discussions blend technical depth with practical applications.
        </Typography>
        </Stack>

        <Stack className='banner from-right' marginTop='4em' position='relative'   width={{lg: '41%'}}>
            <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.averageM} />
            <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.averageT} />
            <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.averageD} />
            <Stack position='absolute' left='-3em' top='13em'  display={{xs: 'none', lg: 'block'}}>
            <img src={Images.techLogo} alt="" id="social-bubble" />
            </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
