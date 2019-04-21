document.body.innerHTML = '';

(function drawDiv (color, keyUp, keyDown, keyLeft, keyRight) {
    var player_el = document.createElement('div');
    player_el.style.height = '100px';
    player_el.style.width = '100px';
    player_el.style.position = 'absolute';
    player_el.style.backgroundColor = color;
    player_el.style.top = '0px';
    player_el.style.left = '0px';

    var keyState = {
        up: false,
        down: false,
        left: false,
        right: false
    };

    var position = {
       top: 0,
       left: 0  
    };

    document.body.appendChild(player_el);


    document.addEventListener('keydown', function(event) {
        if (event.code === keyDown) {
            keyState.down = true;
        } else if (event.code === keyUp) {
            keyState.up = true;
        } else if (event.code === keyLeft) {
            keyState.left = true;
        } else if (event.code === keyRight) {
            keyState.right = true;
        }
    })

    document.addEventListener('keyup', function(event) {
        console.log(event);
        if (event.code === keyDown) {
            keyState.down = false;
        } else if (event.code === keyUp) {
            keyState.up = false;
        } else if (event.code === keyLeft) {
            keyState.left = false;
        } else if (event.code === keyRight) {
            keyState.right = false;
        }
    })


    var actionInterval = setInterval(function() {
        if (keyState.up) {
            position.top--;
        }

        if (keyState.down) {
            position.top++;
        }
        
        if (keyState.left) {
            position.left--;
        }

        if (keyState.right) {
            position.left++;
        }
    });


    var drawInterval = setInterval(function() {
        player_el.style.top = position.top + 'px';
        player_el.style.left = position.left + 'px';
    }, (1000/30));
})("yellow", 'KeyW', 'KeyS', 'KeyA', 'KeyD');

// clearInterval(drawInterval);
