import '../styles/modernize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/services.css';
import '../styles/components/project.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/animations.css';
import '../styles/utility.css';
import '../src/attractHover.js';
import '../src/scrollAnimation.js';
import '../src/imageHover.js';
import '../src/typeWrite.js';

let backToTop = document.querySelectorAll('.back__to-top');

backToTop.forEach( ( el ) => {
  el.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })  
});


let loader = document.querySelector('.pre-loader');

function delayLoad() {
  setTimeout( () => {
    loader.style.display = 'none';
    document.querySelector('.main').style.display = 'block';
  }, 5500)
}

delayLoad();
