
import Images from '../components/imageBank'
const CheckComponent = ({Text}) => {
   return (
      <li>
          <img src={Images.check} alt='' style={{margin: '0 .5em'}} />
          <span>{Text}</span>
      </li>
   )
}

export default CheckComponent