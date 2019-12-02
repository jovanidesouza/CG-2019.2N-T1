//alert('Use as setas + PgUp e PgDn para movimentar o pokemon');
var scene = new THREE.Scene();

			var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
			camera.position.set( 0, 0, 15 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			renderer.setClearColor (0x20bfff, 1);
			
			var fundo = new THREE.TextureLoader().load( 'textures/floor.jpg' );
			scene.background = fundo;
			//Scene, camera , renderer //
					
	
		
			var geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
			var texture = new THREE.TextureLoader().load( 'textures/bola.PNG' );
			var material = new THREE.MeshBasicMaterial( { map: texture } );
			var sphere = new THREE.Mesh( geometry, material );
			
			sphere.translateZ(5)
			sphere.translateY(-2);
			sphere.rotateY(-1.5);
			sphere.rotateX(0.1);
			sphere.rotateZ(0.6);
			scene.add( sphere );
			
			var xSpeed = 0.05;
			var ySpeed = 0.05;
			var zSpeed = 0.05;
			
			document.addEventListener("keydown", onDocumentKeyDown, false);
			function onDocumentKeyDown(event) {
				var keyCode = event.which;
				if (keyCode == 39) {
					sphere.position.x += xSpeed;
				} else if(keyCode == 37) {
					sphere.position.x -= xSpeed;
				} else if(keyCode == 38) {
					sphere.position.y += ySpeed;
				} else if(keyCode == 40){
					sphere.position.y -= ySpeed;
				} else if(keyCode == 34) {
					sphere.position.z += zSpeed;
				} else if(keyCode == 33){
					sphere.position.z -= zSpeed;
				} 
			};
			
			var start = 5;
			var altura = -2;
			var sentido = 1
			
				
			var animate = function () {
				requestAnimationFrame( animate );
	
				//sphere.rotation.x -= 0.05;
				
				if(start < 11.5){
					start += 0.05;
					sphere.position.z = start;
					//sphere.rotation.x -= 0.05;
				}
				
				if (sentido == 1){
					altura += 0.03;
					sphere.position.y = altura;
					if(altura >= 0){
						sentido = -1;
						
					}
				}
				if (sentido == -1){
					altura -= 0.03;
					sphere.position.y = altura;
					if(altura <= -2){
						sentido = 1;
						
					}
				}
				

				renderer.render( scene, camera );
			};

			animate();