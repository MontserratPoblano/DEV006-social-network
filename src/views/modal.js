// modal de confirmación de eliminar mensaje
export function confirmDeleteModal() {
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

// dibuja la data en tiempo real
export function onDrawData(data, doc, userUid) {
  // todos los elementos que componen el post
  // console.log(data);
  const postDiv = document.createElement('div');
  postDiv.className = 'post-div';

  const nameUser = document.createElement('p');
  nameUser.textContent = data.email;
  nameUser.className = 'name-user';

  const paragraph = document.createElement('p');
  paragraph.textContent = data.description;

  if (data.userUid === userUid) {
    const btnEditBoard = document.createElement('button');
    btnEditBoard.textContent = '🖉';
    btnEditBoard.className = 'btn-editBoard';
    btnEditBoard.dataset.id = doc.id;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = '🗑';
    btnDelete.dataset.id = doc.id;
    btnDelete.classList.add('btn-deletepost');
    const divBtnEditDelete = document.createElement('div');
    divBtnEditDelete.classList.add('btn-editdelete');
    divBtnEditDelete.append(btnEditBoard, btnDelete);
    postDiv.append(divBtnEditDelete);
  }

  const containerStar = document.createElement('div');
  containerStar.className = 'container-star';
  const btnStar = document.createElement('i');
  btnStar.className = 'fa-solid fa-star';
  btnStar.id = doc.id;
  const counterStar = document.createElement('span');
  counterStar.className = 'counter-star';
  counterStar.textContent = data.likes.length;
  containerStar.append(btnStar, counterStar);

  postDiv.append(nameUser, paragraph, containerStar);

  return postDiv;
}

// MODAL DE EDITAR
export function createPostModal(data) {
  const dadContainerEditModal = document.createElement('div');
  dadContainerEditModal.className = 'dad-container';

  const containerEditModal = document.createElement('div');
  containerEditModal.className = 'container-edit-modal';

  const titleEditModal = document.createElement('h1');
  titleEditModal.textContent = 'Edit post';
  titleEditModal.className = 'title-edit-modal';

  const nameUser = document.createElement('p');
  nameUser.textContent = data.email;
  nameUser.className = 'name-user-edit';

  const contentEditModal = document.createElement('textarea');
  contentEditModal.className = 'content-edit-modal';

  const btnXEdit = document.createElement('button');
  btnXEdit.classList.add('btn-x-edit');
  btnXEdit.textContent = 'X';

  const btnEditPostModal = document.createElement('button');
  btnEditPostModal.textContent = 'Post';
  btnEditPostModal.className = 'btn-editpost';

  const imageProfile = document.createElement('img');
  imageProfile.src = ('./images/vector-profile-photo.svg');
  imageProfile.classList.add('imageProfile-edit');

  containerEditModal.append(
    btnXEdit,
    titleEditModal,
    imageProfile,
    nameUser,
    contentEditModal,
    btnEditPostModal,
  );
  dadContainerEditModal.appendChild(containerEditModal);

  return dadContainerEditModal;
}
