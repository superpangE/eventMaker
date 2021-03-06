const show = () => {
  const Modal = document.getElementById('modal-content');
  const Bg = document.getElementById('background-color');
  Modal.classList.add('modal-fade-in');
  Modal.classList.remove('fade');
  Modal.classList.remove('modal-fade-out');
  Bg.classList.add('fade-in');
  Bg.classList.remove('fade-out');
  Bg.classList.remove('fade');
  document.getElementById('modal-input').focus();
};

const hidden = () => {
  const Modal = document.getElementById('modal-content');
  const Bg = document.getElementById('background-color');
  Modal.classList.add('modal-fade-out');
  Modal.classList.remove('modal-fade-in');
  Bg.classList.add('fade-out');
  Bg.classList.remove('fade-in');

  setTimeout(function () {
    Modal.classList.remove('modal-fade-out');
    Modal.classList.add('fade');
    Bg.classList.add('fade');
    Bg.classList.remove('fade-out');
  }, 700);
};

export { show, hidden };
