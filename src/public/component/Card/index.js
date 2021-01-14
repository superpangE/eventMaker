import { getContainer, getBtn } from '../common.js';

const Card = () => {
  const CardContainer = getContainer(null, 'card-container', null);

  const CardHeader = getContainer(null, 'card-header', null);
  const CardTitleWrap = getContainer(null, 'card-title-wrap', null);
  const CardIcon = getBtn('card-icon', 'fas fa-exclamation-circle', null);
  const CardTitle = getContainer(null, 'card-title', '[FE] 컴포넌트 작성[FE]');

  const DeleteCard = getBtn('delete-card', 'far fa-trash-alt', null);

  const ProgressWrap = getContainer(null, 'progress-wrap', null);
  const ProgressIcon = getBtn('progress-icon', 'far fa-calendar-check', null);
  const ProgressCnt = getContainer(null, 'progress-cnt', '2 lines');
  const ProgressBar = getContainer(null, 'progress-bar', null);

  const CardAuthor = getContainer(null, 'card-author', 'Created by pangE');
  //   const CardTag = getBtn(null, 'card-tag', 'FE');

  CardTitleWrap.insertAdjacentElement('beforeend', CardIcon);
  CardTitleWrap.insertAdjacentElement('beforeend', CardTitle);

  CardHeader.insertAdjacentElement('beforeend', CardTitleWrap);
  CardHeader.insertAdjacentElement('beforeend', DeleteCard);

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
