function settingprofile(navigateTo) {
  const buttonReturn = document.createElement('button');
  const sectionSettingProfile = document.createElement('section');
  const formSettingProfile = document.createElement('form');
  const menu = document.createElement('div');
  const boardMenu = document.createElement('a');
  boardMenu.href = '/board';
  boardMenu.textContent = 'Board';
  const profileMenu = document.createElement('a');
  profileMenu.href = '/profile';
  menu.append(boardMenu, profileMenu);
  const imgSettingProfile=document.createElement("img");
  

  const labelFullName = document.createElement("label");
  labelFullName.htmlFor = "full-name";
  labelFullName.textContent = "Full name";
  const inputFullName = document.createElement("input");
  inputFullName.id = "full-name";
  const containerFullName=document.createElement("div");
  containerFullName.classList.add("container-fullname")
  containerFullName.append(labelFullName,inputFullName)

  const labelSettingUserName = document.createElement("label");
  labelSettingUserName.htmlFor = "setting-name";
  labelSettingUserName.textContent = "User name";
  const inputSettingUserName = document.createElement("input");
  inputSettingUserName.id = "setting-name";
  const containerSettingUserName=document.createElement("div");
  containerSettingUserName.append(labelSettingUserName,inputSettingUserName)

  const labelNotification=document.createElement("label");
  labelNotification.htmlFor="setting-notification";
  labelNotification.textContent="Notification";
  const inputNotification = document.createElement("input");
  inputNotification.type="checkbox";
  inputNotification.value="first-checkbox";
  inputNotification.id = "setting-notification";
  const containerNotification=document.createElement("div");
  containerNotification.append(labelNotification,inputNotification);
  const btnSave=document.createElement("button");
  btnSave.textContent="Save";

  buttonReturn.textContent = 'Back';
  profileMenu.textContent = 'Profile';
  imgSettingProfile.src=("./images/Ellipse 56.png")
  imgSettingProfile.classList.add("img-setting")


  buttonReturn.classList.add('buttonReturn');
  menu.className = 'menu-class';
  boardMenu.className = 'menu-top-board';
  profileMenu.className = 'menu-top-profile';
  inputFullName.classList.add("input-fullname");
  labelFullName.classList.add("label-fullname")
  inputSettingUserName.classList.add("input-setting");
  labelSettingUserName.classList.add("label-setting")
  containerSettingUserName.classList.add("container-setting")
  inputNotification.classList.add("input-notification");
  labelNotification.classList.add("label-setting");
  containerNotification.classList.add("container-setting");
  btnSave.classList.add("btn-save");
  formSettingProfile.classList.add("formSetting-Profile")


  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });


  formSettingProfile.append(menu,imgSettingProfile, containerFullName,containerSettingUserName,
    containerNotification,btnSave
    );
  sectionSettingProfile.append(buttonReturn, formSettingProfile);
  return sectionSettingProfile
}

export default settingprofile 