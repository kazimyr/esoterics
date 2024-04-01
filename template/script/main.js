let lastElementMenu, lastEventTargetId
let footer_inner = document.querySelector('.footer_inner');

document.querySelector('.footer').onmouseover = function () {
    // let footer_inner = document.querySelector('.footer_inner');
    // console.log(footer_inner.style.display);
    footer_inner.style.display = 'grid';
    footer_inner.style.animation = 'scalingY .4s ease-out';
};

footer_inner.onmouseout = function () {
    footer_inner.style.animation = 'rescalingY .4s ease-out';
    let timerId = setTimeout(() => {footer_inner.style.display = 'none'}, 300);
};

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
            submenuStyle.top = top + 'px';
            lastEventTargetId = eventTargetId;
            lastElementMenu = element;
        });

    });
});

document.querySelector('.main').onclick = function () {
    // if (window.getComputedStyle(document.querySelector('.menu')).position === 'static'){
        if (lastEventTargetId) {
            document.querySelector('.' + lastEventTargetId).style.top = '-1000px';
            lastEventTargetId = null;
        }
        if (lastElementMenu) {
            lastElementMenu.style.color = 'white';
        }
    // }
}