import { ReactComponent as MinIcon } from '../assets/images/ico-min.svg';
import { ReactComponent as MaxIcon } from '../assets/images/ico-max.svg';
import { ReactComponent as CloseIcon } from '../assets/images/ico-close.svg';


const Icons = [
  {
    name: 'min',
    icon: () => {
      return <MinIcon />
    },
  },
  {
    name: 'max',
    icon: () => {
      return <MaxIcon />
    },
  },
  {
    name: 'close',
    icon: () => {
      return <CloseIcon />
    },
  },
]

export default Icons