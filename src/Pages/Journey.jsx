import { Stack, Typography, Box } from "@mui/material";
import Images from "../components/imageBank";

export default function Journey() {
  const JOURNEYDATA = [
    {
      title: "Choose your membership tier",
      num: 1
    },
    {
      title: "Get your monthly book selection",
      num: 2
    },
    {
      title: "Join our discussion forums",
      num: 3
    },
    {
      title: "Attend exclusive meetups",
      num: 4
    },
  ];

  return (
    <Stack component="article" id='journal' marginY={{xs: '7em', lg: '4em'}} 
    padding={{xs: '1.7em 1em', lg: '0'}} position='relative' >
      <Typography variant="h4" textAlign={{lg: 'center'}} 
      fontSize={{xs: '2.3em', lg: '3.2em'}} padding='.2em' 

       marginY='1.2em'  width={{xs: '400px', lg: '100%'}} className="Title">Your tech reading journey</Typography>
      <img src={Images.glow } alt='' className='glow-2'/>
      <Box id="journal-list" className='from-top'
       sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, 
       justifyContent: {lg: 'space-between'}, padding: {xs: '0', lg: ' 0 2em'}}}>
       
        {
          JOURNEYDATA.map((item, index) => {
            return (
                <Stack key={index}  >
                     <Stack className="from-left " marginY={1} sx={{display: 'flex', 
                      flexDirection: 'row', justifyContent: { lg: 'space-evenly'}  }}>

                         <Stack className="square-num" sx={{width: {xs: '35px', lg: '50px'}, 
                         height: {xs: '35px', lg: '45px'},
                          border: '2px solid #000', borderRadius: '4px', 
                          textAlign: 'center', marginBottom: {lg: '.5em'}}}>
                         <Typography variant="p" className="journey-text " marginTop={{xs: '.3em', lg: '.7em'}}>{item.num} </Typography>  
                         </Stack>
                        <Stack display={{xs: 'none', lg: 'block'}}>
                        <img src={Images.patternArrow} alt="arrow-lef" />
                        </Stack>
                     </Stack>
                     <Typography variant="p" className="journey-text title" 
                     marginY={{xs: 1, lg: 0}} marginLeft={{lg: '1.7em'}} width={{xs: '290px', lg: '200px'}}>{item.title}</Typography>
                </Stack>
            )
          })  
        }
      </Box>
    </Stack>
  );
}
