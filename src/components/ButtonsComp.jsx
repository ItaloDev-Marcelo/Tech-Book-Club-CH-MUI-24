import {Button, Stack} from '@mui/material';

const Btn = ({Width,Border,Image, imageTxt, bgColor,btnLabel}) => {
   return (
        <Button className='btn' sx={{width: Width, border: Border, backgroundColor: bgColor }}>
            {btnLabel}
            <Stack sx={{display: imageTxt ? 'block' : 'none'}}>
                <img src={Image} alt='imageTxt' />
            </Stack>
        </Button>
   )
}


export default Btn