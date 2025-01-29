async function fetchContributors() {
  const token = process.env.GITHUB_TOKEN;
  const repo = 'Robok-Engine/Robok-Engine';

  try {
    const response = await fetch(`https://raw.githubusercontent.com/Robok-Engine/Robok-Engine/host/.github/contributors/contributors_github.json`, {
      headers: {
        'Authorization': `token ${token}`
      }
    });
    const data = await response.json();

    if (response.ok) {
      const contributorsList = data.map(contributor => {
        return `<div class="contributor"><a href="https://github.com/${contributor.login}" target="_blank">${contributor.login}</a></div>`;
      }).join('');

      const contributorsContainer = document.createElement('div');
      contributorsContainer.innerHTML = contributorsList;

      document.getElementById('contributors').appendChild(contributorsContainer);
    } else {
      console.error('Failed to fetch contributors:', data);
    }
  } catch (error) {
    console.error('Error fetching contributors:', error);
  }
}

fetchContributors();