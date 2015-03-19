<!DOCTYPE html>

<head>
<link href='https://fonts.googleapis.com/css?family=Poller+One' rel='stylesheet' type='text/css'>
<script src="/assets/jquery.js"></script>
<style>

.robot {
  position: relative;
  left: 200px;
}

.beep {
  width: 5px;
  height: 0;
  border: 5px solid transparent;
  border-top: 10px solid #777;
  border-bottom: 80px solid #888;
  position: relative;
  left: 140px;
}

@keyframes blink {
  50% {
    background: radial-gradient(circle, red 15%, transparent 40%), #cc5;
  }
}
@-webkit-keyframes blink {
  50% {
    background: -webkit-radial-gradient(circle, red 15%, transparent 40%), #cc5;
  }
}
@-moz-keyframes blink {
  50% {
    background: -moz-radial-gradient(circle, red 15%, transparent 40%), #cc5;
  }
}

.laser {
  animation: blink .5s infinite;
  -webkit-animation: blink .5s infinite;
  -moz-animation: blink .5s infinite;
}
.brain {
  background: radial-gradient(circle, white 15%, transparent 40%), #cc5;
  background: -moz-radial-gradient(circle, white 15%, transparent 40%), #cc5; 
  background: -webkit-radial-gradient(circle, white 15%, transparent 40%), #cc5;
  background-size: 75px 150px;
  height: 150px;
  width: 150px;
  border-radius: 60px 60px 10px 10px;
  border-bottom: 40px solid #666;
  position: relative;
  left: 70px;
}
.torso {
  height: 0;
  width: 140px;
  border-top: 300px solid #bc6;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
  border-radius: 20px 20px 100px 100px;
}
.left {
  font-family: 'Poller One', verdana, arial, sans-serif;
  font-weight: bold;
  font-size: 250px;
  color: #666;
  transform: rotate(200deg);
  -webkit-transform: rotate(200deg);
  -moz-transform: rotate(200deg);
  position: relative;
  top: -320px;
  left: -190px;
  z-index: -1;
}
.right {
  font-family: 'Poller One', verdana, arial, sans-serif;
  font-weight: bold;
  font-size: 250px;
  color: #666;
  transform: scaleY(-1) rotate(20deg);
  -webkit-transform: scaleY(-1) rotate(20deg);
  -moz-transform: scaleY(-1) rotate(20deg);
  position: relative;
  top: -620px;
  left: 190px;
  z-index: -1;
}
.foot {
  height: 40px;
  width: 40px;
  background: #ccc;
  border-radius: 40px;
  border: 15px solid #999;
  position: relative;
  left: 110px;
  top: -10px;
  z-index: -1;
}
</style>
</head>

<body>

<div class="robot">
  <div class="beep"></div>
  <div class="brain"></div>
  <div class="torso">
    <div class="left">j</div>
    <div class="right">j</div>
  </div>
  <div class="foot"></div>
</div>

<button class="flash">laser eyes on/off</button>

<script>
$(".flash").click(function () {
  $(".brain").toggleClass("laser");
});
</script>

</body>