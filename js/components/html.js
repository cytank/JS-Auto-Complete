const game_card = (item) => {return `
<div class="col-12 col-md-6 game-card pop-in-custom" tabindex="0" style="--pop-in: -10px;">
<div class="content">
    <div class="front">
        <div class="image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <h3 class="game-title">${item.name}</h3>
    </div>
    <div class="back">
        <div class="text">
            <p>Cost: <b>${item.cost}</b></p>
            <p>${item.info}</p>
        </div>
    </div>
</div>
</div>
`}