function createHeader() {
  const header = createElement('header', 'header', document.body);
  createElement('img', 'logo', header);
  createElement('img', 'profilePic', header);
}
function createSideMenu() {
  const sideMenu = createElement('nav', 'nav', document.body);
  createAnchor('Home', sideMenu);
  createAnchor('Contact', sideMenu);
  createAnchor('About', sideMenu);
}
function createMain() {
  const Main = createElement('div', 'main', document.body);
  createButton('myButton', 'click me', main, function() { alert('you clicked me')});
  createButton('myButton', 'click me', main.style.backgroundColor = 'blue', function () {
    alert('you clicked me');
  });
}
function createFooter() {
  const Footer = createElement('div', 'footer', document.body);
  createAnchor('Facebook', footer);
}

// function createHeader() {
//   const header = document.createElement('header');
//   header.classList.add('header');
//   document.body.appendChild(header);

//   const logo = document.createElement('img');
//   logo.classList.add('logo');
//   header.appendChild(logo);

//   const profilePic = document.createElement('img');
//   profilePic.classList.add('profilePic');
//   header.appendChild(profilePic);
// }

// function createSideMenu() {
//   const sideMenu = document.createElement('nav');
//   document.body.appendChild(sideMenu);

//   const homeLink = document.createElement('a');
//   homeLink.innerHTML = 'HOME';
//   homeLink.href = '#';
//   sideMenu.appendChild(homeLink);

//   const contactLink = document.createElement('a');
//   contactLink.innerHTML = 'CONTACT';
//   contactLink.href = '#';
//   sideMenu.appendChild(contactLink);

//   const aboutLink = document.createElement('a');
//   aboutLink.innerHTML = 'ABOUT';
//   aboutLink.href = '#';
//   sideMenu.appendChild(aboutLink);
// }
// function createMain(){
//   const main = document.createElement('div');
//   document.body.appendChild(main);
//   main.classList.add('main');
// }
