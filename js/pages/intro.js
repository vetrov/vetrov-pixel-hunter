import render from '../render';
import greeting from './greeting';

const template = `
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
      Sparnaay.</p>
  </div>
`;

export default () => {
  const element = render(template);
  element.querySelector('.intro__asterisk').onclick = greeting;
};
