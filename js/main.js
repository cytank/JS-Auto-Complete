import games from './data.json' assert {type: 'json'}
let item = (item) => document.querySelector(item)

item('#name').addEventListener('input', (e) => {
    let games_array = []

    // Filter games by input
    games.forEach(game => {
        if(game.name.startsWith(e.target.value.toLowerCase())){
            games_array.push(game)
        }
    });
    
    // Empty old list
    item('#list').innerHTML = ''

    // Rewrite new one to html
    if(e.target.value.length == 0){
        return
    } else{
        if(games_array.length == 0){
            item('#list').innerHTML = 'No games found'
        } else{
            games_array.forEach(game => {
                item('#list').innerHTML += `
                <li>${game.name}</li>
                `
            })
        }
    }
    
})