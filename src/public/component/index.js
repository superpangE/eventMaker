import AddColumn from './AddColumn/index.js';
import Header from './Header/index.js';
import Modal from './Modal/index.js';
import { getContainer } from './common.js';

const show = () => {
  document.getElementById('modal-content').style.display = 'block';
  document.getElementById('background-color').style.display = 'block';
  document.getElementById('modal-input').focus();
};

const hidden = () => {
  document.getElementById('modal-content').style.display = 'none';
  document.getElementById('background-color').style.display = 'none';
};

const AddColumnOnClickEvent = (AddColumnEle) => {
  const AddColumnOnClick = () => {
    const BG = document.getElementById('background-color');
    BG.addEventListener('click', hidden);
    show();
  };
  AddColumnEle.addEventListener('click', AddColumnOnClick);
};

const Main = () => {
  const MainContainer = getContainer(null, 'main-container', null);
  const BodyWrap = getContainer(null, 'body-wrap', null);
  const AddWrap = getContainer(null, 'add-wrap', null);
  const BodyContainer = getContainer(null, 'body-container', null);

  const AddColumnEle = AddColumn();

  AddColumnOnClickEvent(AddColumnEle);

  AddWrap.insertAdjacentElement('beforeend', AddColumnEle);

  BodyContainer.insertAdjacentElement('beforeend', BodyWrap);
  BodyContainer.insertAdjacentElement('beforeend', AddWrap);
  MainContainer.insertAdjacentElement('beforeend', Header());
  MainContainer.insertAdjacentElement('beforeend', BodyContainer);
  MainContainer.insertAdjacentElement('beforeend', Modal(BodyWrap));

  return MainContainer;
};

export default Main;
