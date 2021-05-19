
import Tile from '/tile.js'

export default class Board {

    constructor() {
        this.tiles = [];
    }

    generateBoard(size) {
        var board = [];

        for(var i = 0; i < size; i++) {
            board.push(...this.generateRing(i, null))
        }

        //Make last row a border role
        board.push(...this.generateRing(i, "border"))

        return board
    }

    //1, 6, 12, 18
    //6 * d
    generateRing(ringIndex, tileType) {
        var startCord = [0, ringIndex, -ringIndex]
        var start = new Tile(0, ringIndex, -ringIndex, tileType)

        var ring = [];
        ring.push(start);
        var mover = ring[ring.length - 1]
        var offset;

        for(var i = 0; i < ringIndex; i++) {
            //Move E equal to length
            offset = Tile.getDirectionCoordinates('E')
            mover.x += offset[0];
            mover.y += offset[1];
            mover.z += offset[2];

            var t = new Tile(mover.x, mover.y, mover.z, tileType)
            ring.push(t)
        }

        for(var i = 0; i < ringIndex; i++) {
            //Move SE
            offset = Tile.getDirectionCoordinates('SE')
            mover.x += offset[0];
            mover.y += offset[1];
            mover.z += offset[2];

            var t = new Tile(mover.x, mover.y, mover.z, tileType)
            ring.push(t)
        }


        for(var i = 0; i < ringIndex; i++) {
            //Move SW
            offset = Tile.getDirectionCoordinates('SW')
            mover.x += offset[0];
            mover.y += offset[1];
            mover.z += offset[2];

            var t = new Tile(mover.x, mover.y, mover.z, tileType)
            ring.push(t)
        }


        for(var i = 0; i < ringIndex; i++) {
            //Move W equal to length
            offset = Tile.getDirectionCoordinates('W')
            mover.x += offset[0];
            mover.y += offset[1];
            mover.z += offset[2];

            var t = new Tile(mover.x, mover.y, mover.z, tileType)
            ring.push(t)
        }


        for(var i = 0; i < ringIndex; i++) {
            //Move NW
            offset = Tile.getDirectionCoordinates('NW')
            mover.x += offset[0];
            mover.y += offset[1];
            mover.z += offset[2];

            var t = new Tile(mover.x, mover.y, mover.z, tileType)
            ring.push(t)
        }

        for(var i = 0; i < ringIndex; i++) {
        //Move NE
            offset = Tile.getDirectionCoordinates('NE')
            mover.x += offset[0];
            mover.y += offset[1];
            mover.z += offset[2];

            var t = new Tile(mover.x, mover.y, mover.z, tileType)
            ring.push(t)
        }

        return ring
    }
  }