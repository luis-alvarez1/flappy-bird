var game = new Phaser.Game(288, 512, Phaser.CANVAS, 'game_block');


game.state.add('menu', menu);
//TODO: solve 'play not defined' error 
game.state.add('play', play);
// game.state.add('GamoeOver', gameover);

game.state.start('menu');