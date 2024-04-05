let lastElementMenu, lastEventTargetId, timerId;
const mQLMax = window.matchMedia('(max-width: 820px)');
let footer_inner = document.querySelector('.footer_inner');
let form = document.querySelector('header>form');
let menu = document.querySelector('.menu');
let course = document.getElementById('course');
let up = document.querySelector('.up');

let minScreen = () => {
    let logo = document.querySelector('nav>.logo');
    document.querySelector('.header>section').appendChild(logo);
    document.querySelector('.header').appendChild(course);
    course.innerHTML = '';
    form.style.left = `calc(50% - ${form.clientWidth}px/2 + 11px)`;
    form.style.bottom = `calc(${document.querySelector('.footer').clientHeight}px + 2px)`;
    up.style.top = `${document.querySelector('.header').clientHeight}px`;
}

let maxScreen = () => {
        let target = document.querySelector('.menu__footer');
        target.parentNode.insertBefore(course, target);
        course.innerHTML = 'Маятник<br>вам<br>в руки';
        document.querySelector('.menu').prepend(document.querySelector('.logo'));
}

document.querySelector('.footer').addEventListener('mouseover',(e) => {
    if (e.eventPhase === 2) {
        footer_inner.style.display = 'grid';
        footer_inner.style.animation = 'scalingY .4s ease-out';
    }
});

document.querySelector('.footer').addEventListener('mouseout', (e) => {
    if (!Array.from(document.querySelectorAll('.footer *')).includes(e.toElement)) {
        footer_inner.style.animation = 'rescalingY .4s ease-out';
    }
});

menu.addEventListener('animationend', (e) => {
    if(e.animationName === 'rescalingX') {
        minScreen();
        menu.style.display = 'none';
    }
});


footer_inner.addEventListener('animationend', (e) => {
    if(e.animationName === 'rescalingY') {footer_inner.style.display = 'none'}
});

document.querySelectorAll('.items>.menu__item').forEach(element => {
    ['mouseover', 'focus'].forEach(ev => {
        element.addEventListener(ev, () => {
            if (ev === 'mouseover') {
                if (lastElementMenu) {
                    lastElementMenu.style.color = 'white';
                }
                element.style.color = '#ecb009';
            };
            let eventTargetId = element.id;
            if (lastEventTargetId && (lastEventTargetId != eventTargetId)) {
                document.querySelector('.' + lastEventTargetId).style.top = '-1000px';
            } else if (lastEventTargetId) {
                return
            }
                        let y = element.getBoundingClientRect().top + element.clientHeight / 2;
            let subMenuHeight = document.querySelector('.' + eventTargetId).clientHeight;
            let winHight = document.body.clientHeight;
            let top = y - subMenuHeight / 2;
            if (top < 0 && (winHight - subMenuHeight > 0)) {
                top = (winHight - subMenuHeight) / 2;
            } else if (top + subMenuHeight > winHight) {
                top = winHight - subMenuHeight
            }
            top = (top < 0) ? 0 : top;
            let submenuStyle = document.querySelector('.' + eventTargetId).style;
            submenuStyle.left = document.querySelector('.menu').clientWidth + 5 + 'px';
            submenuStyle.top = `${top}px`;
            lastEventTargetId = eventTargetId;
            lastElementMenu = element;
        });

    });
});

document.querySelector('.main').addEventListener('click', () => {
    if (!mQLMax.matches){
        if (lastEventTargetId) {
            document.querySelector('.' + lastEventTargetId).style.top = '-1000px';
            lastEventTargetId = null;
        }
        if (lastElementMenu) {
            lastElementMenu.style.color = 'white';
        }
    } else {
        menu.style.animation = 'rescalingX .4s ease-out';
    }
    
});

document.querySelector('.up').addEventListener('click', () => {
    menu.style.display = 'grid';
    maxScreen();
    menu.style.animation = 'scalingX .4s ease-out';
});

window.addEventListener('resize', () => {
    if (mQLMax.matches) {
        form.style.bottom = `calc(${document.querySelector('.footer').clientHeight}px + 2px)`;
        up.style.top = `${document.querySelector('.header').clientHeight}px`;
    }
});


mQLMax.addEventListener('change', (ev) => {
    if (ev.matches) {
        if (menu.style.display === 'grid') { minScreen();}
    } else {
        menu.style.animation = '';
        maxScreen();
        menu.style.display = '';
        
    }
});

window.addEventListener('load', () => {
    if (mQLMax.matches) {
        minScreen()
    }
});
