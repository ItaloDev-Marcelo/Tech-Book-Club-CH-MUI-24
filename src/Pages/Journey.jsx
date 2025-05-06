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
    <Stack component="article">
      <Typography variant="h4">Your tech reading journey</Typography>
      <Box id="journal-list" className='from-top' sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
        {
          JOURNEYDATA.map((item, index) => {
            return (
                <Stack key={index}>
                     <Stack className="from-left">
                         <Stack className="square-num">
                            {item.num}
                         </Stack>
                        <Stack display={{xs: 'none', lg: 'block'}}>
                        <img src={Images.patternArrow} alt="arrow-lef" />
                        </Stack>
                     </Stack>
                     <Typography variant="p" className="journey-text">{item.title}</Typography>
                </Stack>
            )
          })  
        }
      </Box>
    </Stack>
  );
}
