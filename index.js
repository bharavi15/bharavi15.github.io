window.onload = function() {
    fetch('https://mc3xepweq4y6sfw4yswnq2izke0hyvtz.lambda-url.ap-south-1.on.aws/count/bharavi15')
    .then(function(response) {
        return response.json();
    }).then(function(response){
        document.getElementById('visitorCount').innerText = '#'+response.value
    })
}