const hamburger = document.querySelector(".ham");
const navsub = document.querySelector(".nav-sub");
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change")
    navsub.classList.toggle("nav-change")
});
let vid1 = document.querySelector('#vid1');
let section = document.querySelector('.item1');
section.addEventListener('mouseover', function(){
        vid1.play();
        console.log('hover over works')
    })
    section.addEventListener('mouseout', function(){
        vid1.pause();
    })
let vid2 = document.querySelector('#vid2');
let section2 = document.querySelector('.item2');
    section2.addEventListener('mouseover', function(){
            vid2.play();
        })
        section2.addEventListener('mouseout', function(){
            vid2.pause();
        })
let vid3 = document.querySelector('#vid3');
let section3 = document.querySelector('.item3');
            section3.addEventListener('mouseover', function(){
                    vid3.play();
                })
                section3.addEventListener('mouseout', function(){
                    vid3.pause();
                })