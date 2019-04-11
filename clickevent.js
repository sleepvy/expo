var inventory = [0,0,0,0,0];

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
                document.getElementById("test").innerHTML = "<a-text value = '1' id = 'test'>";
                console.log(inventory);
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
                console.log(inventory);
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
                console.log(inventory);
            }
        });
}});