let lastElementMenu, lastEventTargetId, lastCourseIn, lastLogoIn, menuPosition;
if (window.getComputedStyle(document.querySelector('.blockquote')).display === 'none') {
    lastCourseIn = lastLogoIn = '.aside';
} else {
    lastCourseIn = '.menu__footer';
}
document.querySelector('.footer').onmouseover = function () {
    if (getComputedStyle(document.querySelector('.menu')).position === 'static') {
        document.querySelector('.menu').style.minHeight = '89.1vh';
    } else {
        document.querySelector('.dash').style.minHeight = '90vh';
        document.querySelector('.menu').style.minHeight = '90vh';
    }
};

document.querySelector('.footer').onmouseout = function () {
    document.querySelector('.menu').style.minHeight = '99vh';
    if (getComputedStyle(document.querySelector('.menu')).position !== 'static') {
        document.querySelector('.dash').style.minHeight = '99vh';
    }
};

document.querySelectorAll('.menu>.menu__item').forEach(element => {
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

            document.querySelector('.' + eventTargetId).style.top = top + 'px';
            lastEventTargetId = eventTargetId;
            lastElementMenu = element;
        });

    });
});

document.querySelectorAll('.dash, header, footer').forEach(element => {element.onclick = function () {
        if (window.getComputedStyle(document.querySelector('.menu')).position === 'static'){
            if (lastEventTargetId) {
                document.querySelector('.' + lastEventTargetId).style.top = '-1000px';
                lastEventTargetId = null;
            }
            if (lastElementMenu) {
                lastElementMenu.style.color = 'white';
            }
        } else {
            document.querySelector('.menu').style.left = '-206px';
            document.querySelector('.logo').style.flexBasis = '30vw';
            document.querySelector('.logo img').style.height = '70%';
        }
    };
});

document.querySelector('.up').onclick = function () {
    document.querySelector('.menu').style.left = '0';
    document.querySelector('.logo').style.flexBasis = '180px';
    document.querySelector('.logo img').style.height = '50%';
}

window.addEventListener('resize', () => {
    let courseIn;
    let display = window.getComputedStyle(document.querySelector('.blockquote')).display
    if (display === 'none') {
        courseIn = '.aside';
    } else {
        courseIn = '.menu__footer';
    }
    if (courseIn !== lastCourseIn) {
        let courseToMove = document.getElementById('course');
        target = document.querySelector(courseIn);
        target.parentNode.insertBefore(courseToMove, target);
        lastCourseIn = courseIn;
    }
    if (window.getComputedStyle(document.querySelector('.menu')).position === 'static'){
        document.querySelector('.logo').style.flexBasis = '180px';
        document.querySelector('.logo img').style.height = '50%';
        document.querySelector('.dash').style.minHeight = 'auto';
    } else {
        document.querySelector('.logo').style.flexBasis = '30vw';
        document.querySelector('.logo img').style.height = '70%';
        document.querySelector('.menu').style.left = '-206px';
        document.querySelector('.dash').style.minHeight = '99vh';
    }
});

window.addEventListener('load', () => {
    if (lastCourseIn === '.aside') {
        let courseToMove = document.getElementById('course');
        let target = document.querySelector(lastCourseIn);
        target.parentNode.insertBefore(courseToMove, target);
    }
});
