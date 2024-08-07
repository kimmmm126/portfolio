import { ReactComponent as InstagramSvgIcon } from "../assets/images/ico-instagram.svg";
import { ReactComponent as MinSvgIcon } from "../assets/images/ico-min.svg";
import { ReactComponent as MaxSvgIcon } from "../assets/images/ico-max.svg";
import { ReactComponent as CloseSvgIcon } from "../assets/images/ico-close.svg";

const InstagramIcon = ({ width = 0, height = 0 }) => {
  return <InstagramSvgIcon width={width} height={height} />;
};

const MinIcon = ({ className }) => {
  return <MinSvgIcon className={className} />;
};

const MaxIcon = ({ className }) => {
  return <MaxSvgIcon className={className} />;
};

const CloseIcon = ({ className }) => {
  return <CloseSvgIcon className={className} />;
};

export { InstagramIcon, MinIcon, MaxIcon, CloseIcon };
