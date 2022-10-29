import MenuDesktop from "./isDesktop/MenuDesktop";
import MenuMobile from "./isMobile/MobileMenu";
import Container from '../Container'
import { useMedia } from 'use-media';

function menu() {
  const isMobile = useMedia({maxWidth: '1000px'});
  const isDesktop = useMedia({minWidth: '1024px'});
  return (
      <header>
        {isDesktop && <MenuDesktop />}
        {isMobile && <MenuMobile />}
      </header>
  );
}

export default menu;