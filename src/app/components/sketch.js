function sketch(p) {
  


    var canvasDiv = document.getElementById('test');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    //console.log(width,height);



    p.setup = function () {
        p.createCanvas(width,height );
        p.background('white');
        p.img = p.loadImage('/gomme.png');
        p.button1 = p.createButton("Enregistrer sur l'appareil");
        p.button1.position(width*0.75,height*0.1);
        p.button1.mouseClicked(p.exporter);
        p.c = "#000000";
        p.strokeWeight(10)    
    };

    

    p.exporter = function () {
        p.save("monPortraitDeTitien-AVA-BACCHANIGHT2023.jpg")
    }

    
    p.draw = function() {
      
        //console.log(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
      
        p.image(p.img,width*0.1-20, height-height*0.05-20, 40, 40);
        if (p.mouseIsPressed) {
            p.stroke(p.c);
              p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
      
        p.noStroke();
        //draw the first button
        p.fill("#000000");
        p.ellipse(width*0.3, height-height*0.05, 40, 40);
      
        //draw the second button
        p.fill("#DC7753");
        p.ellipse(width*0.5, height-height*0.05, 40, 40);
    
        //draw the  second button
        p.fill("#71A9BB");
        p.ellipse(width*0.7, height-height*0.05, 40, 40);
    
        //draw the  second button
        p.fill("#D9C5AD");
        p.ellipse(width*0.9, height-height*0.05, 40, 40);
      }
     
      
      
      //this will run whenever the mouse is pressed
      p.mousePressed = function() {
        if (p.mouseX > width*0.3-20 && p.mouseX < width*0.3+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
          //set the variables to random values
          p.c = "#000000";
          p.strokeWeight(10)
        }
        if (p.mouseX > width*0.5-20 && p.mouseX < width*0.5+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
          //set the variables to random values
          p.c = "#DC7753";
          p.strokeWeight(10)
        }
        if (p.mouseX > width*0.7-20 && p.mouseX < width*0.7+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
            //set the variables to random values
            p.c = "#71A9BB";
            p.strokeWeight(10)
          }
          if (p.mouseX > width*0.9-20 && p.mouseX < width*0.9+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
            //set the variables to random values
            p.c = "#D9C5AD";
            p.strokeWeight(10)
          }

          if (p.mouseX > width*0.1-20 && p.mouseX < width*0.1+20 && p.mouseY > height-height*0.05 - 20 && p.mouseY < height-height*0.05 + 20) {
            //set the variables to random values
            p.c = "white";
            p.strokeWeight(40)
          }


      };

};

export default sketch



















