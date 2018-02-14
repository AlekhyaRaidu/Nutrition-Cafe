<script>
function bf() {
	var html= "<center>"+
	"<form >"+
"<input type='checkbox' name='vehicle' value='Bike'> <img src='images/veggie-delite.jpg'><br>veggie-delite<br>"+
"<input type='checkbox' name='vehicle' value='Car'><img src='images/carved turkey.jpg'><br>carved-turkey <br><br>"+
"<input type='checkbox' name='vehicle' value='Car'> <img src='images/avocado-deviled.eggs.jpg' height='160px' width='230px'><br>Avocado-delived eggs<br>"+
"<button > Add to cart </button>"
"</form>"+"</center>" ;
    document.getElementById("display").innerHTML = html;
	return cal1();
}
function lunch() {
	var html= "<center>" +
	"<form >"+
"<input type='checkbox' name='vehicle' value='Bike'><img src='images/hummus-platter.jpg' height='170' width='170'><br><p class='1' >Hummus-platter</P> <br>"+
"<input type='checkbox' name='vehicle' value='Car'><img src='images/crunchy-tuna-wrap.jpg' height='170' width='170'><br>Crunchy-Tuna Wrap<br>"+
"<input type='checkbox' name='vehicle' value='Car'><img src='images/bf1.jpg' height='170' width='170'><br>Turkey Delite<br>"+
"<button onClick='cal2()'> Add to cart </button>"
"</form>"+"</center>" ;
    document.getElementById("display").innerHTML = html;
}
function dinner() {
	var html= "<center>"+
	"<form >"+
"<input type='checkbox' name='vehicle' value='Bike'><img src='images/tuna-salad.jpg' height='170' width='170'><br>Tuna Salad<br>"+
"<input type='checkbox' name='vehicle' value='Car'><img src='images/donuts.jpg' height='170' width='170'><br>Krispy Kremey Donuts<br>"+
"<button onClick='cal3()'> Add to cart </button>"
"</form>" + "</center>";
    document.getElementById("display").innerHTML = html;
}
function snacks() {
	var html= "<center>"+
	"<form >"+
"<input type='checkbox' name='vehicle' value='Bike'><img src='images/avacado-chips.jpeg' height='170' width='170'><br>Avocado-Chips<br>"+
"<input type='checkbox' name='vehicle' value='Car'><img src='images/choco-muffins.jpg' height='170' width='170'><br>Choco-Muffins<br>"+
"<button > Add to cart </button>"
"</form>" + "</center>" ;
    document.getElementById("display").innerHTML = html;
}
 
 function cal1()
 {
	 document.getElementById("cal").innerHTML = "hey";
	 
 }
</script>