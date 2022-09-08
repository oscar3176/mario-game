


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_collect_coin = loadSound("coin.wav");
	game_over = loadSound("gameover.wav");
	mario_kill_enemy = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on('pose', gotPoses);
  }
  
  function draw() {
	game();
  }
  
  function modalLoaded() {
	console.log("Modal Loaded");
  }
  
  function gotPoses(results) {
	if (results.length > 0) {
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }

   