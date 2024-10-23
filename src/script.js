let monsters = {};

fetch('../data/monsters.json')
  .then(response => response.json())
  .then(data => {
    monsters = data;
  })
  .catch(error => console.error('Error loading JSON:', error));

function randomMonsterName(jsonMonsters) {
    return {
        "epithet": jsonMonsters.epithets[Math.floor(Math.random() * jsonMonsters.epithets.length)][0], 
        "name": jsonMonsters.names[Math.floor(Math.random() * jsonMonsters.names.length)][0]};
}

function onButtonClick() {
    const monster = randomMonsterName(monsters);
    console.log(monster);
    document.getElementById('epithet').textContent = monster.epithet;
    document.getElementById('name').textContent = monster.name;
}