// import Column from './component/Column/index.js';
// import Card from './component/Card/index.js';
import Main from './component/index.js';

const Root = () => {
  const root = document.querySelector('#root');
  // const Column1 = Column();
  // const Card1 = Card();
  const Main1 = Main();
  root.insertAdjacentElement('beforeend', Main1);
};

Root();
