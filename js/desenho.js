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
			
			sphere.translateZ(12)
			sphere.translateY(-1);
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
				
			var animate = function () {
				requestAnimationFrame( animate );
	
				//sphere.rotation.x -= 0.05;

				renderer.render( scene, camera );
			};

			animate();