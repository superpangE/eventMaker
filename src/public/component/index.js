import Column from './Column/index.js';
import AddColumn from './AddColumn/index.js';
import { getContainer } from './common.js';

const AddColumnOnClickEvent = (MainContainer, AddColumnEle) => {
  const AddColumnOnClick = async () => {
    const NewColumn = Column();
    MainContainer.insertAdjacentElement('afterbegin', NewColumn);

    const response = await fetch('http://localhost:3000/column/counter', {
      method: 'get',
    });
    const columnNum = await response.json();
    await fetch('http://localhost:3000/column/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'To Do',
        pos: columnNum + 1,
      }),
    });
  };
  AddColumnEle.addEventListener('click', AddColumnOnClick);
};

const Main = () => {
  const MainContainer = getContainer(null, 'main-container', null);
  const AddColumnEle = AddColumn();

  AddColumnOnClickEvent(MainContainer, AddColumnEle);
  MainContainer.insertAdjacentElement('beforeend', AddColumnEle);

  return MainContainer;
};
export default Main;
