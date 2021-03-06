import { getContainer, getBtn } from '../common.js';
import AddCard from '../AddCard/index.js';

const DragColumnEvent = (Column) => {
  const DragColumn = () => {
    Column.classList.add('drag-on');
  };
  Column.addEventListener('drag', DragColumn);
};
const DragEndEvent = (Column) => {
  const DragEnd = () => {
    Column.classList.remove('drag-on');
  };
  Column.addEventListener('dragend', DragEnd);
};

const AddCardOnClickEvent = (MakeCardWrap, ColumnBody, columnId, cardCnt, Detail) => {
  const AddCardOnClick = () => {
    if (!ColumnBody.firstChild || !ColumnBody.firstChild.classList.contains('addcard-container')) {
      ColumnBody.insertAdjacentElement(
        'afterbegin',
        AddCard(ColumnBody, columnId, cardCnt, Detail)
      );
    }
  };
  MakeCardWrap.addEventListener('click', AddCardOnClick);
};

const DeleteColumnClickEvent = (DeleteCardWrap, ColumnContainer, columnId) => {
  const DeleteColumnClick = async () => {
    ColumnContainer.remove();
    await fetch('http://localhost:3000/column/delete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        columnId: columnId,
      }),
    });
  };
  DeleteCardWrap.addEventListener('click', DeleteColumnClick);
};

const Column = (title, columnId, cardCnt, Detail) => {
  const ColumnContainer = getContainer(null, 'column-container', null, true);
  ColumnContainer.dataset.value = columnId;
  DragColumnEvent(ColumnContainer);
  DragEndEvent(ColumnContainer);
  const ColumnHeader = getContainer(null, 'column-header', null);

  const ColumnHeaderWrap = getContainer(null, 'column-header-wrap', null);
  const ColumnHeaderTitle = getContainer(null, 'column-header-title', title);
  const ColumnHeaderCounter = getContainer(null, 'column-header-counter', cardCnt);

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

  ColumnHeaderWrap.insertAdjacentElement('beforeend', ColumnHeaderCounter);
  ColumnHeaderWrap.insertAdjacentElement('beforeend', ColumnHeaderTitle);

  ColumnHeader.insertAdjacentElement('beforeend', ColumnHeaderWrap);
  ColumnHeader.insertAdjacentElement('beforeend', ColumnMaker);

  AddCardOnClickEvent(MakeCardWrap, ColumnBody, columnId, ColumnHeaderCounter, Detail);
  DeleteColumnClickEvent(DeleteCardWrap, ColumnContainer, columnId);
  ColumnContainer.insertAdjacentElement('beforeend', ColumnHeader);
  ColumnContainer.insertAdjacentElement('beforeend', ColumnBody);

  return ColumnContainer;
};

export default Column;
