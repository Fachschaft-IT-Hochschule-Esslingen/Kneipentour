setHeight()
window.addEventListener('resize', setHeight);

function setHeight() {
    document.body.style.minHeight = window.innerHeight + 'px';
}