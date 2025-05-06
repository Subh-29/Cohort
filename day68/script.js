async function getUserInfo(username) {
    const raw = await fetch(`https://api.github.com/users/${username}`);
    if (!raw.ok) {
        throw new Error(404);
    }
    return await raw.json();
}

let card = document.getElementById('card');

function getDate(rawdate) {
    let date = {
        day: rawdate.getDate(),
        month: rawdate.toLocaleString('default', { month: 'long' }),
        year: rawdate.getFullYear()
    };

    return date;
}

function decorateProfile(details) {
    //console.log(details.avatar_url);
    let date = getDate(new Date(details.created_at));
    let data =`<div class="max-w-4xl w-full bg-[#161b22] rounded-2xl shadow-2xl border border-[#30363d] hover:shadow-[#238636]/30 hover:scale-[1.01] transition-transform duration-300 ease-in-out">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
        
        <!-- Avatar -->
        <div class="shrink-0">
          <img
            id="avatar"
            src="${details["avatar_url"]}"
            alt="GitHub Avatar"
            class="w-36 aspect-square rounded-full border-4 border-[#30363d] shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Info -->
        <div class="flex-1">
          <!-- Input lookalike -->
          <div class="mb-4">
            <!-- <label class="block text-sm text-gray-400 mb-1">GitHub Username</label> -->
            <div class="input-flex flex justify-between w-full bg-[#0d1117] border border-[#30363d] text-white px-4 py-2 rounded-md focus:outline-none">

                <input
                id="usernameinp"
                type="text"
                class="w-[80%] focus:outline-none"
                placeholder="Github Username"
                />
                <button id="search-btn" type="submit" class="px-4 py-2  rounded-md tracking-wide p-1 bg-[#238636] font-semibold transition-all duration-200 active:scale-90 wrap-normal hover:bg-[#2ea043]">Search</button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <!-- Name/Bio -->
            <div class="space-y-1">
              <h2 id="name" class="text-2xl font-bold text-white">${details.name ? details.name : "N/A"}</h2>
              <p id="username" class="text-sm text-gray-400">@${details.login}</p>
              <p id="bio" class="text-sm text-gray-300 italic">${details.bio ? details.bio : "N/A"}</p>
            </div>

            <!-- Stats -->
            <div class="mt-4 sm:mt-0 grid grid-cols-3 gap-4 text-center text-sm text-gray-400">
              <div>
                <p id="repo-count" class="text-white font-semibold">${details.public_repos}</p>
                <p>Repos</p>
              </div>
              <div>
                <p id="follower-count" class="text-white font-semibold">${details.followers}</p>
                <p>Followers</p>
              </div>
              <div>
                <p id="following-count" class="text-white font-semibold">${details.following}</p>
                <p>Following</p>
              </div>
            </div>
          </div>

          <!-- Extra Info -->
          <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-300">
            <p><span class="text-white font-medium">Joined:&nbsp;</span><span id="joined">${date.day + "th " + date.month + " " + date.year}</span></p>
            <p><span class="text-white font-medium">Company:&nbsp;</span><span id="company">${details.company ? details.company : "N/A"}</span></p>
            <p><span class="text-white font-medium">Location:&nbsp;</span><span id="location">${details.location ? details.location : "N/A"}</span></p>
            <p><span class="text-white font-medium">Blog:&nbsp;</span>${details.blog ? `<a id=\"blog\" href=\"https://github.blog\" class=\"text-blue-400 hover:underline\">${details.blog}</a>` : "N/A"}</p>
            <p><span class="text-white font-medium">Public Gists:&nbsp;</span><span id="gist-count">${details.public_gists}</span></p>
          </div>

          <!-- Profile Button -->
          <div class="mt-6 text-right">
            <a
              id="github-url"
              href=${details.html_url}
              target="_blank"
              class="inline-block px-5 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-semibold transition-all duration-200 active:scale-90"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>`
    card.innerHTML = data;
    //document.getElementById('search-btn').addEventListener("click", handleSearch);
}

//let search = document.getElementById('search-btn');

document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "search-btn") {
      const username = document.getElementById("usernameinp").value.trim();
      if (username.length > 0) {
        getUserInfo(username)
          .then(data => decorateProfile(data))
          .catch((err) => {
            alert(`${username} doesn't exist`);
          });
      } else {
        alert("Username is blank");
      }
    }
  });
  