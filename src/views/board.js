/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */

import { confirmDeleteModal, onDrawData, createPostModal } from './modal.js';
import {
  postBoard, onGetPost, deletePost, getPost,logOut, updateAll
} from '../lib/index.js';
import { auth} from '../lib/firebase.js';
import { connectFirestoreEmulator, doc } from '@firebase/firestore';


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
  const notification = document.createElement('div');

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
  notification.classList.add('notification');

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
      const user = auth.currentUser;
      const data = doc.data();
      const drawingPost = onDrawData(data, doc,user.uid);
      getPostBoard.append(drawingPost);
    });

    let data;
    let textAreaEdit;
   
    
    
    const btnEditModalList = document.querySelectorAll('.btn-editBoard');
    const btnDeleteList = document.querySelectorAll('.btn-deletepost');
    const btnStarBoard=document.querySelectorAll('.fa-solid,fa-star');
    console.log(btnStarBoard)


     btnStarBoard.forEach((btn)=>{
      btn.addEventListener("click",(e)=>{
        const id=e.target.id
        const gettingDoc= getPost(id)

        gettingDoc.then((doc)=>{
          console.log(gettingDoc)
          if(doc){
            console.log(doc, "doc exists ")

              const currentLikes = doc.data().likes;
              console.log(currentLikes, 'current likes probando');
              const newLikes = currentLikes + 1;
              return updateAll(id,{ likes: newLikes })
              console.log("hola haciedo pruebas sin saber porque")
          
        }

        })
      })
    })
     

        
    
    
      
    

    // opción editar
    btnEditModalList.forEach((btnEdit) => {

      btnEdit.addEventListener('click', (event) => {
       
        const id = event.target.dataset.id;
        const gettingPost = getPost(id);
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
          const updatingPost = updateAll(id, { description: textAreaEdit.value });
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
          notification.textContent = 'Message successfully deleted';
          notification.style.display = 'block';
          setTimeout(() => {
            notification.style.display = 'none';
          }, 2000);

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
  section.append(buttonReturn, buttonLogOut, container, notification);

  return section;
}

export default board;
