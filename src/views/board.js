/* eslint-disable no-console */
import { confirmDeleteModal, onDrawData, createPostModal } from './modal.js';
import {
  postBoard,
  onGetPost,
  deletePost,
  getPost,
  logOut,
  updateAll,
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
  const notification = document.createElement('div');

  buttonReturn.textContent = 'Back';
  buttonLogOut.textContent = 'Log Out';
  boardMenu.textContent = 'Board';
  profileMenu.textContent = 'Profile';
  btnSavePost.textContent = 'Save';
  sortLabel.textContent = 'Sort by';

  buttonReturn.id = 'buttonReturn';
  buttonLogOut.id = 'btn-logout';
  imageProfile.id = 'imageProfile';
  container.id = 'container-app-board';
  menu.id = 'menu-id';
  boardMenu.id = 'menu-top-board';
  profileMenu.id = 'menu-top-profile';
  sortLabel.id = 'sortLabel-class';
  sort.id = 'sort-class';
  option1.className = 'options-class';
  option2.className = 'options-class';
  containerImgPost.id = 'container-img-post';
  btnSavePost.id = 'btn-save-post';
  post.id = 'post-id';
  notification.id = 'notification';
  boardPost.id = 'board-post';

  boardMenu.href = '/board';
  profileMenu.href = '/profile';
  imageProfile.src = './images/vector-profile-photo.svg';
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
    outBoardPromise
      .then(() => {
        notification.style.display = 'block';
        notification.textContent = 'Sign-out successful';
        setTimeout(() => {
          notification.style.display = 'none';
          navigateTo('/');
        }, 2000);
      })
      .catch(() => {
        notification.style.display = 'block';
        notification.textContent = 'An error happened';
        setTimeout(() => {
          notification.style.display = 'none';
          navigateTo('/');
        }, 2000);
      });
  });

  boardMenu.addEventListener('click', () => {
    navigateTo('/board');
  });

  profileMenu.addEventListener('click', () => {
    navigateTo('/profile');
  });

  // guardar post
  btnSavePost.addEventListener('click', () => {
    if (post.value === '') {
      postBoard();
      notification.style.display = 'block';
      notification.textContent = 'Please enter a message';
      post.setAttribute('style', 'background-color: #FF5A5F ;');
      setTimeout(() => {
        notification.style.display = 'none';
        post.removeAttribute('style');
      }, 2000);
    } else {
      const valuePostPromise = postBoard(post.value);
      valuePostPromise.then(() => {
        notification.style.display = 'block';
        notification.textContent = 'Message successfully saved!';
        post.value = '';
        setTimeout(() => {
          notification.style.display = 'none';
        }, 2000);
      });
    }
  });

  // post en tiempo real
  onGetPost((snapshot) => {
    const getPostBoard = document.getElementById('board-post');
    getPostBoard.innerHTML = '';
    snapshot.forEach((doc) => {
      const user = auth.currentUser;
      const data = doc.data();
      const drawingPost = onDrawData(data, doc, user.uid);
      getPostBoard.append(drawingPost);
    });

    let data;
    let textAreaEdit;

    const btnEditModalList = document.querySelectorAll('.btn-editBoard');
    const btnDeleteList = document.querySelectorAll('.btn-deletepost');
    const btnStarBoard = document.querySelectorAll('.fa-solid,fa-star');

    // opción editar
    btnEditModalList.forEach((btnEdit) => {
      btnEdit.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        const gettingPost = getPost(id);
        gettingPost.then((doc) => {
          data = doc.data();
          textAreaEdit = document.querySelector('.content-edit-modal');
          textAreaEdit.value = data.description;
          console.log(textAreaEdit.value);
        });

        // edit del modal
        const showingModalEdit = createPostModal(data);
        showingModalEdit.classList.add('show');
        container.appendChild(showingModalEdit);
        const postEdit = container.querySelector('.btn-editpost');
        postEdit.addEventListener('click', () => {
          const updatingPost = updateAll(id, {
            description: textAreaEdit.value,
          });
          updatingPost
            .then(() => {
              notification.style.display = 'block';
              notification.textContent = 'Message successfully updated!';
              setTimeout(() => {
                notification.style.display = 'none';
              }, 2000);
              container.removeChild(showingModalEdit);
            })
            .catch(() => {
              notification.style.display = 'block';
              notification.textContent = 'Error updating message';
              setTimeout(() => {
                notification.style.display = 'none';
              }, 2000);
            });
        });
        const ignoreEdit = container.querySelector('.btn-x-edit');
        ignoreEdit.addEventListener('click', () => {
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

    // conteo de likes
    btnStarBoard.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = e.target.id;
        const gettingDoc = getPost(id);
        const newLike = auth.currentUser.uid;
        console.log(newLike);
        gettingDoc
          .then((doc) => {
            console.log(gettingDoc);
            if (doc.exists()) {
              console.log(doc, 'doc exists ');
              const likeArray = doc.data().likes;
              console.log(likeArray);
              if (!likeArray.includes(newLike)) {
                likeArray.push(newLike);
                updateAll(id, { likes: likeArray })
                  .then(() => {
                    console.log('like agregado con exito');
                  })
                  .catch((error) => {
                    console.log('Error al agregar el like', error);
                  });
              } else {
                const index = likeArray.indexOf(newLike);
                if (index > -1) {
                  likeArray.splice(index, 1);
                  updateAll(id, { likes: likeArray })
                    .then(() => {
                      console.log('Like removido con éxito');
                    })
                    .catch((error) => {
                      console.log('Error al remover el like:', error);
                    });
                }
              }
            } else {
              console.log('La publicación no existe');
            }
          })
          .catch((error) => {
            console.log('Error al obtener la publicación:', error);
          });
      });
    });
  });
  menu.append(boardMenu, profileMenu);
  container.append(
    menu,
    containerImgPost,
    btnSavePost,
    sortLabel,
    sort,
    boardPost,
  );
  section.append(buttonReturn, buttonLogOut, container, notification);
  return section;
}
export default board;
