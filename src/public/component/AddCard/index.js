import { getContainer, getBtn, getInput } from '../common.js';
const AddCard = () => {
  const Container = getContainer(null, 'addcard-container', null);
  const AddCardTitle = getContainer(null, 'addcard-title', 'title');
  const AddCardTitleArea = getInput(null, 'addcard-title-area', null, 'addtitle');
  const AddCardContent = getContainer(null, 'addcard-content', 'content');
  const AddCardContentArea = getInput(null, 'addcard-content-area', null, 'addcontent');
  const AddCardBtnWrap = getContainer(null, 'addcard-btn-wrap', null);
  const AcceptBtn = getBtn('accept-btn', 'far fa-check-circle', null);
  const CancelBtn = getBtn('cancel-btn', 'fas fa-ban', null);

  AddCardBtnWrap.insertAdjacentElement('beforeend', AcceptBtn);
  AddCardBtnWrap.insertAdjacentElement('beforeend', CancelBtn);

  Container.insertAdjacentElement('beforeend', AddCardTitle);
  Container.insertAdjacentElement('beforeend', AddCardTitleArea);
  Container.insertAdjacentElement('beforeend', AddCardContent);
  Container.insertAdjacentElement('beforeend', AddCardContentArea);
  Container.insertAdjacentElement('beforeend', AddCardBtnWrap);

  return Container;
};
export default AddCard;
