fetch(`https://api.github.com/users/Subh-29`).
then(obj => obj.json())
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});