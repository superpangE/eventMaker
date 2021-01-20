import AddColumn from './AddColumn/index.js';
import Header from './Header/index.js';
import Modal from './Modal/index.js';
import { getContainer } from './common.js';

const show = () => {
  const Modal = document.getElementById('modal-content');
  const Bg = document.getElementById('background-color');
  Modal.classList.add('modal-fade-in');
  Modal.classList.remove('fade');
  Modal.classList.remove('modal-fade-out');
  Bg.classList.add('fade-in');
  Bg.classList.remove('fade-out');
  Bg.classList.remove('fade');
  document.getElementById('modal-input').focus();
};

const hidden = () => {
  const Modal = document.getElementById('modal-content');
  const Bg = document.getElementById('background-color');
  Modal.classList.add('modal-fade-out');
  Modal.classList.remove('modal-fade-in');
  Bg.classList.add('fade-out');
  Bg.classList.remove('fade-in');

  setTimeout(function () {
    Modal.classList.remove('modal-fade-out');
    Modal.classList.add('fade');
    Bg.classList.add('fade');
    Bg.classList.remove('fade-out');
  }, 700);
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
  // MainContainer.insertAdjacentElement('beforeend', AddCard());

  return MainContainer;
};

export default Main;
