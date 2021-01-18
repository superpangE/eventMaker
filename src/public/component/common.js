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

const getInput = (id, className, type, placeholder) => {
  const container = document.createElement('input');
  if (id != null) container.id = id;
  if (className != null) container.className = className;
  if (type != null) container.type = type;
  if (placeholder != null) container.placeholder = placeholder;

  return container;
};

export { getContainer, getBtn, getInput };
