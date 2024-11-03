let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');  
    } else {
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

function openButton(element) {
    const content = element.nextElementSibling;
    if (content.style.display === "flex") {
        content.style.display = "none";
        element.querySelector(".expand").textContent = "Expand v";
    } else {
        content.style.display = "flex";
        element.querySelector(".expand").textContent = "Expand ^";
    }
}
