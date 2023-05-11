function profile(navigateTo) {
  const section = document.createElement('section');
  const container = document.createElement('div');
  container.className = 'container-profile';
  const containerNames = document.createElement('div');
  containerNames.className = 'container-names';
  const containerPost = document.createElement('div');
  containerPost.className = 'container-post';
  const menu = document.createElement('div');
  menu.className = 'menu-profile';
  const btnBoard = document.createElement('button');
  btnBoard.className = 'btn-board';
  const btnEdit = document.createElement('button');
  btnEdit.className = 'btn-edit';
  const btnProfile = document.createElement('button');
  btnProfile.className = 'btn-profile';

  const btnEditProfile=document.createElement("button");
  btnEditProfile.textContent="Edit Profile";

  const userInfo = document.createElement('div');
  userInfo.className = 'user-info';
  const userImg = document.createElement('img');
  userImg.className = 'user-img';
  const containerUser = document.createElement('div');
  containerUser.className = 'container-user-post';
  const postImg = document.createElement('img');
  postImg.className = 'post-img';
  const userName = document.createElement('h1');
  userName.className = 'user-name';
  const userLastName = document.createElement('h2');
  userLastName.className = 'user-last-name';
  const userNamePost = document.createElement('h3');
  userNamePost.className = 'user-name-post';
  const yourPosts = document.createElement('p');
  yourPosts.className = 'your-posts';
  const post = document.createElement('textarea');
  post.className = 'post';

  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Back';
  buttonReturn.classList.add('buttonReturn');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/board');
  });

  yourPosts.textContent = 'Your Posts:';
  btnEdit.textContent = 'Edit profile';
  
  btnEditProfile.addEventListener('click', () => {
    navigateTo('/settingprofile');
  });


  btnBoard.textContent = 'Board';
  btnBoard.addEventListener('click', () => {
    navigateTo('/board');
  });

  btnProfile.textContent = 'Profile';
  btnProfile.addEventListener('click', () => {
    navigateTo('/profile');
  });

  userImg.src = './images/vector-profile-photo.svg';
  userImg.alt = 'Profile photo';

  postImg.src = './images/vector-profile-photo.svg';
  postImg.alt = 'Post photo';

  userName.textContent = 'User name...';
  userLastName.textContent = 'User last name';
  userNamePost.textContent = 'User name...';

  post.placeholder = 'Lorem ipsum dolor sit amet. Est dolores minus qui consequuntur omnis in nihil galisum';


  menu.append(btnBoard, btnProfile);
  containerNames.append(userName, userLastName, btnEdit);
  userInfo.append(userImg, containerNames);
  containerUser.append(postImg, userNamePost);
  containerPost.append(containerUser, post);
  container.append(menu, userInfo, yourPosts, containerPost, containerPost);

  section.append(buttonReturn, container);

  return section;
}

export default profile;
