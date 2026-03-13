const username = "selvarajjagan";

fetch(`https://api.github.com/users/${username}/repos`)
.then(res => res.json())
.then(data => {

const container = document.getElementById("repo-container");

data.slice(0,6).forEach(repo => {

const card = document.createElement("div");

card.className="card";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description"}</p>
<a href="${repo.html_url}" target="_blank">View Project</a>
`;

container.appendChild(card);

});

});
