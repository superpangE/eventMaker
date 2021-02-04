import { getBtn, getContainer } from '../common.js';

const MenuBar = () => {
  const MainContainer = getContainer(null, 'menubar-container', null);
  const MenuTitleWrap = getContainer(null, 'menu-title-wrap', null);
  const MenuLeft = getContainer(null, 'menu-left-wrap', null);
  const MenuIcon = getBtn('menu-icon', 'fas fa-book', null);
  const MenuTitle = getContainer(null, 'menu-title', 'superpangE');
  const MenuRight = getContainer(null, 'menu-right-wrap', null);

  const UnwatchWrap = getContainer(null, 'unwatch-wrap', null);
  const UnwatchIcon = getBtn(null, 'far fa-eye', null);
  const UnwatchTitle = getContainer(null, 'unwatch-title', 'Unwatch');

  const UnstarWrap = getContainer(null, 'unstar-wrap', null);
  const UnstarIcon = getBtn(null, 'far fa-star', null);
  const UnstarTitle = getContainer(null, 'unstar-title', 'Unstar');

  const ForkWrap = getContainer(null, 'fork-wrap', null);
  const ForkIcon = getBtn(null, 'fas fa-code-branch', null);
  const ForkTitle = getContainer(null, 'fork-title', 'Fork');

  const BottomMenu= getContainer(null,'bottom-menu',null);
  const MenuBarWrap = getContainer(null, 'menu-bar-wrap', null);
  const MoreMenu = getContainer(null,'more-menu','···')

  const CodeWrap = getContainer(null, 'code-wrap', null);
  const CodeIcon = getBtn('code-icon', 'fas fa-code', null);
  const CodeTitle = getContainer(null, 'code-title', 'Code');

  const IssueWrap = getContainer(null, 'issue-wrap', null);
  const IssueIcon = getBtn('issue-icon', 'fas fa-exclamation-circle', null);
  const IssueTitle = getContainer(null, 'issue-title', 'Issue');

  const PRWrap = getContainer(null, 'pr-wrap', null);
  const PRIcon = getBtn('pr-icon', 'fas fa-project-diagram', null);
  const PRTitle = getContainer(null, 'pr-title', 'Pull Request');

  const ActionWrap = getContainer(null, 'action-wrap', null);
  const ActionIcon = getBtn('action-icon', 'far fa-play-circle', null);
  const ActionTitle = getContainer(null, 'action-title', 'Action');

  const ProjectWrap = getContainer(null, 'project-wrap', null);
  const ProjectIcon = getBtn('project-icon', 'fas fa-paper-plane', null);
  const ProjectTitle = getContainer(null, 'project-title', 'Project');

  const WikiWrap = getContainer(null, 'wiki-wrap', null);
  const WikiIcon = getBtn('wiki-icon', 'fas fa-book-open', null);
  const WikiTitle = getContainer(null, 'wiki-title', 'Wiki');

  const SecurityWrap = getContainer(null, 'security-wrap', null);
  const SecurityIcon = getBtn('security-icon', 'fas fa-shield-alt', null);
  const SecurityTitle = getContainer(null, 'security-title', 'Security');

  const InsightsWrap = getContainer(null, 'insight-wrap', null);
  const InsightsIcon = getBtn('insight-icon', 'fas fa-chart-line', null);
  const InsightsTitle = getContainer(null, 'insight-title', 'Insights');

  const SettingsWrap = getContainer(null, 'setting-wrap', null);
  const SettingsIcon = getBtn('setting-icon', 'fas fa-cog', null);
  const SettingsTitle = getContainer(null, 'setting-title', 'Settings');

  UnwatchWrap.insertAdjacentElement('beforeend', UnwatchIcon);
  UnwatchWrap.insertAdjacentElement('beforeend', UnwatchTitle);
  UnstarWrap.insertAdjacentElement('beforeend', UnstarIcon);
  UnstarWrap.insertAdjacentElement('beforeend', UnstarTitle);
  ForkWrap.insertAdjacentElement('beforeend', ForkIcon);
  ForkWrap.insertAdjacentElement('beforeend', ForkTitle);

  MenuRight.insertAdjacentElement('beforeend', UnwatchWrap);
  MenuRight.insertAdjacentElement('beforeend', UnstarWrap);
  MenuRight.insertAdjacentElement('beforeend', ForkWrap);
  MenuLeft.insertAdjacentElement('beforeend', MenuIcon);
  MenuLeft.insertAdjacentElement('beforeend', MenuTitle);
  MenuTitleWrap.insertAdjacentElement('beforeend', MenuLeft);
  MenuTitleWrap.insertAdjacentElement('beforeend', MenuRight);

  MainContainer.insertAdjacentElement('beforeend', MenuTitleWrap);

  CodeWrap.insertAdjacentElement('beforeend', CodeIcon);
  CodeWrap.insertAdjacentElement('beforeend', CodeTitle);
  IssueWrap.insertAdjacentElement('beforeend', IssueIcon);
  IssueWrap.insertAdjacentElement('beforeend', IssueTitle);
  PRWrap.insertAdjacentElement('beforeend', PRIcon);
  PRWrap.insertAdjacentElement('beforeend', PRTitle);
  ActionWrap.insertAdjacentElement('beforeend', ActionIcon);
  ActionWrap.insertAdjacentElement('beforeend', ActionTitle);
  ProjectWrap.insertAdjacentElement('beforeend', ProjectIcon);
  ProjectWrap.insertAdjacentElement('beforeend', ProjectTitle);
  WikiWrap.insertAdjacentElement('beforeend', WikiIcon);
  WikiWrap.insertAdjacentElement('beforeend', WikiTitle);
  SecurityWrap.insertAdjacentElement('beforeend', SecurityIcon);
  SecurityWrap.insertAdjacentElement('beforeend', SecurityTitle);
  InsightsWrap.insertAdjacentElement('beforeend', InsightsIcon);
  InsightsWrap.insertAdjacentElement('beforeend', InsightsTitle);
  SettingsWrap.insertAdjacentElement('beforeend', SettingsIcon);
  SettingsWrap.insertAdjacentElement('beforeend', SettingsTitle);

  MenuBarWrap.insertAdjacentElement('beforeend', CodeWrap);
  MenuBarWrap.insertAdjacentElement('beforeend', IssueWrap);
  MenuBarWrap.insertAdjacentElement('beforeend', PRWrap);
  MenuBarWrap.insertAdjacentElement('beforeend', ActionWrap);
  MenuBarWrap.insertAdjacentElement('beforeend', ProjectWrap);
  MenuBarWrap.insertAdjacentElement('beforeend', WikiWrap);
  MenuBarWrap.insertAdjacentElement('beforeend', SecurityWrap);
  MenuBarWrap.insertAdjacentElement('beforeend', InsightsWrap);
  MenuBarWrap.insertAdjacentElement('beforeend', SettingsWrap);

  BottomMenu.insertAdjacentElement('beforeend', MenuBarWrap);
  BottomMenu.insertAdjacentElement('beforeend', MoreMenu);

  MainContainer.insertAdjacentElement('beforeend', BottomMenu);

  return MainContainer;
};
export default MenuBar;
