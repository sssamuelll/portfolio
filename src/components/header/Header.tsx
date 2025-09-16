import React from 'react';
import SvgLinks from '../svg_links/SvgLinks';
import LanguageSwitcher from '../lang/LanguageSwitcher';

const Header: React.FC = () => {
  return (
    <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.5rem 1rem'}}>
      <SvgLinks />
      <LanguageSwitcher />
    </header>
  );
};
export default Header;
