type Props = {
  isOpen: boolean;
};

const MenuDrawer = (props: Props) => {
  const { isOpen } = props;
  if (isOpen) {
  }
  return (
    <>
      <nav className={isOpen ? 'c-drawer active' : 'c-drawer'}>
        <div className='c-drawer__list'>
          <ul>
            <li>
              <a href='#top'>Top</a>
            </li>
            <li>
              <a href='#bio'>Bio</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#works'>Works</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MenuDrawer;
