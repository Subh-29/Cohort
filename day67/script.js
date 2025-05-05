const form = document.getElementById('gitForm');
const formBtn = document.getElementById('form-btn');
const gitCard = document.querySelector('.git-card');
// let username;

formBtn.addEventListener("mouseover", () => {
    console.log("Mouse over!");
    gsap.to(formBtn, {
        scale: 1.1,
        duration: 0.1,
        ease: "bounce.in"
    })
});

formBtn.addEventListener("mouseleave", () => {
    gsap.to(formBtn, {
        scale: 1,
        duration: 0.5,
        ease: "elastic.out"
    });
});


formBtn.addEventListener("click", det => {
    det.preventDefault();
    gsap.to(formBtn, {
        scale: 0.9,
        duration: 0.1,
        ease: "power2.in",
        onComplete: () => {
            gsap.to(formBtn, {
                scale: 1,
                duration: 0.1
            })
        }
    })
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    let username = data.username;
    fetch(`https://api.github.com/users/${username}`).
        then(obj => {
            if (!obj.ok) {
                throw new Error(404);
            }
            return obj.json();
        })
        .then(data => {
            const pfp = gitCard.querySelector('.img img');
            const details = gitCard.querySelector('.details');
            pfp.src = data["avatar_url"];
            details.querySelector('#name h1').textContent = `${data["login"]}`;
            const dateStr = data["created_at"];
            const dateObj = new Date(dateStr);

            const day = dateObj.getDate();         // 7
            const month = dateObj.getMonth() + 1;  // 10 (0-based index, so +1)
            const year = dateObj.getFullYear();    // 2022

            console.log(`${day}-${month}-${year}`);  // Output: 7-10-2022

            details.querySelector('#join').textContent = `${day}-${month}-${year}`;
            details.querySelector('#repo-count').textContent = `${data["public_repos"]}`;
            details.querySelector('#url').textContent = `${data["html_url"]}`;
            console.log(data);
            json = data;
            console.log(json["login"]);
            gitCard.style.visibility = "visible";
            gitCard.style.pointerEvents = "all";
            gitCard.style.position = "relative";
        })
        .catch(err => {
            console.log("err");
            gitCard.style.visibility = "hidden";
            gitCard.style.pointerEvents = "none";
            gitCard.style.position = "absolute";
        });
});



