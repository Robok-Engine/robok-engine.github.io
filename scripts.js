async function fetchContributors() {
  const repo = 'Robok-Engine/Robok-Engine';

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/contributors`);

    if (!response.ok) {
      throw new Error(`Error:8: ${response.statusText}`);
    }

    const data = await response.json();

    const contributorsList = data.map(contributor => {
      return `<div class="contributor">
                <a href="${contributor.html_url}" target="_blank">
                  <img src="${contributor.avatar_url}" alt="${contributor.login}" width="40" height="40">
                  ${contributor.login}
                </a>
              </div>`;
    }).join('');

    document.getElementById('contributors').innerHTML = contributorsList;
  } catch (error) {
    console.error('Error:24:', error);
  }
}

fetchContributors();