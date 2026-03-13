const username = "selvarajjagan";

fetch(`https://api.github.com/users/${username}/repos`)
.then(response => response.json())
.then(data => {

const container = document.getElementById("repo-container");

data
.sort((a,b)=>b.stargazers_count-a.stargazers_count)
.slice(0,6)
.forEach(repo => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description available"}</p>
<a href="${repo.html_url}" target="_blank">View Repository</a>
`;

container.appendChild(card);

});

});
