import { useState } from 'react';

import MenuDrawer from '../molecules/MenuDrawer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='l-header c-humberger-wrapper' id='top'>
        <div
          className={isOpen ? 'c-humberger active' : 'c-humberger'}
          onClick={handleOnClick}
        >
          {/* span tags for humberger menu lines */}
          <span></span>
          <span></span>
        </div>
      </div>
      <MenuDrawer isOpen={isOpen}></MenuDrawer>
    </>
  );
};

export default Header;
