import { Stack, Typography} from "@mui/material";
import Stars from "../components/starts";

export default function Review() {
    return (
        <Stack>
           <Stars/>
           <Typography variant="h4">"This book club transformed my technical 
            reading from a solitary activity into an 
            enriching community experience. The discussions are gold!"</Typography>
           <Typography variant="p" className="author">Sarah Chen, Software Architect</Typography>
        </Stack>
    )
}