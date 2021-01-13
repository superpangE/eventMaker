import Column from '../component/Column/index.js';

const Root = () => {
  const root = document.querySelector('#root');
  const Column1 = Column();

  root.insertAdjacentElement('beforeend', Column1);
};

Root();
