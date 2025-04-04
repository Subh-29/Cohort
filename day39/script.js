const btn = document.querySelector('.download-btn');
const growthBar = document.querySelector('.growth-bar');
const percent = document.querySelector('.percent h3');

let downloaded = false;

btn.addEventListener('click', function() {
    if (!downloaded) {
        btn.textContent = 'Downloading..';
        let growth = 0;
        let time = Math.floor(Math.random() * 11 + 1);
        let int = setInterval(function() {
            ++growth;
            growthBar.style.width = growth + '%';
            percent.textContent = growth + '%';
            console.log(`time: ${time}, growth: ${growth}`);
        }, time * 10);

        setTimeout(() => {
            clearInterval(int);
            btn.textContent = 'Downloaded';
            btn.style.opacity = 0.5;
        }, time * 1000);
        downloaded = true;
    }
});
