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
    <Stack component="article" id='journal' marginY='1.2em' >
      <Typography variant="h4" textAlign={{lg: 'center'}} fontSize={{xs: '2.3em'}}
       marginY={3}  width={{xs: '200px', lg: '100%'}}>Your tech reading journey</Typography>
      <Box id="journal-list" className='from-top'
       sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, 
       justifyContent: {lg: 'space-between'}, padding: {lg: '2em'}}}>
        {
          JOURNEYDATA.map((item, index) => {
            return (
                <Stack key={index}  >
                     <Stack className="from-left " marginY={2} sx={{display: 'flex', 
                      flexDirection: 'row', justifyContent: { lg: 'space-evenly'}  }}>

                         <Stack className="square-num" sx={{width: '50px', height: '50px',
                          border: '2px solid #000', borderRadius: '7px', textAlign: 'center'}}>
                         <Typography variant="p" className="journey-text " marginTop='.7em'>{item.num} </Typography>  
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
