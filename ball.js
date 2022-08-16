function setup() {
    createCanvas(900, 500, WEBGL);
    background(0);
    colorMode(RGB);
  }
  

  function draw() {
    background(0);
    //move your mouse to change light direction
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    ambientMaterial(255);
    directionalLight(104, 104, 255, -dirX, -dirY, -1);
    noStroke();
    sphere(200, 200, 100);
  }





  /*function draw() {
    // Light ball 
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
  
    ambientLight(100);
    ambientMaterial (255);
    directionalLight(28, 255, 236, 0.25, 0.25, 0);//azzuro
    pointLight(255, 255, 255, locX, locY, 250);


    directionalLight(255, 243, 75, 10, 10, 10);
  
    translate(0, 0, 0);
    directionalLight(104, 105, 171, -3, -3, -2); //viol//

    /*pointLight(200, 243, 75, 140, 160, 144); //rosa a destra basso// 
    spotLight(28, 255, 236, 600, 550, 600, 0, 0, -1, PI/1, 5);

    sphere(200, 100, 100);
    lights (255);
    push();
    pop();
  
  }*/
  