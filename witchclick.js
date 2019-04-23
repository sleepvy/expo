var statements = [
	"You were wandering in the wicked woods of the ATLAS building, and stumbled upon me. I need your help to ace my exams!",
	"Please collect: a puddle of tears, a shot of coffee, an ounce of hope, one Ch(egg), and a dash of exhaustion.",
	"To collect an item, tap the screen. Remember don't refresh the page, or you'll lose your progress!",
	"Ready to get started?",
	"Ready to get started?"
 ]
 var counter = 0;

function talk() {
	if (counter==4) {
		window.location.href = "https://creative.colorado.edu/~vyle7651/expo";
	}
	document.getElementById("text").innerHTML = statements[counter];
	counter+=1;
}