function settingprofile(navigateTo) {
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
    boardMenu.href = 'Board';
    boardMenu.textContent = 'Board';
    boardMenu.className = 'menu-top-board';
  
    const profileMenu = document.createElement('a');
    profileMenu.href = 'Profile';
    profileMenu.textContent = 'Profile';
    profileMenu.className = 'menu-top-profile';
  
    const imageProfile = document.createElement('img');
    imageProfile.src = ('./images/vector-profile-photo.svg');
    imageProfile.classList.add('imageProfile');

    const labelFullName=document.createElement("label");
    labelFullName.htmlFor="full-name";
    labelFullName.textContent="Full name";
    labelFullName.id="full-name";
    const inputFullName=document.createElement("input");
    inputFullName.id="full-name";


    buttonReturn.addEventListener('click', () => {
        navigateTo('/');
      });


      menu.append(boardMenu, profileMenu);
      section.append(buttonReturn, container);
      return section
}  

export default settingprofile 