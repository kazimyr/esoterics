let footer_inner = document.querySelector('.footer_inner');

document.querySelector('.footer').onmouseover = function () {
    // let footer_inner = document.querySelector('.footer_inner');
    // console.log(footer_inner.style.display);
    footer_inner.style.display = 'grid';
    footer_inner.style.animation = 'scalingY .4s';
};

footer_inner.onmouseout = function () {
    // let footer_inner = document.querySelector('.footer_inner');
    footer_inner.style.animation = 'rescalingY .4s';
   /*  console.log(footer_inner.style.display);
    footer_inner.style.display = ''; */
    // console.log(footer_inner.style.display);
    // console.log(footer_inner.style.display);
    let timerId = setTimeout(() => {footer_inner.style.display = 'none'}, 300);
    // clearTimeout(timerId);
    //                  }, 400);
    
    // clearTimeout(timerId);
};