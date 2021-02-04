import AddColumn from './AddColumn/index.js';
import Header from './Header/index.js';
import Modal from './Modal/index.js';
import Column from './Column/index.js';
import Card from './Card/index.js';
import CardDetail from './CardDetail/index.js';
import MenuBar from './MenuBar/index.js';
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

const initializeDatas = async (BodyWrap, Detail) => {
  const columnDatas = await getColumnDatas();
  columnDatas
    .sort((a, b) => {
      return a.pos < b.pos ? -1 : 0;
    })
    .forEach(async (element) => {
      const cardDatas = await getCardDatas();
      const cardCnt = cardDatas.filter((card) => element.column_id === card.column_id).length;
      const newColumn = Column(element.title, element.column_id, cardCnt, Detail);
      const cnt = newColumn.childNodes[0].childNodes[0].childNodes[0];
      const columnBody = newColumn.lastChild;
      cardDatas
        .filter((card) => element.column_id === card.column_id)
        .forEach((element2) => {
          const newCard = Card(element2.title, element2.card_id, cnt, Detail);
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

  // const test = getContainer(null, 'test', null);

  const AddColumnEle = AddColumn();

  AddColumnOnClickEvent(AddColumnEle);
  const Detail = CardDetail();
  AddWrap.insertAdjacentElement('beforeend', AddColumnEle);
  initializeDatas(BodyWrap, Detail);
  // BodyWrap 컬럼을 넣는다.
  // 컬럼에 카드를 넣는다.
  BodyContainer.insertAdjacentElement('beforeend', BodyWrap);
  BodyContainer.insertAdjacentElement('beforeend', AddWrap);
  BodyContainer.insertAdjacentElement('beforeend', Detail);
  MainContainer.insertAdjacentElement('beforeend', Header());
  // 잠시
  MainContainer.insertAdjacentElement('beforeend', MenuBar());

  MainContainer.insertAdjacentElement('beforeend', BodyContainer);
  MainContainer.insertAdjacentElement('beforeend', Modal(BodyWrap));

  return MainContainer;
  // return test;
};

export default Main;
