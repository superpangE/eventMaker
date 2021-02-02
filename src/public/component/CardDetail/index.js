import { getContainer, getBtn } from '../common.js';

const CardDetail = () => {
  const MainContainer = getContainer(null, 'detail-container', null);
  const HeaderContainer = getContainer(null, 'detail-header', null);
  const BodyContainer = getContainer(null, 'detail-body', null);
  const FootContainer = getContainer(null, 'detail-foot', null);

  const HeaderIcon = getBtn('detail-icon', 'fas fa-exclamation-circle', null);
  const HeaderTitle = getContainer(null, 'detail-title', '이거슨');
  const HeaderLeft = getContainer(null, 'header-left', null);
  const HeaderClose = getBtn('detail-close', 'fas fa-sign-out-alt', null);

  const AuthorWrap = getContainer(null, 'detail-author', null);
  const AuthorIcon = getBtn('author-icon', 'far fa-address-card', null);
  const AuthorInfo = getContainer(null, 'author-info', null);
  const AuthorTopWrap = getContainer(null,'author-top', null);
  const AuthorSetWrap = getContainer(null,'author-set-wrap', null);
  const AuthorEmo = getBtn('author-emo','far fa-smile', null);
  const AuthorEdit = getBtn('author-edit', 'fas fa-pencil-alt', null);
  const AuthorName = getContainer(null, 'author-name', 'hypering');
  const AuthorDate = getContainer(null, 'author-date', '2021/02/02');

  const AssigneesWrap = getContainer(null, 'assignees-wrap', null);
  const AssigneesHeader = getContainer(null, 'assignees-header', null);
  const AssigneesTitle = getContainer(null, 'assignees-title', 'Assignees');
  const AssigneesSet = getBtn('assignees-set', 'fas fa-cog', null);
  const AssigneesContent = getContainer(null, 'assignees-content', 'No Assignees');
  const LabelsWrap = getContainer(null, 'labels-wrap', null);
  const LabelsHeader = getContainer(null, 'labels-header', null);
  const LabelsTitle = getContainer(null, 'labels-title', 'Labels');
  const LabelsSet = getBtn('labels-set', 'fas fa-cog', null);
  const LabelsContent = getContainer(null, 'labels-content', 'No Labels');
  const ProjectsWrap = getContainer(null, 'projects-wrap', null);
  const ProjectsHeader = getContainer(null, 'projects-header', null);
  const ProjectsTitle = getContainer(null, 'projects-title', 'Projects');
  const ProjectsSet = getBtn('projects-set', 'fas fa-cog', null);
  const ProjectsContent = getContainer(null, 'projects-content', 'No Projects');
  const MilestoneWrap = getContainer(null, 'milestone-wrap', null);
  const MilestoneHeader = getContainer(null, 'milestone-header', null);
  const MilestoneTitle = getContainer(null, 'milestone-title', 'Milestone');
  const MilestoneSet = getBtn('milestone-set', 'fas fa-cog', null);
  const MilestoneContent = getContainer(null, 'milestone-content', 'No Milestone');

  const BodyContent = getContainer(null, 'detail-content', 'hello');

  const ToggleBtn = getContainer(null, 'detail-toggle', 'open/close');

  HeaderLeft.insertAdjacentElement('beforeend', HeaderIcon);
  HeaderLeft.insertAdjacentElement('beforeend', HeaderTitle);
  HeaderContainer.insertAdjacentElement('beforeend', HeaderLeft);
  HeaderContainer.insertAdjacentElement('beforeend', HeaderClose);
  AuthorSetWrap.insertAdjacentElement('beforeend', AuthorEmo);
  AuthorSetWrap.insertAdjacentElement('beforeend', AuthorEdit);
  AuthorTopWrap.insertAdjacentElement('beforeend', AuthorName);
  AuthorTopWrap.insertAdjacentElement('beforeend', AuthorSetWrap); 
  AuthorInfo.insertAdjacentElement('beforeend', AuthorTopWrap);
  AuthorInfo.insertAdjacentElement('beforeend', AuthorDate);
  AuthorWrap.insertAdjacentElement('beforeend', AuthorIcon);
  AuthorWrap.insertAdjacentElement('beforeend', AuthorInfo);

  AssigneesHeader.insertAdjacentElement('beforeend', AssigneesTitle);
  AssigneesHeader.insertAdjacentElement('beforeend', AssigneesSet);
  LabelsHeader.insertAdjacentElement('beforeend', LabelsTitle);
  LabelsHeader.insertAdjacentElement('beforeend', LabelsSet);
  ProjectsHeader.insertAdjacentElement('beforeend', ProjectsTitle);
  ProjectsHeader.insertAdjacentElement('beforeend', ProjectsSet);
  MilestoneHeader.insertAdjacentElement('beforeend', MilestoneTitle);
  MilestoneHeader.insertAdjacentElement('beforeend', MilestoneSet);

  AssigneesWrap.insertAdjacentElement('beforeend', AssigneesHeader);
  AssigneesWrap.insertAdjacentElement('beforeend', AssigneesContent);
  LabelsWrap.insertAdjacentElement('beforeend', LabelsHeader);
  LabelsWrap.insertAdjacentElement('beforeend', LabelsContent);
  ProjectsWrap.insertAdjacentElement('beforeend', ProjectsHeader);
  ProjectsWrap.insertAdjacentElement('beforeend', ProjectsContent);
  MilestoneWrap.insertAdjacentElement('beforeend', MilestoneHeader);
  MilestoneWrap.insertAdjacentElement('beforeend', MilestoneContent);

  BodyContainer.insertAdjacentElement('beforeend', AuthorWrap);
  BodyContainer.insertAdjacentElement('beforeend', BodyContent);

  BodyContainer.insertAdjacentElement('beforeend', AssigneesWrap);
  BodyContainer.insertAdjacentElement('beforeend', LabelsWrap);
  BodyContainer.insertAdjacentElement('beforeend', ProjectsWrap);
  BodyContainer.insertAdjacentElement('beforeend', MilestoneWrap);

  FootContainer.insertAdjacentElement('beforeend', ToggleBtn);
  MainContainer.insertAdjacentElement('beforeend', HeaderContainer);
  MainContainer.insertAdjacentElement('beforeend', BodyContainer);
  MainContainer.insertAdjacentElement('beforeend', FootContainer);

  return MainContainer;
};
export default CardDetail;
