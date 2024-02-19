function main() {
    var x = document.getElementById("first");
    var y = document.getElementById("second");
    var z = document.getElementById("third");
    var n = document.getElementById("fourth");

    x.addEventListener("click", function () {
        x.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    });

    y.addEventListener("click", function () {
        y.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    });

    z.addEventListener("click", function () {
        z.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    });

    n.addEventListener("click", function () {
        n.style.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    });
}

main();