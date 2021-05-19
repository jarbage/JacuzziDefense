export default class Tile {
    constructor(x, y, z, tileType) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.tileType = tileType;

        //Radius 6; Height 20;
        const geometry = new THREE.CylinderGeometry( 6, 6, 20, 6 );
        var color
        if(this.tileType == 'border'){
            color = 0x787878
            ;
        } else {
            color = 0x008000
        }
        const material = new THREE.MeshBasicMaterial( {color: color, wireframe: true} );
        this.tileMesh = new THREE.Mesh( geometry, material );
        this.draw();
    }

    static getDirectionCoordinates(direction) {
        switch(direction) {
            case "NW":
                return [0, 1, -1]
            break;

            case "NE":
                return [1, 0, -1]
            break;

            case "E":
                return [1, -1, 0]
            break;

            case "SE":
                return [0, -1, 1]
            break;

            case "SW":
                return [-1, 0, 1]
            break;

            case "W":
                 return [-1, 1, 0]
            break;
            
            default:
                return null
        }
    }


    getCoordinates() {
        var sideLength = 6
        var new_x
        var new_y
        var b

        new_y = 3/2 * sideLength * this.z
        b = (2/3) * (new_y / sideLength)
        new_x = Math.sqrt(3) * sideLength * (this.z/2 + this.x)

        return [new_x, 0, new_y]
    }

    draw() {
        let coordinates = this.getCoordinates()
        this.tileMesh.position.set(coordinates[0], 0, coordinates[2])
    }

   
  }