// pinta los elementos del modal
export function drawModal() {
  const containerModal = document.createElement('div');
  containerModal.classList.add('container-modal');

  const contentModal = document.createElement('div');
  contentModal.classList.add('content-modal');

  const messageDelete = document.createElement('p');
  messageDelete.classList.add('message-delete');
  messageDelete.textContent = 'Are you sure you want to delete this message?';

  const btnYes = document.createElement('button');
  btnYes.textContent = 'Yes';
  btnYes.classList.add('btn-Yes');

  const btnNo = document.createElement('button');
  btnNo.textContent = 'No';
  btnNo.classList.add('btn-No');

  const btns = document.createElement('div');
  btns.classList.add('btn-yes-no');
  btns.append(btnYes, btnNo);

  const btnX = document.createElement('button');
  btnX.classList.add('btn-x');
  btnX.textContent = 'X';

  containerModal.append(contentModal);
  contentModal.append(btnX, messageDelete, btns);
  return containerModal;
}
