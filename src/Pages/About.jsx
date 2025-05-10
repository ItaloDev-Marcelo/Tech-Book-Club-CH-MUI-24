import { Stack, Typography, Box } from "@mui/material";
import Images from "../components/imageBank";
import ImageSelectedNow from "../components/WhichImage";
import CheckComponent from "../components/CheckItems";
import growTogether from '../components/GROWTOGETHERDT'

export default function AboutSection() {
 

  return (
    <Stack component="section" id="about"
    margin={{xs: '1.5em 0', lg: '1em 3em'}}>
      <Stack component="section" className="grow-together" marginY={2} padding={{lg: '0 1em'}} 
       sx={{display: 'flex',flexDirection: {xs: 'column-reverse', lg: 'row'},
        justifyContent: {lg: 'space-between'}}}>
        <Stack className='banner from-left Bn'  marginY={{xs: '2em', md: '3em', lg: '2em'}}  width={{lg: '45%'}}>
            <ImageSelectedNow x1='block' x2='none'  x3='none' Img={Images.togetherM} />
            <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.togetherT} />
            <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.togetherD} />
        </Stack>

        <Stack component='section' className='information from-right '  width={{lg: '50%'}}>
        <Typography  variant="h3" marginLeft={{md: '.2em', lg: 0}} fontSize={{xs: '2em', lg: '3.5em'}} 
         maxWidth={{xs: '400px', lg: '700px'}} marginY={{lg: '1em'}}>Read together, grow together</Typography>
        <Box>
             {
                growTogether.map((item, index) => {
                    return <CheckComponent Text={item.title} k={index} /> 
                })
             }
        </Box>
        </Stack>
      </Stack>

      <Stack component="section" className="average" marginY={2}  
       sx={{display: 'flex',flexDirection: {xs: 'column', lg: 'row'},
        justifyContent: {lg: 'space-between'}}}>
        

        <Stack component='section' className='information-l from-left' alignSelf='center'
         width={{lg: '41%'}}>
        <Typography variant="h3" position='relative'  fontSize={{xs: '2em', md: '2.7em', lg: '3.5em'}} marginY={2} 
         width={{xs: '250px', md: '55%', lg: '500px'}}  >Not your 
          average book <span> club <img src={Images.patternCircle} alt=''/> 
           </span></Typography>
        <Typography variant="p"  className='text'  fontSize='1.4em'>
        Connect with a community that speaks your language
         - from <strong>Python</strong> to <strong>TypeScript</strong> and everything 
        in between. Our discussions blend technical depth with practical applications.
        </Typography>
        </Stack>

        <Stack className='banner from-right Bn' marginTop='4em' 
        position='relative'   width={{lg: '45%'}}>
            <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.averageM} />
            <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.averageT} />
            <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.averageD} />
            <Stack position='absolute' left={{md: '75%', lg:'-3em'}} top={{md: '80%', lg: '20em'}}  display={{xs: 'none', md: 'block'}}>
            <img src={Images.techLogo} alt="" id="social-bubble" />
            </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
