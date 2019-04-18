var inventory = [0, 0, 0, 0, 0];

function checkInventory() {
    var finished = true;
    for (i = 0; i < 5; i++) {
        if (inventory[i] == 0) {
            finished = false;
        }
    }
    if (finished) {
        console.log("You Finished!");
    }
}

AFRAME.registerComponent('accepts-clicks', {
    init: function () {
        this.el.addEventListener('touchend', handleClickEvent);
        this.el.addEventListener('click', handleClickEvent);
    }
});

function handleClickEvent() {
    for (i = 0; i < 5; i++) {
        var marker = document.querySelector("#animated-marker" + i);
        var aEntity = document.querySelector("#click" + i);

        if (marker && marker.object3D.visible) {
            const scale = aEntity.getAttribute('scale');
            Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
            aEntity.setAttribute('scale', scale);
            inventory[i] = 1;
            colorBox(i);
            console.log(inventory);
            checkInventory();
           
        }
    }
}

function colorBox(i) {
    document.getElementById("item" + (i + 1)).style.backgroundColor = "black";
}
