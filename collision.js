export function checkCollision(bird, pipes, ground) {
  return checkCeilingCollision(bird)
    || checkGroundCollision(bird, ground)
    || checkPipeCollision(bird, pipes);
}

function checkCeilingCollision(bird) {
  return bird.y - bird.hitboxHeight / 2 <= 0;
}

function checkGroundCollision(bird, ground) {
  return bird.y + bird.hitboxHeight / 2 >= ground.y;
}

function checkPipeCollision(bird, pipes) {
  return pipes.some(pipe =>
    checkTopPipeCollision(bird, pipe) ||
    checkBottomPipeCollision(bird, pipe)
  );
}

function checkTopPipeCollision(bird, pipe) {
  return bird.y - bird.hitboxHeight / 2 < pipe.top &&
    bird.x - bird.hitboxWidth / 2 < pipe.x + pipe.width &&
    bird.x + bird.hitboxWidth / 2 > pipe.x;
}

function checkBottomPipeCollision(bird, pipe) {
  return bird.y + bird.hitboxHeight / 2 > pipe.bottom &&
    bird.x - bird.hitboxWidth / 2 < pipe.x + pipe.width &&
    bird.x + bird.hitboxWidth / 2 > pipe.x;
}