var THREE = require('three');

export default class Game {
  constructor() {
    this.renderer = null;
    this.camera = null;
    this.scene = null;

    this.material = null;
    this.mesh = null;
    this.geometry = null;
  }

  launch(idToChange, config) {
    console.log(THREE);
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    this.camera.position.z = 1;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#000000");
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById(idToChange).appendChild( this.renderer.domElement );
    return this;
  }

  startGame() {
    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    requestAnimationFrame(this.update());
  }

  update() {
    return timestamp => {
      this.mesh.rotation.x += (0.01);
      this.mesh.rotation.y += (0.02);
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.update());
    }
  }
}
