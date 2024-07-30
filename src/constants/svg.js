import { ReactComponent as HomeIcon } from '../assets/images/ico-home.svg';
import { ReactComponent as InfoIcon } from '../assets/images/ico-info.svg';
import { ReactComponent as DesignIcon } from '../assets/images/ico-design.svg';
import { ReactComponent as MapIcon } from '../assets/images/ico-map.svg';
import { ReactComponent as LikeIcon } from '../assets/images/ico-like.svg'

const SvgIcons = [
  {
    name: "home",
    icon: () => {
      return <HomeIcon />
    },
  },
  {
    name: "info",
    icon: () => {
      return <InfoIcon />
    },
  },
  {
    name: "design",
    icon: () => {
      return <DesignIcon />
    },
  },
  {
    name: "map",
    icon: () => {
      return <MapIcon />
    },
  },
  {
    name: "home",
    icon: () => {
      return <HomeIcon />
    },
  },
  {
    name: "info",
    icon: () => {
      return <InfoIcon />
    },
  },
  {
    name: "design",
    icon: () => {
      return <DesignIcon />
    },
  },
  {
    name: "like",
    icon: () => {
      return <LikeIcon />
    },
  },
]

export default SvgIcons