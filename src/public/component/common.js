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

export { getContainer, getBtn };
