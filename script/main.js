$(document).ready(function () {
	$(".counter").each(function () {
		var $this = $(this),
			countTo = $this.attr("data-count");

		$({ countNum: $this.text() }).animate(
			{
				countNum: countTo,
			},

			{
				duration: 3000,
				easing: "linear",
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
				},
			}
		);
	});
});

// $(document).ready(function () {
// 	function updateCartAndCourseCard() {
// 		// Check if #cart has no child with class .course
// 		if ($("#cart .course").length === 0) {
// 			$("#cart").hide(); // Hide the cart
// 			$("#coursecard").removeClass("md:w-2/3").addClass("md:w-3/3");
// 		} else {
// 			$("#cart").show(); // Show the cart
// 			$("#coursecard").removeClass("md:w-3/3").addClass("md:w-2/3");
// 		}
// 	}

// 	// Initial check
// 	updateCartAndCourseCard();

// 	// Event delegation for dynamically added content
// 	$(document).on("DOMNodeInserted DOMNodeRemoved", "#cart", function () {
// 		updateCartAndCourseCard();
// 	});

// 	// $('#cart').append('<div class="course bg-white p-4 rounded shadow-md">Added Course</div>');
// 	// $('#cart').show(); // Show the cart after adding a course

// 	// $('#cart .course').first().remove();
// 	$(".buy-course").on("click", function () {
// 		// Extract data from the card
// 		const card = $(this).closest(".card");
// 		const imageUrl = card.data("image-url");
// 		const title = card.data("title");
// 		const price = card.data("price");

// 		// Decrease the counter by 1
// 		const counter = card.find(".course-seat .counter");
// 		let count = parseInt(counter.data("count"));
// 		if (count > 1) {
// 			count -= 1;
// 			counter.data("count", count).text(count);

// 			// Log data to the console
// 			addToCart(imageUrl, title, price);
// 		} else {
// 			// Display "Booked All" if seat count is already 0
// 			card.find(".course-seat").text("Booked All");
// 		}
// 	});
// 	function addToCart(imageUrl, title, price) {
// 		// You can customize this part to add the item to your cart
// 		// For now, it just logs the information to the console
// 		console.log("Added to Cart:");
// 		console.log("Title:", title);
// 		console.log("Price:", price, "TK");
// 		console.log("Image URL:", imageUrl);

// 		// You may also want to update the UI to reflect the added item

// 		updateCart();
// 	}
// 	$(".discard").each(function () {
// 		$(this).on("click", function () {
// 			// Remove the whole course with ".course"
// 			const course = $(this).closest(".course");
// 			course.remove();

// 			// Update the count of courses in the cart
// 			updateCart();
// 		});
// 	});

// 	updateCart();
// 	function updateCart() {
// 		// Get the count of courses in the cart
// 		const cartItemCount = $(".course").length;

// 		// Update the cart item number
// 		$(".cart-total-item").text(cartItemCount);

// 		// Sum the prices of all items in the cart
// 		let totalPrice = 0;
// 		$(".item-price").each(function () {
// 			var price = parseInt($(this).data("count"));
// 			totalPrice += price;
// 		});

// 		// Update the cart total price
// 		$(".cart-total-price").text(totalPrice);

// 		// You can add any additional logic here, such as updating other UI elements or making an AJAX request.
// 	}
// });
