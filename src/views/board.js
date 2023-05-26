/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */

import { confirmDeleteModal, onDrawData, createPostModal } from './modal.js';
import {
  postBoard, onGetPost, deletePost, getPost, updatePost, logOut,
} from '../lib/index.js';
import { auth } from '../lib/firebase.js';

function board(navigateTo) {
  const buttonReturn = document.createElement('button');
  const buttonLogOut = document.createElement('button');
  const section = document.createElement('section');
  const menu = document.createElement('div');
  const boardMenu = document.createElement('a');
  const profileMenu = document.createElement('a');
  const imageProfile = document.createElement('img');
  const container = document.createElement('div');
  const post = document.createElement('textarea');
  const btnSavePost = document.createElement('button');
  const sort = document.createElement('select');
  const option1 = document.createElement('option');
  const sortLabel = document.createElement('label');
  const option2 = document.createElement('option');
  const containerImgPost = document.createElement('div');
  const boardPost = document.createElement('div');

  buttonReturn.textContent = 'Back';
  buttonLogOut.textContent = 'Log Out';
  boardMenu.textContent = 'Board';
  profileMenu.textContent = 'Profile';
  btnSavePost.textContent = 'Save';
  sortLabel.textContent = 'Sort by';

  buttonReturn.className = 'buttonReturn';
  buttonLogOut.className = 'btn-logout';
  imageProfile.className = 'imageProfile';
  section.className = 'section-board';
  container.className = 'container-app-board';
  menu.className = 'menu-class';
  boardMenu.className = 'menu-top-board';
  profileMenu.className = 'menu-top-profile';
  sortLabel.className = 'sortLabel-class';
  sort.className = 'sort-class';
  option1.className = 'options-class';
  option2.className = 'options-class';
  containerImgPost.className = 'container-img-post';
  btnSavePost.className = 'btn-save-post';
  post.className = 'post-class';

  boardPost.id = 'board-post';
  boardMenu.href = '/board';
  profileMenu.href = '/profile';

  imageProfile.src = ('./images/vector-profile-photo.svg');

  option1.value = 'recent';
  option2.value = 'oldest';

  option2.text = 'Oldest';
  option1.text = 'Most Recent';

  post.placeholder = 'What do you want to post?';

  sort.appendChild(sortLabel);
  sort.appendChild(option1);
  sort.appendChild(option2);
  container.appendChild(containerImgPost);
  containerImgPost.append(imageProfile, post);

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonLogOut.addEventListener('click', () => {
    const outBoardPromise = logOut(auth);
    outBoardPromise.then(() => {
      console.log(outBoardPromise);
      alert('Sign-out successful');
      navigateTo('/');
    }).catch((error) => {
      alert('An error happened');
    });
  });

  boardMenu.addEventListener('click', () => {
    navigateTo('/board');
  });

  profileMenu.addEventListener('click', () => {
    navigateTo('/profile');
  });

  btnSavePost.addEventListener('click', () => {
    if (post.value === '') {
      const valuePostPromise = postBoard();
      alert('Please enter a message');
    } else {
      const valuePostPromise = postBoard(post.value);
      valuePostPromise.then(() => {
        console.log(valuePostPromise);
        alert('Message successfully saved!');
        post.value = '';
      });
    }
  });

  onGetPost((snapshot) => {
    const getPostBoard = document.getElementById('board-post');
    getPostBoard.innerHTML = '';

    snapshot.forEach((doc) => {
      const data = doc.data();
      const drawingPost = onDrawData(data, doc);
      getPostBoard.append(drawingPost);
    });

    let data;
    let textAreaEdit;
    let userAreaEdit;

    const btnEditModalList = document.querySelectorAll('.btn-editBoard');
    const btnDeleteList = document.querySelectorAll('.btn-deletepost');

    // const user = auth.currentUser;
    // console.log(data.userUid, 'user de board.js');
    // if (user.uid === data.userUid) {
    //   console.log('uids son iguales');
    //   // btnDeleteList.style.display = 'block';
    //   // btnEditModalList.style.display = 'block';
    // } else {
    //   console.log('uids no son iguales');
    //   // btnDeleteList.style.display = 'none';
    //   // btnEditModalList.style.display = 'none';
    //   console.log('No tienes permiso para publicar este post');
    // }

    // opción editar
    btnEditModalList.forEach((btnEdit) => {
      btnEdit.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        const gettingPost = getPost(id);
        console.log(gettingPost, 'getting post');
        gettingPost.then((doc) => {
          data = doc.data();
          textAreaEdit = document.querySelector('.content-edit-modal');
          // userAreaEdit = document.querySelector('.name-user-edit');
          // userAreaEdit.value = data.email;
          textAreaEdit.value = data.description;
          console.log(textAreaEdit.value);
          // console.log(data);
        });

        // edit del modal
        const showingModalEdit = createPostModal(data);
        showingModalEdit.classList.add('show');
        container.appendChild(showingModalEdit);
        const postEdit = container.querySelector('.btn-editpost');
        postEdit.addEventListener('click', () => {
          const updatingPost = updatePost(id, { description: textAreaEdit.value });
          console.log(updatingPost);
          updatingPost.then(() => {
            alert('Message successfully updated!');
            container.removeChild(showingModalEdit);
          }).catch(() => {
            alert('Error updating message');
          });
        });
        const ignoreEdit = container.querySelector('.btn-x-edit');
        ignoreEdit.addEventListener('click', () => {
          // console.log(ignoreEdit);
          container.removeChild(showingModalEdit);
        });
      });
    });

    // eliminar post
    btnDeleteList.forEach((btnDelete) => {
      btnDelete.addEventListener('click', (event) => {
        console.log(btnDelete);
        const showingModal = confirmDeleteModal();
        showingModal.classList.add('show');
        container.appendChild(showingModal);

        const clickYes = container.querySelector('.btn-Yes');
        clickYes.addEventListener('click', () => {
          deletePost(event.target.dataset.id);
          container.removeChild(showingModal);
        });
        const clickNo = container.querySelectorAll('.btn-No, .btn-x');
        clickNo.forEach((elements) => {
          elements.addEventListener('click', () => {
            container.removeChild(showingModal);
          });
        });
      });
    });
  });

  menu.append(boardMenu, profileMenu);
  container.append(menu, containerImgPost, btnSavePost, sortLabel, sort, boardPost);
  section.append(buttonReturn, buttonLogOut, container);

  return section;
}

export default board;
