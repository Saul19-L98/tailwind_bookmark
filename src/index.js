import './style.css';

//Background image.
import './assets/images/bg-dots.svg';

//Logo
import lBfooter from './assets/images/logo-bookmark-footer.svg';
import lBookmark from './assets/images/logo-bookmark.svg';

// Module
import { addLogo } from './assets/js/logo';
import { viewTemplate } from './assets/js/view';

addLogo();

(function(){
    document.querySelector('body').innerHTML = viewTemplate();
})()

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const logoH = document.querySelector('#logo');

btn.addEventListener('click',navToggle);

tabs.forEach( tab => {
    tab.addEventListener('click',onTabClick)
});

function onTabClick(e){
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-b-4',
            'border-softRed',
            'md:border-b-0'
        )
    });

    //Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'));

    //Activate a new tab and panel based on the target
    e.target.classList.add('border-softRed','border-b-4');

    const classString = e.target.getAttribute('data-target');
    
    document.querySelector('#panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
}

function navToggle(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    if(menu.classList.contains('flex')){
        logoH.setAttribute('src',`${lBfooter}`);
    }else{
        logoH.setAttribute('src',`${lBookmark}`);
    }
}