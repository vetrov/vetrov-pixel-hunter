const mainElement = document.getElementById('main');

export default (template) => {
  const element = document.createElement('div');
  element.innerHTML = template;

  mainElement.innerHTML = '';
  mainElement.appendChild(element);

  return element;
};
