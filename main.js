var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_width = 30;
var block_height = 30;

var player_object = "";
var player_image_object = "";

function player_update() {
    fabric.image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_object(get_image) {
    fabric.image.fromURL(get_image, function(Img){
        player_image_object = Img;
        player_image_object.scaleToWidth(block_width);
        player_image_object.scaleToHeight(block_height);
        player_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image_object);
    });
}

