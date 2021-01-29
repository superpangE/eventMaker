import { getContainer, getBtn } from '../common.js';

const DeleteCardClickEvent = (DeleteCardContainer, CardContainer, cardId) => {
  const DeleteCardClick = async () => {
    CardContainer.remove();
    // console.log(cardId);
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

const Card = (TitleValue, cardId) => {
  const CardContainer = getContainer(null, 'card-container', null);

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
  //   const CardTag = getBtn(null, 'card-tag', 'FE');

  CardTitleWrap.insertAdjacentElement('beforeend', CardIcon);
  CardTitleWrap.insertAdjacentElement('beforeend', CardTitle);

  CardHeader.insertAdjacentElement('beforeend', CardTitleWrap);
  DeleteCardContainer.insertAdjacentElement('beforeend', DeleteCard);
  CardHeader.insertAdjacentElement('beforeend', DeleteCardContainer);

  DeleteCardClickEvent(DeleteCardContainer, CardContainer, cardId);

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
