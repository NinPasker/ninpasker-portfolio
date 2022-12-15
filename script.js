// Javascript for menu functionality is below

const menu = document.querySelectorAll('.mobile-menu');

const checkbox = document.getElementById('toggle');

// close mobile menu when link is clicked
menu.forEach(e => {
    e.addEventListener('click', function () {
        checkbox.checked = false;
    })
})

// Javascript for Slider functionality is below

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');

const rightArrow = document.querySelector('.right');
const indicatorParent = document.querySelector('.controls ul');

let sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
    });
});


rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
})

leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)';
})

// js for contact func is below

const termsCheckbox = document.getElementById('terms');

const button = document.querySelector('.button');

termsCheckbox.addEventListener('input', (event) => {
    if (event.target.checked === true) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})