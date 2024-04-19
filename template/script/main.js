let lastElementMenu, lastEventTargetId, timerId;
const mQLMax = window.matchMedia('(max-width: 820px)');
let footer_inner = document.querySelector('.footer_inner');
let form = document.querySelector('header>form');
let menu = document.querySelector('.menu');
let course = document.getElementById('course');
let up = document.querySelector('.up');

let cssVariables =  new Map([
    [
        [
            'История эзотерики',
            'Зарождение эзотерических учений',
            'Эзотерические учения в средние века',
            'Влияние античной философии на эзотерику',
            'Ренессанс и эзотерическое мышление',
            'Особенности эзотерических течений в XIX веке',
            'Вклад знаменитых мистиков и оккультистов в эзотерику',
            'Эзотерические движения и школы XX века',
            'Современные тенденции в изучении и практике эзотерики',
            'Влияние интернета на распространение эзотерических знаний',
            'Исследования и перспективы развития истории эзотерики',
        ], 
        {
        '--bg-image-header' : 'url(../img/header_hist_esot.jpg)',
        '--bg-image-main' : 'url(../img/main_hist_esot.jpg)',
        '--bg-image-footer' : 'url(../img/footer_hist_esot.jpg)',
        '--base-color' : '#0c3666',
        '--card-bg-color' : '#1c3b4fc7'
        }
    ],
    [
        [
            'Эзотерические учения',
            'Герметизм',
            'Алхимия',
            'Гностицизм',
            'Каббала',
            'Неоплатонизм',
            'Таро',
            'Астрология',
            'Йога',
            'Шаманизм',
            'Оккультизм',
            
        ], 
        {
            '--bg-image-header' : 'url(../img/bg-header_es_teachings.jpg)',
            '--bg-image-main' : 'url(../img/bg-main_es_teachings.jpg)',
            '--bg-image-footer' : 'url(../img/bg-footer_es_teachings.jpg)',
            '--base-color' : '#5c5b44',
            '--card-bg-color' : '#64664eb3'
        }
    ],
    [
        [
            'Тайные знания славян',
            'Мифология и сказания славян',
            'Ритуалы и обряды в славянской культуре',
            'Славянская астрология и космология',
            'Травы и лекарственные растения в славянской медицине',
            'Символика славянских колдовских знаков и амулетов',
            'Поверья и предрассудки в славянской культуре',
            'Медитации и практики самопознания в славянской традиции',
            'Обучение и исследования славянских тайн',
            'Славянская мифология в современном искусстве',
            'Тайные общества и братства в славянской культуре',
            
        ],
        {
            '--bg-image-header' : 'url(../img/bg-header_slavs_secret_knowledge.jpg)',
            '--bg-image-main' : 'url(../img/bg-main_slavs_secret_knowledge.jpg)',
            '--bg-image-footer' : 'url(../img/bg-footer_slavs_secret_knowledge.jpg)',
            '--base-color' : '#041e0660',
            '--card-bg-color' : '#041e0654'
        }
    ],
    [
        [
            'Практическая эзотерика',
            'Техники медитации и визуализации',
            'Энергетические практики и целительство',
            'Практики саморазвития и внутренней трансформации',
            'Работа с чакрами и энергетическими центрами',
            'Техники астральной проекции и путешествия в мире снов',
            'Рабочие инструменты практикующего эзотерика',
            'Практики энергетической защиты и очищения',
            'Техники гипноза и транса',
            'Практические инструкции по работе с символикой и мифологией',
            'Исследование оккультных наук и практик',
        ],
        {
            '--bg-image-header' : 'url(../img/bg-header-practical_esoterics.jpg)',
            '--bg-image-main' : 'url(../img/bg-main-practical_esoterics.jpg)',
            '--bg-image-footer' : 'url(../img/bg-footer-practical_esoterics.jpg)',
            '--base-color' : '#7890db7d',
            '--card-bg-color' : '#7890db7d'
        }
    ],
    [
        [
            'Блог',
            'Статьи',
            'Видео',
            'Обучение',
        ],
        {
            '--bg-image-header' : 'url(../img/bg-header-library.jpg)',
            '--bg-image-main' : 'url(../img/bg-main-library.jpg)',
            '--bg-image-footer' : 'url(../img/bg-footer-library.jpg)',
            '--base-color' : '#1f3f267d',
            '--card-bg-color' : '#1f3f267d'
        }
    ],
    [
        [
            'Библиотека',
            'Книги',
            'Публикации',
            'Фильмы',
        ],
        {
            '--bg-image-header' : 'url(../img/bg-header-library.jpg)',
            '--bg-image-main' : 'url(../img/bg-main-library.jpg)',
            '--bg-image-footer' : 'url(../img/bg-footer-library.jpg)',
            '--base-color' : '#1f3f267d',
            '--card-bg-color' : '#1f3f267d'
        }
    ],
]);

// document.documentElement.style.setProperty('--pagebackground', 'firebrick');

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

document.querySelectorAll('.main, .header, .footer').forEach(element => {
    addEventListener('click', (event) => {
        if (!mQLMax.matches){
            if (lastEventTargetId) {
                document.querySelector('.' + lastEventTargetId).style.top = '-1000px';
                lastEventTargetId = null;
            }
            if (lastElementMenu) {
                lastElementMenu.style.color = 'white';
            }
        } else {
            if (event.target != document.querySelector('.up')) {
                menu.style.animation = 'rescalingX .4s ease-out';
            }
        }
    });
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
        if (menu.style.display !== 'none') {
            minScreen();
        }
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
    let h1 = document.querySelector('.header__name').innerHTML.toLowerCase()

    // document.documentElement.style.setProperty('--pagebackground', 'firebrick');
    cssVariables.forEach((val, key) => {
        if (key.map((el => el.toLocaleLowerCase())).includes(h1)){
            Object.entries(val).forEach((el) => {
                // console.log(el[0], el[1]);
                document.documentElement.style.setProperty(el[0], el[1]);
            });
            // break;
        }
    });
});
