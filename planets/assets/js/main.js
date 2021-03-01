(async () => {
  const response = await fetch('/api/planets');
  const data = await response.json();
  const planets = data.results.map(p => p.name).join('\n');
document.getElementById('planets-list').innerHTML = planets;
})();
