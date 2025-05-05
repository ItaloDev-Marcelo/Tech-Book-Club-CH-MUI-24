import { Stack, Typography, Box } from "@mui/material";
import Images from "../components/imageBank";
import ImageSelectedNow from "../components/WhichImage";
import CheckComponent from "../components/CheckItems";

export default function AboutSection() {
  const GROWTOGETHER = [
    {
      title: "Monthly curated tech reads selected by industry experts",
    },
    {
      title: "Virtual and in-person meetups for deep-dive discussions",
    },
    {
      title: "Early access to new tech book releases",
    },
    {
      title: "Author Q&A sessions with tech thought leaders",
    }
  ];

  return (
    <Stack component="section">
      <Stack component="section" className="grow-together">
        <Stack className='banner'>
            <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.togetherM} />
            <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.togetherT} />
            <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.togetherD} />
        </Stack>

        <Stack component='section' className='information'>
        <Typography varient="h3">Read together, grow together</Typography>
        <Box>
             {
                GROWTOGETHER.map((item, index) => {
                    return <CheckComponent Text={item} k={index} />
                })
             }
        </Box>
        </Stack>
      </Stack>

      <Stack component="section" className="average">
        <Stack className='banner'>
            <ImageSelectedNow x1='block' x2='none' x3='none' Img={Images.averageM} />
            <ImageSelectedNow x1='none' x2='block' x3='none' Img={Images.averageT} />
            <ImageSelectedNow x1='none' x2='none' x3='block' Img={Images.averageD} />
            <Stack display={{xs: 'none', lg: 'block'}}>
            <img src={Images.techLogo} alt="" id="social-bubble" />
            </Stack>
        </Stack>

        <Stack component='section' className='information'>
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
