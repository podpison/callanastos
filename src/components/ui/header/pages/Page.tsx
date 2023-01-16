import { NavLink } from "react-router-dom";
import { HeaderPageLinkType } from "./Pages";
import hoverLineImg from '../../../../assets/imgs/ui/header/page-link-hover.svg';

type Props = {

} & HeaderPageLinkType

export const Page: React.FC<Props> = ({ name, link }) => {
  return <div className="group relative">
    <NavLink className='w-max transition-colors group-hover:text-blue' to={link}>{name}</NavLink>
    <img className="absolute -bottom-3 w-[calc(100%_+_30px)] opacity-0 transition-opacity group-hover:opacity-100" src={hoverLineImg} alt='line' />
  </div>
};