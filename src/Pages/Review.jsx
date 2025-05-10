import { Stack, Typography} from "@mui/material";
import Stars from "../components/starts";

export default function Review() {
    return (
        <Stack sx={{display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', marginY: '1.5em', alignContent: 'center'}}>
           <Stack alignSelf={{md: 'center' }}>
           <Stars/>
           </Stack>
           <Typography variant="h4" className="from-top Review"   fontWeight={600}
           textAlign={{lg: 'center'}} padding={{xs: '1em 0', lg: '1em 4.5em'}}>" This book club transformed my technical 
            reading from a solitary activity into an 
            enriching community experience. The discussions are gold! "</Typography>
           <Typography variant="p" alignSelf={{md: 'center' }} className="author text" >Sarah Chen, Software Architect</Typography>
        </Stack>
    )
}