/* eslint-disable no-console */
import { getPosts, postBoard, deletePost } from '../lib';
import { drawModal } from './modal.js';

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

  // escucha el envio de post nuevos para agregarlos a la coleccion firebase
  btnSavePost.addEventListener('click', () => {
    postBoard(post.value);
  });
  // cargando posts que estan hasta el momento

  const boardPost = document.createElement('div');
  boardPost.id = 'board-post';
  const getBoardPromise = getPosts();
  getBoardPromise.then((querySnapshot) => {
    const getPostBoard = document.getElementById('board-post');
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const postDiv = document.createElement('div');
      const paragraph = document.createElement('p');
      paragraph.textContent = data.description;
      const btnDelete = document.createElement('button');
      btnDelete.textContent = '🗑 Delete';
      btnDelete.dataset.id = doc.id;
      postDiv.append(paragraph, btnDelete);
      getPostBoard.append(postDiv);

      btnDelete.addEventListener('click', () => {
        const showingModal = drawModal();
        showingModal.classList.add('show');
        container.appendChild(showingModal);

        // const clickYes = document.querySelector('btn-Yes');
        // console.log(clickYes);
        // const containerDad = e.target.parentElement;
        // console.log(containerDad);
        const clickYes = container.querySelector('.btn-Yes');
        console.log(clickYes);  
        clickYes.addEventListener('click', (event) => {
       deletePost(event.target.dataset.id);
        });
      });
    });
  }).catch((error) => {
    console.log(error);
  });

  menu.append(boardMenu, profileMenu);
  container.append(menu, containerImgPost, btnSavePost, sortLabel, sort, boardPost);
  section.append(buttonReturn, container);

  return section;
}

export default board;
