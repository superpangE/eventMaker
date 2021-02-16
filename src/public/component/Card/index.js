import { getContainer, getBtn } from '../common.js';

const CardDragEvent = (Card) => {
  const CardDrag = (e) => {
    Card.classList.add('drag-on');
    e.stopPropagation();
  };
  Card.addEventListener('drag', CardDrag);
};
const DragEndEvent = (Card) => {
  const DragEnd = (e) => {
    Card.classList.remove('drag-on');
    const { clientX, clientY } = e;
    const elem = document.elementFromPoint(clientX, clientY);
    const origin = elem.closest('.column-container');

    // console.log(origin);
    if (!origin) return;
    else {
      const push = origin.children[1];
      push.insertAdjacentElement('beforeend', Card);
    }

    e.stopPropagation();
  };
  Card.addEventListener('dragend', DragEnd);
};

const DeleteCardClickEvent = (DeleteCardContainer, CardContainer, cardId, cardCnt) => {
  const DeleteCardClick = async () => {
    CardContainer.remove();
    const cntNum = Number(cardCnt.textContent);
    cardCnt.textContent = cntNum - 1;
    await fetch('http://localhost:3000/card/delete', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardId: cardId,
      }),
    });
  };
  DeleteCardContainer.addEventListener('click', DeleteCardClick);
};
const TitleOnclickEvent = (CardTitle, Detail, Content, Author) => {
  const TitleOnclick = () => {
    Detail.classList.add('detail-container-block');
    document.querySelector('.detail-title').innerHTML = CardTitle.innerHTML;
    document.querySelector('.author-name').innerHTML = Author;
    document.querySelector('.detail-content').innerHTML = Content;
  };
  CardTitle.addEventListener('click', TitleOnclick);
};

const Card = (TitleValue, cardId, cardCnt, Detail, Content, Author) => {
  const CardContainer = getContainer(null, 'card-container', null, true);
  CardDragEvent(CardContainer);
  DragEndEvent(CardContainer);
  const CardHeader = getContainer(null, 'card-header', null);
  const CardTitleWrap = getContainer(null, 'card-title-wrap', null);
  const CardIcon = getBtn('card-icon', 'fas fa-exclamation-circle', null);
  const CardTitle = getContainer(null, 'card-title', TitleValue);

  const DeleteCard = getBtn('delete-card', 'far fa-trash-alt', null);
  const DeleteCardContainer = getContainer(null, 'delete-card-component', null);
  const ProgressWrap = getContainer(null, 'progress-wrap', null);
  const ProgressIcon = getBtn('progress-icon', 'far fa-calendar-check', null);
  const ProgressCnt = getContainer(null, 'progress-cnt', '2 lines');
  const ProgressBar = getContainer(null, 'progress-bar', null);

  const CardAuthor = getContainer(null, 'card-author', 'Created by pangE');

  CardTitleWrap.insertAdjacentElement('beforeend', CardIcon);
  CardTitleWrap.insertAdjacentElement('beforeend', CardTitle);

  CardHeader.insertAdjacentElement('beforeend', CardTitleWrap);
  DeleteCardContainer.insertAdjacentElement('beforeend', DeleteCard);
  CardHeader.insertAdjacentElement('beforeend', DeleteCardContainer);

  TitleOnclickEvent(CardTitle, Detail, Content, Author);
  DeleteCardClickEvent(DeleteCardContainer, CardContainer, cardId, cardCnt);

  ProgressWrap.insertAdjacentElement('beforeend', ProgressIcon);
  ProgressWrap.insertAdjacentElement('beforeend', ProgressCnt);
  ProgressWrap.insertAdjacentElement('beforeend', ProgressBar);

  CardContainer.insertAdjacentElement('beforeend', CardHeader);
  CardContainer.insertAdjacentElement('beforeend', ProgressWrap);
  CardContainer.insertAdjacentElement('beforeend', CardAuthor);
  //   CardContainer.insertAdjacentElement('beforeend', CardTag);

  return CardContainer;
};
export default Card;
