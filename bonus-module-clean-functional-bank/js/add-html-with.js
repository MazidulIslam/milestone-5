function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '10px';
    player.style.margin = '6px';
    player.style.padding = '8px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // })

    // using event bulling 

}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h3 class="player-name">New player</h3>
                <p class="text">Ratione nemo temporibus dolores, laudantium aut minima molestiae fugiat at vero vitae in iusto ex aperiam repellendus perspiciatis illum! Dignissimos.</p>`;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
}

// document.querySelector('#players .player:first-child') = we can use query selector for use complex css;
// document.querySelectorAll('#player .player')


// bubbling 
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'red';
        // event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})