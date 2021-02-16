const getContainer = (id, className, text, drag) => {
  const container = document.createElement('div');
  if (className !== null) container.className = className;
  if (id !== null) container.id = id;
  if (text !== null) container.textContent = text;
  if (drag !== null) container.draggable = drag;
  return container;
};

const getBtn = (id, className, text) => {
  const container = document.createElement('i');
  if (id !== null) container.id = id;
  if (className !== null) container.className = className;
  if (text !== null) container.textContent = text;
  return container;
};

const getInput = (id, className, type, placeholder, auto) => {
  const container = document.createElement('input');
  if (id != null) container.id = id;
  if (className != null) container.className = className;
  if (type != null) container.type = type;
  if (placeholder != null) container.placeholder = placeholder;
  if (auto != null) container.autocomplete = auto;

  return container;
};

export { getContainer, getBtn, getInput };
