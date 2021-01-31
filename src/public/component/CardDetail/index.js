import { getContainer, getBtn } from '../common.js';

const CardDetail = () => {
  const MainContainer = getContainer(null, 'detail-container', null);
  const HeaderContainer = getContainer(null, 'detail-header', null);
  const BodyContainer = getContainer(null, 'detail-body', null);
  const FootContainer = getContainer(null, 'detail-foot', null);

  const HeaderIcon = getBtn('detail-icon', 'fas fa-exclamation-circle', null);
  const HeaderTitle = getContainer(null, 'detail-title', '이거슨');
  const HeaderLeft = getContainer(null, 'header-left', null);

  const HeaderClose = getBtn('detail-close', 'fas fa-sign-out-alt', null);

  const BodyContent = getContainer(null, 'detail-content', 'hello');

  const ToggleBtn = getContainer(null, 'detail-toggle', 'open/close');

  HeaderLeft.insertAdjacentElement('beforeend', HeaderIcon);
  HeaderLeft.insertAdjacentElement('beforeend', HeaderTitle);
  HeaderContainer.insertAdjacentElement('beforeend', HeaderLeft);
  HeaderContainer.insertAdjacentElement('beforeend', HeaderClose);
  BodyContainer.insertAdjacentElement('beforeend', BodyContent);
  FootContainer.insertAdjacentElement('beforeend', ToggleBtn);
  MainContainer.insertAdjacentElement('beforeend', HeaderContainer);
  MainContainer.insertAdjacentElement('beforeend', BodyContainer);
  MainContainer.insertAdjacentElement('beforeend', FootContainer);

  return MainContainer;
};
export default CardDetail;
