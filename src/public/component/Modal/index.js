import { getContainer, getInput, getBtn } from '../common.js';
import Column from '../Column/index.js';
import API from '../../lib/api.js';
import { hidden } from '../../lib/modalTrigger.js';

const BtnOnClickEvent = (MainContainer, AccessBtn, InputBox) => {
  const BtnOnClick = async () => {
    const TextValue = InputBox.value;
    InputBox.value = '';
    if (TextValue !== '') {
      hidden();
      const columnNum = await API.get('/column/counter');
      const Result = await API.post('/column/add', {
        title: TextValue,
        pos: columnNum + 1,
      });
      const NewColumn = Column(TextValue, Result.columnId);
      MainContainer.insertAdjacentElement('beforeend', NewColumn);
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
