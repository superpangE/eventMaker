import { getContainer, getBtn } from '../common.js';
// import Card from '../Card/index.js';
import AddCard from '../AddCard/index.js';

const AddCardOnClickEvent = (MakeCardWrap, ColumnBody) => {
  const AddCardOnClick = () => {
    ColumnBody.insertAdjacentElement('afterbegin', AddCard());
  };
  MakeCardWrap.addEventListener('click', AddCardOnClick);
};

const Column = (title) => {
  // const onClick = (e) => {
  //   const target = e.target.closest('.column-container');
  //   target.classList.add('column-container-selected');
  // };

  const ColumnContainer = getContainer(null, 'column-container', null);
  // ColumnContainer.addEventListener('click', onClick);
  const ColumnHeader = getContainer(null, 'column-header', null);

  const ColumnHeaderWrap = getContainer(null, 'column-header-wrap', null);
  const ColumnHeaderTitle = getContainer(null, 'column-header-title', title);
  const ColumnHeaderCounter = getContainer(null, 'column-header-counter', '0');

  const ColumnMaker = getContainer(null, 'column-maker', null);
  const ColumnBody = getContainer(null, 'column-body', null);

  const MakeColumn = getBtn('plus-btn', 'fas fa-plus', null);
  const DeleteColumn = getBtn('minus-btn', 'fas fa-minus', null);
  const MakeCardWrap = getContainer(null, 'makecard-wrap', null);
  const DeleteCardWrap = getContainer(null, 'deletecard-wrap', null);

  MakeCardWrap.insertAdjacentElement('beforeend', MakeColumn);
  DeleteCardWrap.insertAdjacentElement('beforeend', DeleteColumn);

  ColumnMaker.insertAdjacentElement('beforeend', MakeCardWrap);
  ColumnMaker.insertAdjacentElement('beforeend', DeleteCardWrap);

  // MakeColumn.addEventListener('click', AddCardOnClickEvent(ColumnBody));

  ColumnHeaderWrap.insertAdjacentElement('beforeend', ColumnHeaderCounter);
  ColumnHeaderWrap.insertAdjacentElement('beforeend', ColumnHeaderTitle);

  ColumnHeader.insertAdjacentElement('beforeend', ColumnHeaderWrap);
  ColumnHeader.insertAdjacentElement('beforeend', ColumnMaker);

  AddCardOnClickEvent(MakeCardWrap, ColumnBody);

  // ColumnBody.insertAdjacentElement('beforeend', AddCard());
  // ColumnBody.insertAdjacentElement('beforeend', Card());

  ColumnContainer.insertAdjacentElement('beforeend', ColumnHeader);
  ColumnContainer.insertAdjacentElement('beforeend', ColumnBody);

  return ColumnContainer;
};

export default Column;
