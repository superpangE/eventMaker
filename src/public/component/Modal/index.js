import { getContainer, getInput, getBtn } from '../common.js';
import Column from '../Column/index.js';

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

const BtnOnClickEvent = (MainContainer, AccessBtn, InputBox) => {
  const BtnOnClick = async () => {
    const TextValue = InputBox.value;
    InputBox.value = '';
    if (TextValue !== '') {
      const NewColumn = Column(TextValue);
      MainContainer.insertAdjacentElement('beforeEnd', NewColumn);
      hidden();
      const response = await fetch('http://localhost:3000/column/counter', {
        method: 'get',
      });
      const columnNum = await response.json();
      await fetch('http://localhost:3000/column/add', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: TextValue,
          pos: columnNum + 1,
        }),
      });
    } else {
      alert('no');
    }
  };
  AccessBtn.addEventListener('click', BtnOnClick);
};

const Modal = (BodyContainer) => {
  const BigContainer = getContainer(null, 'big-container', null);
  const Container = getContainer('modal-content', null, null);
  const BackgroundColor = getContainer('background-color', null, null);
  const InputWrap = getContainer(null, 'modal-wrap', 'Input Title');
  const InputBox = getInput('modal-input', null, null, '', 'off');

  const BtnContainer = getContainer(null, 'btn-container', null);
  const MakeBtn = getBtn('make-btn', 'far fa-check-circle', null);

  BtnContainer.insertAdjacentElement('beforeend', MakeBtn);
  Container.insertAdjacentElement('beforeend', InputWrap);
  Container.insertAdjacentElement('beforeend', InputBox);
  Container.insertAdjacentElement('beforeend', BtnContainer);
  BigContainer.insertAdjacentElement('beforeend', BackgroundColor);
  BigContainer.insertAdjacentElement('beforeend', Container);

  BtnOnClickEvent(BodyContainer, BtnContainer, InputBox);

  return BigContainer;
};

export default Modal;
