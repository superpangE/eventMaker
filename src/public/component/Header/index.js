import { getContainer, getBtn, getInput } from '../common.js';
const Header = () => {
  //   const MainContainer = getContainer(null, 'main-container', null);

  const HeaderWrap = getContainer(null, 'header-wrap', null);
  const LeftHeader = getContainer(null, 'left-header', null);
  const HeaderIcon = getBtn('header-icon', 'fab fa-github', null);
  const FindBox = getInput(null, 'find-box', null, 'Search or jump to...');
  const Menu1 = getContainer(null, 'menu-bar', 'Pull requests');
  const Menu2 = getContainer(null, 'menu-bar', 'Issues');
  const Menu3 = getContainer(null, 'menu-bar', 'Marketplace');
  const Menu4 = getContainer(null, 'menu-bar', 'Explore');
  const RightHeader = getContainer(null, 'right-header', null);
  const HeaderAlarm = getBtn('header-alarm', 'far fa-bell', null);
  const HeaderInfo = getBtn('header-info', 'fas fa-plus', null);
  const HeaderUser = getBtn('header-user', 'far fa-id-badge', null);

  LeftHeader.insertAdjacentElement('beforeend', HeaderIcon);
  LeftHeader.insertAdjacentElement('beforeend', FindBox);
  LeftHeader.insertAdjacentElement('beforeend', Menu1);
  LeftHeader.insertAdjacentElement('beforeend', Menu2);
  LeftHeader.insertAdjacentElement('beforeend', Menu3);
  LeftHeader.insertAdjacentElement('beforeend', Menu4);

  RightHeader.insertAdjacentElement('beforeend', HeaderAlarm);
  RightHeader.insertAdjacentElement('beforeend', HeaderInfo);
  RightHeader.insertAdjacentElement('beforeend', HeaderUser);

  HeaderWrap.insertAdjacentElement('beforeend', LeftHeader);
  HeaderWrap.insertAdjacentElement('beforeend', RightHeader);

  return HeaderWrap;
};
export default Header;
