import Tile from '/tile.js'
import Board from '/board.js'

import { OrbitControls } from 'https://unpkg.com/three@0.119.1/examples/jsm/controls/OrbitControls.js';

export default class View {
    constructor(model) {
        this.model = model;
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera( window.innerWidth / - 15, window.innerWidth / 15, window.innerHeight / 15, window.innerHeight / -15, - 500, 1000); 

        this.camera.lookAt( 0, 0, 0 );
        this.camera.position.set( 0, 1000, 0 );
        this.scene.add(this.camera);

        const light = new THREE.PointLight( 0xff0000, 1, 100 );
        light.position.set( 50, 50, 50 );
        this.scene.add( light );



        this.setup();
    }

    setup() {
        //Initial setup
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );



        //TEMP MOVE LATER
        const controls = new OrbitControls( this.camera, renderer.domElement );

        //controls.update() must be called after any manual changes to the camera's transform
        controls.update();


        var board = new Board()
        var tiles = board.generateBoard(4)

        for(let index in tiles) {
            this.scene.add(tiles[index].tileMesh)
        }

        //Test SQUARE ROOT OF 27 =~ 5.2
        // this.scene.add(new Tile(0, 0, 0).tileMesh)
        // this.scene.add(new Tile(1, 0, -1).tileMesh)
        // this.scene.add(new Tile(0, 1, -1).tileMesh)
        // this.scene.add(new Tile(-1, 1, 0).tileMesh)
        // this.scene.add(new Tile(-1, 0, 1).tileMesh)
        // this.scene.add(new Tile(-1, 0, 1).tileMesh)
        // this.scene.add(new Tile(0, -1, 1).tileMesh)
        // this.scene.add(new Tile(1, -1, 0).tileMesh)



        // const geometry = new THREE.CylinderGeometry( 5, 5, 20, 6 );
        // const material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true} );
        // const cylinder = new THREE.Mesh( geometry, material );
        // cylinder.position.set(0, 0, 0)
        // cylinder.rotation.y = Math.PI / 2
        // this.scene.add( cylinder );

        

        renderer.render( this.scene, this.camera );


    }

    createMap() {

    }
  }