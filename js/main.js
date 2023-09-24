import games from './data.json' assert {type: 'json'}

let item = (item) => document.querySelector(item)
let items = (item) => document.querySelectorAll(item)

//? Auto-Complete
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
                item('#list').innerHTML += game_card(game)
            })
        }
    }
    
    cards_flipping()
})

//? Flipping Card
let cards_flipping = () => items('.game-card').forEach(card => {
    card.addEventListener('focus', (e) => {
        items('.game-card').forEach(item => {
            item.classList.remove('focus')
        })
    
        e.target.classList.add('focus')
    })

    card.addEventListener('blur', (e) => {e.target.classList.remove('focus')})
})