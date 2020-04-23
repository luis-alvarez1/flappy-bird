var menu = {
    preload: function() {
        game.stage.backgroundColor = '#fff';
        game.load.image('main', 'assets/img/message.png');

    },
    create: function() {
        this.main = this.add.button(game.width / 2, game.height / 2, 'main', this.startGame, this);
        this.main.anchor.setTo(0.5);

        this.startText = game.add.text(game.width / 2, game.height / 6, "CLICK TO START", { font: 'bold 24px helvetica', fill: 'black', align: 'center' });
        this.startText.anchor.setTo(0.5);
    },

    startGame: function() {
        this.state.start('play');
    }
};