//escenario
const scene = new THREE.Scene();

let loader = new THREE.TextureLoader();

loader.load("imagenes/fondo.jpg", function (texture){
    scene.background=texture;
})

//camara
const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1,1000);

const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( render.domElement)

//luz
hlight = new THREE.AmbientLight(0xffffff,1)
hlight.position.set(1,1,1)
scene.add(hlight);

//objetos

const loader1 = new THREE.GLTFLoader();
loader1.load('../js/low_poly_3d/scene.gltf', function(gltf){
    calvo = gltf.scene.children[0];
    calvo.scale.set(5,5,5)
    scene.add(gltf.scene)
    calvo.position.x= 18
    calvo.position.y= -10
    calvo.position.z= -14
})

const loader2 = new THREE.GLTFLoader();
loader2.load('../js/fat_man_3d/scene.gltf', function(gltf){
    gordo = gltf.scene.children[0];
    gordo.scale.set(5,5,5)
    scene.add(gltf.scene)
    gordo.position.x= 5
    gordo.position.y=-10
    gordo.position.z=-14
    
    
}) 
const loader3 = new THREE.GLTFLoader();
loader3.load('../js/personaje_terminado_3d/scene.gltf', function(gltf){
    niño = gltf.scene.children[0];
    niño.scale.set(1,1,1)
    scene.add(gltf.scene)
    niño.position.x= -10
    niño.position.y=-5
    niño.position.z=-14
    
    
}) 
const loader4 = new THREE.GLTFLoader();
loader4.load('../js/dron/scene.gltf', function(gltf){
    dron = gltf.scene.children[0];
    dron.scale.set(1,1,1)
    scene.add(gltf.scene)
    dron.position.x= -50
    dron.position.y=10
    dron.position.z=-50
    
    
})
// const objetos = [loader1, loader2, loader3, loader4]
// const controls = new THREE.DragControls(objetos,camara,render.domElement)

const flyControls = new THREE.FlyControls(camara, render.domElement)
flyControls.movementSpeed = 50;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false;
flyControls.dragToLock = false;


//animacion
function animate (){
    requestAnimationFrame(animate);
    flyControls.update(0.5);
    render.render(scene,camara)

}
animate();






	
	
	



