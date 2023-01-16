import { useState } from "react";
import { Icon } from "../Icon";
import logo from './../../../assets/imgs/logo.svg';
import { Lngs } from "./lngs/Lngs";
import { Menu } from "./menu/Menu";
import { Pages } from "./pages/Pages";
import { SocialNetworks } from "./SocialNetworks";
import { SubmitApplication } from "./SubmitApplication";
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuStatus = () => setIsMenuOpen(prev => !prev);

  return <header className="absolute w-[calc(100%_-_20px)] top-0 grid grid-cols-[max-content_1fr_max-content] items-center py-2 lg:mx-auto lg:flex">
    <Link to='/'>
      <img className="max-lg:mx-auto" src={logo} alt='Logo' />
    </Link>
    <SocialNetworks />
    <Pages className="ml-8 max-lg:hidden" />
    <Lngs className="ml-7 max-lg:hidden" />
    <SubmitApplication className="ml-5 max-lg:hidden max-mw:[&>p]:hidden" />
    <Icon className="burger-icon cursor-pointer lg:hidden" onClick={handleMenuStatus} />
    <Menu isOpen={isMenuOpen} onClose={handleMenuStatus} />
  </header>
};