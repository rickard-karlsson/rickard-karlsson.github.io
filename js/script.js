const funButton = document.querySelector('#fun');
const pageContent = document.querySelector('#content');
let clicked = false;
const originalContent = pageContent.innerHTML;

function funMenu() {
  if (!clicked) {
    const newMenu = `<div class="invert-menu">
      <ul>
        <li><a href="">Vowels</a></li>
        <li><a href="#">Game 2</a></li>
        <li><a href="javascript:funMenu();">Game 3</a></li>
      </ul>
    </div>`;
    pageContent.innerHTML = newMenu + originalContent;
    clicked = true;
  } else if (clicked) {
    pageContent.innerHTML = originalContent;
    clicked = false;
  }
};

