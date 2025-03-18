<script>
window.alert("I yearn for the feast");
let box = document.getElementById("box");
box.innerHTML = "<p>this is inside the div. cool right</p>";
box.style.color = "blue";

let button = document.getElementById("ClickMe");
</script>

let header = document.getElementsByTagName("hi")[0]; //get first element

header.onmouseover = function() {
header.computedStyleMap.color ='red'
}