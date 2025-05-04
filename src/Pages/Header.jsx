import {Stack, Link, Typography} from '@mui/material';
import Logo from '../assets/images/logo.svg'

export default function Header() {
    return (
        <Stack component='header'>
              <Stack component='nav'>
                 <Link href='#'><img src={Logo} alt='tech-book-club' /></Link>
              </Stack>

              <Stack  component='section'>
                 <Typography variant='h1'>Join the <br/> ultimate <br/> tech <br/> book club</Typography>
                 <Typography variant='p'>Turn your reading time into learning
                    time with fellow tech enthusiasts. 
                    Get curated recommendations,
                     join vibrant discussions, and level up your skills 
                     one chapter at a time.</Typography>

              </Stack>
        </Stack>
    )
}