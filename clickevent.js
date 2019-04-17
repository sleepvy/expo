var inventory = [0,0,0,0,0];

    function checkInventory(){
        var finished = true;
        for (i=0;i<5;i++)
        {
            if (inventory[i]==0)
            {
                finished =false;
            }
        }
        if (finished)
        {
            console.log("You Finished!");
        }
    }

AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker0 = document.querySelector("#animated-marker0");
        const aEntity0 = document.querySelector("#click0");

        // every click, we make our model grow in size :)
        animatedMarker0.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity0 && intersectedElement === aEntity0) {
                const scale = aEntity0.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity0.setAttribute('scale', scale);
                inventory[0]=1;
                colorBox0();
                document.getElementById("test").innerHTML = "<a-text value = '1' id = 'test'>";
                console.log(inventory);
                checkInventory();
            }
        });



        


        const animatedMarker1 = document.querySelector("#animated-marker1");
        const aEntity1 = document.querySelector("#click1");

        // every click, we make our model grow in size :)
        animatedMarker1.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity1 && intersectedElement === aEntity1) {
                const scale = aEntity1.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity1.setAttribute('scale', scale);
                inventory[1]=1;
                colorBox1();
                console.log(inventory);
                checkInventory();
            }
        });


        //


        //


        const animatedMarker2 = document.querySelector("#animated-marker2");
        const aEntity2 = document.querySelector("#click2");

        // every click, we make our model grow in size :)
        animatedMarker2.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity2 && intersectedElement === aEntity2) {
                const scale = aEntity2.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity2.setAttribute('scale', scale);
                inventory[2]=1;
                colorBox2();
                console.log(inventory);
                checkInventory();
            }
        });


        const animatedMarker3 = document.querySelector("#animated-marker3");
        const aEntity3 = document.querySelector("#click3");

        // every click, we make our model grow in size :)
        animatedMarker3.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity3 && intersectedElement === aEntity3) {
                const scale = aEntity3.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity3.setAttribute('scale', scale);
                inventory[3]=1;
                colorBox3();
                console.log(inventory);
                checkInventory();
            }
        });



        const animatedMarker4 = document.querySelector("#animated-marker4");
        const aEntity4 = document.querySelector("#click4");

        // every click, we make our model grow in size :)
        animatedMarker4.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity4 && intersectedElement === aEntity4) {
                const scale = aEntity4.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity4.setAttribute('scale', scale);
                inventory[4]=1;
                colorBox4();
                console.log(inventory);
                checkInventory();
            }
        });
}});


function colorBox0() {
    document.getElementById("item1").style.backgroundColor = "black";
}

function colorBox1() {
    document.getElementById("item2").style.backgroundColor = "black";
}

function colorBox2() {
    document.getElementById("item3").style.backgroundColor = "black";
}

function colorBox3() {
    document.getElementById("item4").style.backgroundColor = "black";
}

function colorBox4() {
    document.getElementById("item5").style.backgroundColor = "black";
}