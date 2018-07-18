document.querySelector('#regbutton').addEventListener('click', function() {
    document.querySelector('.bg-modal').className = 'openWin';
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.openWin').className = 'closeWin';
});

