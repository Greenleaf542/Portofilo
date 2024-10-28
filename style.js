// javascript for menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// bubble javascript
const container = document.getElementById('home1');

for (let i = 0; i < 10; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  
  
  const size = Math.random() * 40 + 20;  
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}vw`;  
  bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;  
  bubble.style.animationDelay = `${Math.random() * 2}s`; 
  container.appendChild(bubble);
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// another one
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offset - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);

    // removing navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};