import 'phaser';
import { Graphics } from 'phaser';

export default class SimpleGame extends Phaser.Scene {
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    private controls: Phaser.Cameras.Controls.SmoothedKeyControl | undefined;
    private marker: Phaser.GameObjects.Graphics | undefined;

    constructor() {
        super('warhammer');
    }

    preload() {
        this.load.image('background', 'img/background.png');
        // At last image must be loaded with its JSON
        //this.load.atlas('player', 'assets/images/kenney_player.png','assets/images/kenney_player_atlas.json');
        this.load.image('tiles', 'img/tileset.png');
        // Load the export Tiled JSON
        this.load.tilemapTiledJSON('map', 'tilemaps/map1.json');
    }

    create() {
        // Definiting background image
        //const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
        //backgroundImage.setScale(200, 0.8);

        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('TuileSet', 'tiles');
        const platforms = map.createStaticLayer('background', tileset, 0, 400);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.setDefaultCursor('url(img/SC2-cursor.cur), pointer');
    }
    update() {
        if (this.cursors?.left?.isDown) {
            this.cameras.main.x -= 4;
        } else if (this.cursors?.right?.isDown) {
            this.cameras.main.x += 4;
        }

        if (this.cursors?.up?.isDown) {
            this.cameras.main.y -= 4;
        } else if (this.cursors?.down?.isDown) {
            this.cameras.main.y += 4;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    width: 800,
    height: 600,
    scene: SimpleGame,
};

const game = new Phaser.Game(config);
