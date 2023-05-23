/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */

import { drawModal, onDrawData, createPostModal } from './modal.js';
import {
  postBoard, onGetPost, deletePost, editPost, getPost, updatePost,
} from '../lib/index.js';

function board(navigateTo) {
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Back';
  buttonReturn.classList.add('buttonReturn');

  const section = document.createElement('section');
  section.className = 'section-board';

  const container = document.createElement('div');
  container.className = 'container-app-board';

  const menu = document.createElement('div');
  menu.className = 'menu-class';

  const boardMenu = document.createElement('a');
  boardMenu.href = '/board';
  boardMenu.textContent = 'Board';
  boardMenu.className = 'menu-top-board';

  const profileMenu = document.createElement('a');
  profileMenu.href = '/profile';
  profileMenu.textContent = 'Profile';
  profileMenu.className = 'menu-top-profile';

  const imageProfile = document.createElement('img');
  imageProfile.src = ('./images/vector-profile-photo.svg');
  imageProfile.classList.add('imageProfile');

  const post = document.createElement('textarea');
  post.placeholder = 'What do you want to post?';
  post.className = 'post-class';

  const btnSavePost = document.createElement('button');
  btnSavePost.textContent = 'Save';
  btnSavePost.className = 'btn-save-post';

  const sort = document.createElement('select');
  sort.className = 'sort-class';

  const sortLabel = document.createElement('label');
  sortLabel.textContent = 'Sort by';
  sortLabel.className = 'sortLabel-class';
  sort.appendChild(sortLabel);

  const option1 = document.createElement('option');
  option1.value = 'recent';
  option1.text = 'Most Recent';
  option1.className = 'options-class';
  sort.appendChild(option1);

  const option2 = document.createElement('option');
  option2.value = 'oldest';
  option2.text = 'Oldest';
  option2.className = 'options-class';
  sort.appendChild(option2);

  const containerImgPost = document.createElement('div');
  container.appendChild(containerImgPost);
  containerImgPost.append(imageProfile, post);
  containerImgPost.className = 'container-img-post';

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  boardMenu.addEventListener('click', () => {
    navigateTo('/board');
  });

  profileMenu.addEventListener('click', () => {
    navigateTo('/profile');
  });

  // contenedor (espacio) donde se pintarán nuestros post
  const boardPost = document.createElement('div');
  boardPost.id = 'board-post';

  btnSavePost.addEventListener('click', () => {
    if (post.value === '') {
      const valuePostPromise = postBoard();
      alert('Please enter a message');
    } else {
      const valuePostPromise = postBoard(post.value);
      valuePostPromise.then(() => {
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

    const btnEditModalList = document.querySelectorAll('.btn-editBoard');
    // const textAreaEdit = document.querySelector('.content-edit-modal');

    let data;
    let textAreaEdit;

    btnEditModalList.forEach((btnEdit) => {
      btnEdit.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        const gettingPost = getPost(id);
        // console.log(gettingPost);
        gettingPost.then((doc) => {
          data = doc.data();
          textAreaEdit = document.querySelector('.content-edit-modal');
          textAreaEdit.value = data.description;
          // console.log(textAreaEdit.value);
        });

        const showingModalEdit = createPostModal();
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
    const btnDeleteList = document.querySelectorAll('.btn-deletepost');
    btnDeleteList.forEach((btnDelete) => {
      btnDelete.addEventListener('click', (event) => {
        console.log(btnDelete);
        const showingModal = drawModal();
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

  // const count = 0;
  // btnHeart.addEventListener('click', () => {
  //   if (btnHeart.classList.contains('active')) {
  //     count--;
  //     btnHeart.classList.remove('active');
  //   } else {
  //     count++;
  //     btnHeart.classList.add('active');
  //   }
  //   counterHearts.textContent = count;
  // });
  // //

  menu.append(boardMenu, profileMenu);
  container.append(menu, containerImgPost, btnSavePost, sortLabel, sort, boardPost);
  section.append(buttonReturn, container);

  return section;
}

export default board;
