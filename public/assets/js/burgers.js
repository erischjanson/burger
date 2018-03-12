$(".create-form").on("submit", function(event){
	event.preventDefault();

	var newBurger = {
		name: $("#burger").val().trim()
	};

	$.ajax("/api/burgers", {
		type:"POST",
		data: newCat
	}).then(function(){
		console.log("Burger successfully added");
		location.reload();
	})
})


