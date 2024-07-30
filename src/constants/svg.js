import { ReactComponent as HomeIcon } from '../assets/images/ico-home.svg';
import { ReactComponent as MenuIcon } from '../assets/images/ico-menu.svg';
import { ReactComponent as InfoIcon } from '../assets/images/ico-info.svg';
import { ReactComponent as SkillIcon } from '../assets/images/ico-skills.svg';
import { ReactComponent as DesignIcon } from '../assets/images/ico-design.svg';
import { ReactComponent as MapIcon } from '../assets/images/ico-map.svg';
import { ReactComponent as LikeIcon } from '../assets/images/ico-like.svg';
import { ReactComponent as PhotoIcon } from '../assets/images/ico-photo.svg'

const SvgIcons = [
  {
    name: "home",
    icon: () => {
      return <MenuIcon />
    },
  },
  {
    name: "skills",
    icon: () => {
      return <SkillIcon />
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
    name: "photo",
    icon: () => {
      return <PhotoIcon />
    },
  },
  {
    name: "info",
    icon: () => {
      return <InfoIcon />
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