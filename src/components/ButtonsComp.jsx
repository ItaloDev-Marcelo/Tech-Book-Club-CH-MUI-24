import {Button, Stack} from '@mui/material';

const Btn = ({W1, W2, W3,Border,Image, imageTxt, bgColor,btnLabel}) => {
   return (
        <Button className='btn' sx={{width: {xs: W1, md: W2, lg: W3}, border: 
        Border, backgroundColor: bgColor }}>
            {btnLabel}
            <Stack sx={{display: imageTxt ? 'block' : 'none', position: 'relative', left: {xs: '-.5em', lg: '1.5em'}}}>
                <img src={Image} alt='imageTxt' />
            </Stack>
        </Button>
   )
}


export default Btn