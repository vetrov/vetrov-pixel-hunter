{

  const loadTemplate = (templateName) => {
    const node = document.createElement('span');
    const template = document.getElementById(templateName);
    const content = template.content ? template.content : template;
    node.appendChild(content);
    return node.cloneNode(true);
  };


  // Rules
  const rulesElement = loadTemplate('rules');
  const rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = (e) => {
    if (e.target.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  const mainElement = document.getElementById('main');

  const switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  const slides = [
    loadTemplate('intro'),
    loadTemplate('greeting'),
    rulesElement,
    loadTemplate('game-1'),
    loadTemplate('game-2'),
    loadTemplate('game-3'),
    loadTemplate('stats')
  ];
  let current = -1;

  const select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
}
