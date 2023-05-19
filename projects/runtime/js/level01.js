var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = 400;
        sawBladeHitZone.y = 100;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);
        function createSawBlade (x, y) {
            createMyObstacle(100, 200); 
           var hitZoneSize = 25;
           var damageFromObstacle = 10;
           var myObstacle =
               game.createObstacle(hitZoneSize,
               damageFromeObstacle);
        
        obstacleImage.x = x;
        obstacleImage.y = y;

        game.addGameItem(myObstacle);

        var obstacleImage =
            draw.bitmap('img/sawblade.png');

        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -hitZoneSize;
        obstacleImage.y = -hitZoneSize;
               }
       function createCustom(x, y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle =
                game.createObstacle(hitZoneSize, damageFromObstacle);
                
                myObstalce.x =x;
                myObstacle.y = y;
                game.addGameItem(myObstacle);
                   }
                   var enemy = game.createGameItem("enemy", 25);
  var redSquare = draw.rect(50, 50, "red");
  redSquare.x = -25;
  redSquare.y = -25;
  enemy.addChild(redSquare);
  
  enemy.x = 400;
  enemy.y = groundY - 50;
  enemy.velocityX = 1;
  enemy.rotationalVelocity

  game.addGameItem(enemy);
 
  enemy.onPlayerCollision = function () {};
  function createEnemy(x, y){
      var enemy =
          game.createGameItem('enemy',80);
          var lynel =  
          draw.bitmap('im/enemy.png');
        lynel.x = -80;
        lynel.y =  -80;
        enemy.addChild(lynel);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -2;
        enemy.onPlayerCollision = function () {
             game.changeIntergrity9(-50);
             enemy.onProjectileCollision = 
             function() {
                game. increaseScore(100);
                enemy.fadeOut();
             }
        }
  }
  function createreward(x, y) {
    var reward =
        game.createGameItem('reward' ,32);
        var gem =
         draw.bitmap9('img/reward.png');
         gem.x = -32;
         gemm.y = -32;
         reward.addChild(gem);
         reward.x = x;
         reward.y = y;
         game.addGameItem(reward);
         reward.rotationalVelocity = 4;
         
         reward.onPlayerCollision =
         function() {
                game.changeIntergrity(25);
                game.increaseScore(300);
                reward.fadeOut();
         }
  }


  // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
