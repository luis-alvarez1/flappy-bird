var game = {

    preload: function() {
        game.load.image('bg', '../assets/img/background-day.png');
        game.load.spritesheet('bird', '../assets/img/spritesheet-blue.png');
        game.load.image('pipe', '../assets/img/pipe-green.png');
        game.forceSingleUpdate = true;

    },

    create: function() {
        this.bg = game.add.tileSprite(0, 0, 288, 512, 'bg');
    },

    update: function() {

    }
};