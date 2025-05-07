
import Images from '../components/imageBank'
const CheckComponent = ({Text, k}) => {
   return (
      <li key={k} className='from-left '>
          <img src={Images.check} alt='' style={{margin: '0 .5em'}} />
          {Text}
      </li>
   )
}

export default CheckComponent