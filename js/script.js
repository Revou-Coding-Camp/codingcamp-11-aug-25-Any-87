// ==== Dark Mode Toggle ====//
const darkModeBtn =
document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('bg-gray-900');
    document.body.classList.toggle('text-white');
    document.querySelectorAll(' all, body, section, nav, footer, form, input, textarea, button').forEach(el => {
        el.classList.toggle('bg-gray-800');
        el.classList.toggle('text-white');
    });
});

// ==== Smooth scroll ====//
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });