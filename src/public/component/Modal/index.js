import { getContainer, getInput, getBtn } from '../common.js';
import Column from '../Column/index.js';

const hidden = () => {
  document.getElementById('modal-content').style.display = 'none';
  document.getElementById('background-color').style.display = 'none';
};

const BtnOnClickEvent = (MainContainer, AccessBtn, InputBox) => {
  const BtnOnClick = async () => {
    const TextValue = InputBox.value;

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
      InputBox.value = '';
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
