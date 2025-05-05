import {Stack} from '@mui/material';

const ImageSelectedNow = ({x1,x2,x3,Img}) => {
    return (
         <Stack component='figure' display={{xs: x1, md: x2, lg: x3}}>
            <img src={Img} alt='Hero image'  />
        </Stack>
    )
}

export default ImageSelectedNow 