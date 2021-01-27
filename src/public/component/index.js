import AddColumn from './AddColumn/index.js';
import Header from './Header/index.js';
import Modal from './Modal/index.js';
import Column from './Column/index.js';
import Card from './Card/index.js';
import { getContainer } from './common.js';
import { show, hidden } from '../lib/modalTrigger.js';
import { getCardDatas, getColumnDatas } from '../lib/getDatas.js';

const AddColumnOnClickEvent = (AddColumnEle) => {
  const AddColumnOnClick = () => {
    const BG = document.getElementById('background-color');
    BG.addEventListener('click', hidden);
    show();
  };
  AddColumnEle.addEventListener('click', AddColumnOnClick);
};

const initializeDatas = async (BodyWrap) => {
  const columnDatas = await getColumnDatas();
  columnDatas
    .sort((a, b) => {
      return a.pos < b.pos ? -1 : 0;
    })
    .forEach(async (element) => {
      const newColumn = Column(element.title, element.column_id);
      const columnBody = newColumn.lastChild;
      const cardDatas = await getCardDatas();
      cardDatas
        .filter((card) => element.column_id === card.column_id)
        .forEach((element2) => {
          const newCard = Card(element2.title, element2.card_id);
          columnBody.insertAdjacentElement('beforeend', newCard);
        });
      BodyWrap.insertAdjacentElement('beforeend', newColumn);
    });
};

const Main = () => {
  const MainContainer = getContainer(null, 'main-container', null);
  const BodyWrap = getContainer(null, 'body-wrap', null);
  const AddWrap = getContainer(null, 'add-wrap', null);
  const BodyContainer = getContainer(null, 'body-container', null);

  const AddColumnEle = AddColumn();

  AddColumnOnClickEvent(AddColumnEle);

  AddWrap.insertAdjacentElement('beforeend', AddColumnEle);
  initializeDatas(BodyWrap);
  // BodyWrap 컬럼을 넣는다.
  // 컬럼에 카드를 넣는다.

  BodyContainer.insertAdjacentElement('beforeend', BodyWrap);
  BodyContainer.insertAdjacentElement('beforeend', AddWrap);
  MainContainer.insertAdjacentElement('beforeend', Header());
  MainContainer.insertAdjacentElement('beforeend', BodyContainer);
  MainContainer.insertAdjacentElement('beforeend', Modal(BodyWrap));
  // MainContainer.insertAdjacentElement('beforeend', AddCard());

  return MainContainer;
};

export default Main;
