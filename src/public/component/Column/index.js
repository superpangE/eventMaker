const getContainer = (id, className, text) => {
  const container = document.createElement('div');
  if (className !== null) container.className = className;
  if (id !== null) container.id = id;
  if (text !== null) container.textContent = text;
  return container;
};

const getBtn = (id, className, text) => {
  const container = document.createElement('i');
  if (id !== null) container.id = id;
  if (className !== null) container.className = className;
  if (text !== null) container.textContent = text;
  return container;
};

const Column = () => {
  // const onClick = (e) => {
  //   const target = e.target.closest('.column-container');
  //   target.classList.add('column-container-selected');
  // };

  const ColumnContainer = getContainer(null, 'column-container', null);
  // ColumnContainer.addEventListener('click', onClick);
  const ColumnHeader = getContainer(null, 'column-header', null);

  const ColumnHeaderWrap = getContainer(null, 'column-header-wrap', null);
  const ColumnHeaderTitle = getContainer(null, 'column-header-title', 'To Do');
  const ColumnHeaderCounter = getContainer(null, 'column-header-counter', '0');

  const ColumnMaker = getContainer(null, 'column-maker', null);
  const ColumnBody = getContainer(null, 'column-body', null);

  const MakeColumn = getBtn('plus-btn', 'fas fa-plus', null);
  const DeleteColumn = getBtn('minus-btn', 'fas fa-minus', null);

  ColumnMaker.insertAdjacentElement('beforeend', MakeColumn);
  ColumnMaker.insertAdjacentElement('beforeend', DeleteColumn);

  ColumnHeaderWrap.insertAdjacentElement('beforeend', ColumnHeaderCounter);
  ColumnHeaderWrap.insertAdjacentElement('beforeend', ColumnHeaderTitle);

  ColumnHeader.insertAdjacentElement('beforeend', ColumnHeaderWrap);
  ColumnHeader.insertAdjacentElement('beforeend', ColumnMaker);

  ColumnContainer.insertAdjacentElement('beforeend', ColumnHeader);
  ColumnContainer.insertAdjacentElement('beforeend', ColumnBody);

  return ColumnContainer;
};

export default Column;
