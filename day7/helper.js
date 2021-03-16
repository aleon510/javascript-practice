function createElement(type, name, parent) {
  const element = document.createElement(type);
  element.classList.add(name);
  parent.appendChild(element);
  return element;
}

function createAnchor(text, sideMenu) {
  const link = document.createElement('a');
  link.innerHTML = text;
  link.href = '#';
  sideMenu.appendChild(link);
}

function createButton(name, text, parent) {
  const button = createElement ('button', name, parent)
  button.innerHTML = text;
  button.addEventListener('click', callback);
  return button;
}