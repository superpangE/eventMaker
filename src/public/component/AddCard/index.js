import { getContainer, getBtn, getInput } from '../common.js';
import Card from '../Card/index.js';
import API from '../../lib/api.js';

const AcceptBtnOnClickEvent = (
  ColumnBody,
  AcceptWrap,
  AddCardTitleArea,
  AddCardContentArea,
  columnId,
  cardCnt,
  Detail
) => {
  const AcceptBtnonClick = async () => {
    const TitleValue = AddCardTitleArea.value;
    const ContentValue = AddCardContentArea.value;
    AddCardTitleArea.value = '';
    AddCardContentArea.value = '';
    if (TitleValue !== '' && ContentValue !== '') {
      const posNum = await API.post('/card/getlast', {
        columnId,
      });
      const Result = await API.post('/card/add', {
        columnId,
        title: TitleValue,
        author: 'anonymous',
        pos: posNum.result[0].num + 1,
        content: ContentValue,
      });
      const cardId = Result.cardId;
      const NewCard = Card(
        TitleValue,
        cardId,
        cardCnt,
        Detail,
        ContentValue,
        'anonymous',
        posNum.result[0].num + 1
      );
      ColumnBody.insertAdjacentElement('beforeend', NewCard);
      ColumnBody.removeChild(ColumnBody.firstChild);
      const abc = Number(cardCnt.textContent);
      cardCnt.textContent = abc + 1;
    } else {
      alert('no');
    }
  };
  AcceptWrap.addEventListener('click', AcceptBtnonClick);
};

const DeleteBtnOnClickEvent = (CancelWrap, ColumnBody) => {
  const DeleteBtnOnClick = () => {
    ColumnBody.removeChild(ColumnBody.firstChild);
  };
  CancelWrap.addEventListener('click', DeleteBtnOnClick);
};

const AddCard = (ColumnBody, columnId, cardCnt, Detail) => {
  const Container = getContainer(null, 'addcard-container', null);
  const AddCardTitle = getContainer(null, 'addcard-title', 'title');
  const AddCardTitleArea = getInput(null, 'addcard-title-area', null, 'addtitle');
  const AddCardContent = getContainer(null, 'addcard-content', 'content');
  const AddCardContentArea = getInput(null, 'addcard-content-area', null, 'addcontent');
  const AddCardBtnWrap = getContainer(null, 'addcard-btn-wrap', null);
  const AcceptWrap = getContainer(null, 'accept-wrap', null);
  const CancelWrap = getContainer(null, 'accept-wrap', null);

  const AcceptBtn = getBtn('accept-btn', 'far fa-check-circle', null);
  const CancelBtn = getBtn('cancel-btn', 'fas fa-ban', null);

  AcceptWrap.insertAdjacentElement('beforeend', AcceptBtn);
  CancelWrap.insertAdjacentElement('beforeend', CancelBtn);

  AcceptBtnOnClickEvent(
    ColumnBody,
    AcceptWrap,
    AddCardTitleArea,
    AddCardContentArea,
    columnId,
    cardCnt,
    Detail
  );
  DeleteBtnOnClickEvent(CancelWrap, ColumnBody);

  AddCardBtnWrap.insertAdjacentElement('beforeend', AcceptWrap);
  AddCardBtnWrap.insertAdjacentElement('beforeend', CancelWrap);

  Container.insertAdjacentElement('beforeend', AddCardTitle);
  Container.insertAdjacentElement('beforeend', AddCardTitleArea);
  Container.insertAdjacentElement('beforeend', AddCardContent);
  Container.insertAdjacentElement('beforeend', AddCardContentArea);
  Container.insertAdjacentElement('beforeend', AddCardBtnWrap);

  return Container;
};
export default AddCard;
