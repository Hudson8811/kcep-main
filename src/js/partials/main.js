document.addEventListener("DOMContentLoaded", function () {





    if ($(window).width() > 1559){
        initAnimation('.i1920 path.cable');
    } else if ($(window).width() > 1025) {
        initAnimation('.i1440 path.cable');
    }

    function initAnimation(elems){
        $(elems).each(function (index,elem){
            let length = elem.getTotalLength();
            elem.style.transition = elem.style.WebkitTransition = 'none';
            elem.style.strokeDasharray = length + ' ' + length;
            if ($(elem).hasClass('cable-invert')){
                elem.style.strokeDashoffset = -length;
            } else {
                elem.style.strokeDashoffset = length;
            }
            elem.getBoundingClientRect();

            if ($(elem).hasClass('cable-1')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.3s linear';
                elem.style.strokeDashoffset = '0';
            }
            if ($(elem).hasClass('cable-2')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.3s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },300);
            }
            if ($(elem).hasClass('cable-3')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.3s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },600);
            }
            if ($(elem).hasClass('cable-4')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.5s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },900);
            }
            if ($(elem).hasClass('cable-5')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.6s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },1400);
            }
            if ($(elem).hasClass('cable-6')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.6s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },2000);
            }
            if ($(elem).hasClass('cable-7')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 1s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },2000);
            }
            if ($(elem).hasClass('cable-8')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 1s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },2000);
            }
            if ($(elem).hasClass('cable-9')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.8s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },3000);
            }
            if ($(elem).hasClass('cable-10')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.8s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },3000);
            }
            if ($(elem).hasClass('cable-11')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 0.6s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },3800);
            }
            if ($(elem).hasClass('cable-12')){
                elem.style.transition = elem.style.WebkitTransition = 'stroke-dashoffset 1s linear';
                setTimeout(function (){
                    elem.style.strokeDashoffset = '0';
                },4400);
            }

        });
    }

});
