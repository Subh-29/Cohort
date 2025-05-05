function orderPizza() {
    return new Promise((res, rej) => {
        Math.random() < 0.7 ? res() : rej();
    });
}


orderPizza()
    .then(() => {
        console.log("🍕Pizza Has been delivered");
    })
    .catch(() => {
        console.log("❌Pizza delivery failed!!");
    });

    let users = [
        { userID: 1, name: "Subhchintak" },
        { userID: 2, name: "Subh" },
        { userID: 3, name: "Mig" }
    ];
    
    let posts = [
        { userID: 1, postID: 1, postTitle: "Post A" },
        { userID: 3, postID: 2, postTitle: "Post B" },
        { userID: 1, postID: 3, postTitle: "Post C" }
    ];
    
    let comments = [
        { userID: 1, postID: 2, commentID: 1, msg: "Hello Hi HI Hi" },
        { userID: 1, postID: 1, commentID: 2, msg: "Hello Mig" }
    ];
    
    // Fetch user
    function getUser(userID) {
        const user = users.find(u => u.userID === userID);
        return new Promise((res, rej) => {
            setTimeout(() => {
                user ? res(user) : rej(505);
            }, 1000);
        });
    }
    
    // Fetch posts by user
    function getPost(userID) {
        const userPosts = posts.filter(p => p.userID === userID);
        return new Promise((res, rej) => {
            setTimeout(() => {
                userPosts.length ? res(userPosts) : rej(506);
            }, 1000);
        });
    }
    
    // Fetch comments on given posts
    function getComment(posts) {
        const postIDs = new Set(posts.map(p => p.postID));
        const postComments = comments.filter(c => postIDs.has(c.postID));
        return new Promise((res, rej) => {
            setTimeout(() => {
                postComments.length ? res(postComments) : rej(507);
            }, 1000);
        });
    }
    
    // Flow
    getUser(1)
        .then(user => {
            console.log(`User: ${user.name}`);
            return getPost(user.userID);
        })
        .then(posts => {
            console.log("Posts:", posts);
            return getComment(posts);
        })
        .then(comments => {
            console.log("Comments:");
            comments.forEach(c => console.log(`- ${c.msg}`));
        })
        .catch(err => {
            switch (err) {
                case 505:
                    console.error("❌ No such user ID present!");
                    break;
                case 506:
                    console.error("❌ No posts found for this user!");
                    break;
                case 507:
                    console.error("❌ No comments found for the user's posts!");
                    break;
                default:
                    console.error("💥 Unexpected error:", err);
            }
        })
        .finally(() => {
            console.log("✅ All done!");
        });
    