import 'phaser';
import * as dat from 'dat.gui';
import { Graphics } from 'phaser';

export default class SimpleGame extends Phaser.Scene {
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private controls?: Phaser.Cameras.Controls.SmoothedKeyControl;
    private marker?: Phaser.GameObjects.Graphics;
    private minimap?: Phaser.Cameras.Scene2D.Camera;
    private keyPlus?: Phaser.Input.Keyboard.Key;
    private map?: Phaser.Tilemaps.Tilemap;
    private tileset?: Phaser.Tilemaps.Tileset;
    private platforms?: Phaser.Tilemaps.StaticTilemapLayer;

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

    loadingMap() {
        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('TuileSet', 'tiles');
        this.platforms = this.map.createStaticLayer('background', this.tileset, 0, 0);
        this.platforms.originX = 0;
        this.platforms.originY = 0;
    }

    initializeInputs() {
        this.input.setDefaultCursor('url(img/SC2-cursor.cur), pointer');
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keyPlus = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        const controlConfig = {
            camera: this.cameras.main,
            left: this.cursors.left,
            right: this.cursors.right,
            up: this.cursors.up,
            down: this.cursors.down,
            speed: 0.5,
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    }

    initializeCamera() {
        if (this.platforms) {
            const cam = this.cameras.main;
            cam.setBounds(0, 0, this.platforms.width, this.platforms.height);
            cam.setName("'main");
            cam.centerOn(0, 0);
        }
    }

    initializeMiniCam() {
        //  The miniCam is 400px wide, so can display the whole world at a zoom of 0.2
        this.minimap = this.cameras.add(100, 10, 100, 100).setZoom(0.02).setName('mini');
        this.minimap.setBackgroundColor(0x002244);
        this.minimap.x = 0;
        this.minimap.y = 0;
        this.minimap.scrollX = this.cameras.main.scrollX;
        this.minimap.scrollY = this.cameras.main.scrollY;
    }

    initializeGUI() {
        const gui = new dat.GUI();
        const cam = this.cameras.main;
        gui.addFolder('Camera');
        gui.add(cam, 'dirty').listen();
        gui.add(cam.midPoint, 'x').listen();
        gui.add(cam.midPoint, 'y').listen();
        gui.add(cam, 'scrollX').listen();
        gui.add(cam, 'scrollY').listen();
    }

    create() {
        this.loadingMap();

        this.initializeInputs();

        this.initializeCamera();

        this.initializeMiniCam();

        this.initializeGUI();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

    update() {
        if (!this.minimap) return;
        if (this.cursors?.left?.isDown) {
            this.cameras.main.scrollX -= 4;
            this.minimap.scrollX = this.cameras.main.scrollX;
        } else if (this.cursors?.right?.isDown) {
            this.cameras.main.scrollX += 4;
            this.minimap.scrollX = this.cameras.main.scrollX;
        }

        if (this.cursors?.up?.isDown) {
            this.cameras.main.scrollY -= 4;
            this.minimap.scrollY = this.cameras.main.scrollY;
        } else if (this.cursors?.down?.isDown) {
            this.cameras.main.scrollY += 4;
            this.minimap.scrollY = this.cameras.main.scrollY;
        }

        //this.controls?.update(delta);
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
