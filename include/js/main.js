( function( $ ) {
	"use strict";
	$(".cta-box").tilt({
		maxTilt: 15,
		perspective: 1400,
		easing: "cubic-bezier(.03,.98,.52,.99)",
		speed: 1200,
		glare: true,
		maxGlare: 0.2,
		scale: 1.04
	});
}( jQuery ) );


const resetButtons = document.querySelectorAll('.reset-btn');

resetButtons.forEach(button => {
	button.addEventListener('click', function(event) {
		event.preventDefault();

		// Target the parent form of the clicked button
		const parentForm = button.closest('form');
		parentForm.reset();
	});
});


var slickCarousel = $('.slider-vertical');
slickCarousel.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    dots: false,
    centerPadding: '50px',
    arrows: false,
    // prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
    // nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
    /* responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 639,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
            }
        }
    ] */
});


//mouse wheel
slickCarousel.mousewheel(function(e) {
e.preventDefault();
    if (e.deltaY < 0) {
        $(this).slick('slickNext'); 
    }
    else {
        $(this).slick('slickPrev');
    }
});

$('.counter').counterUp({
	delay: 10,
	time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');



$(document).ready(function() {
	$('#blog-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		center: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		responsive:{0:{items:1,},600:{ items:2,},1000:{items:4,}}
	});

	$('#link-blog-filter a').on('click', function(e) {
		e.preventDefault();
		const filterValue = $(this).data('filter');
		$('#link-blog-filter a').removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		filterblogs(filterValue);
	});

	function filterblogs(filterValue) {
		const blogItems = document.querySelectorAll('#blog-carousel-items .blog-item'); // Select all items
		const blogs = []; // Empty array to store blog objects

		blogItems.forEach(item => {
			const blogCategory = item.dataset.category; // Extract category from data attribute
			const blogTitle = item.querySelector('.blog-title').textContent.trim();
			const blogImage = item.querySelector('.blog-box>img').src; // Extract image path
			const blogMore = item.querySelector('.blog-box').href;
			blogs.push({ blogCategory, blogTitle, blogImage, blogMore }); // Create object and push to array
		});
		// console.log(blogs);

		const filteredblogs = filterValue === ''
			? blogs
			: blogs.filter(blog => blog.blogCategory === filterValue);

		$('#blog-carousel').trigger('destroy.owl.carousel').empty();

		filteredblogs.forEach(blog => {
			$('#blog-carousel').append(`
				<div class="blog-item" data-category="${blog.blogCategory}">
					<a href="${blog.blogMore}" class="blog-box">
						<span class="blog-title">${blog.blogTitle}</span>
						<div class="overlay"></div>
						<img src="${blog.blogImage}" class="w-100" alt="${blog.blogTitle}">
					</a>
				</div>
			`);
		});

		$('#blog-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			center: true,
			autoplay: true,
			autoplayHoverPause: true,
			dots: false,
			navText: [ '<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>' ],
			responsive:{0:{items:1,},800:{ items:2,},1000:{items:4,}}
		});
	}

	// Initially show all blogs
	filterblogs('');
});



$(document).ready(function() {
	$('#card-carousel-1').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		responsive:{0:{items:1,},600:{ items:2,},1000:{items:3,}}
	});

	$('#link-filter-1 a').on('click', function(e) {
		e.preventDefault();
		const filterValue = $(this).data('filter');
		$('#link-filter-1 a').removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
		filterCards1(filterValue);
	});

	function filterCards1(filterValue) {
		const cardItems = document.querySelectorAll('#card-carousel-1-items .item'); // Select all items
		const cards = []; // Empty array to store card objects

		cardItems.forEach(item => {
			const cardName = item.querySelector('.card-name').textContent.trim();
			const category = item.dataset.category; // Extract category from data attribute
			const label = item.dataset.label; // Extract label from data attribute
			const cardID = item.querySelector('.product-card').dataset.productId;
			const cardBank = item.querySelector('.card-bank').textContent.trim();
			const cardType = item.querySelector('.card-type').textContent.trim();
			const cardFees = item.querySelector('.card-fees').textContent.trim();
			const cardMore = item.querySelector('.card-link').href;
			const cardWhy = item.querySelector('.card-why-desc').textContent.trim();
			const cardApply = item.querySelector('.card-apply').href;
			const image = item.querySelector('.card-img>img').src; // Extract image path
			cards.push({ cardName, category, label, cardID, image, cardBank, cardType, cardFees, cardMore, cardWhy, cardApply }); // Create object and push to array
		});
		//console.log(cards);

		const filteredcards = filterValue === ''
			? cards
			: cards.filter(card => card.category === filterValue);

		$('#card-carousel-1').trigger('destroy.owl.carousel').empty();

		filteredcards.forEach(card => {
			$('#card-carousel-1').append(`
				<div class="item has-label" data-category="${card.category}" data-label="${card.label}">
					<div class="card-box product-card" data-product-id="${card.cardID}">
						<div class="card-img"><img src="${card.image}" class="product-image" alt="${card.cardName}"></div>
						<div class="card-details">
							<div class="card-name product-name">${card.cardName}</div>
							<div class="card-bank">${card.cardBank}</div>
							<div class="card-type">${card.cardType}</div>
							<div class="fees-more">
								<div class="card-fees">${card.cardFees}</div>
								<a class="card-link" href="${card.cardMore}">More Details</a>
							</div>
							<div class="card-why">
								<div class="card-why-title">why you’ll like it:</div>
								<div class="card-why-desc">${card.cardWhy}</div>
							</div>
						</div>
						<div class="card-actions">
							<a class="card-apply my-btn" href="${card.cardApply}">Apply Now</a>
							<button class="incard-compare-btn compare-link">Compare</button>
						</div>
					</div>
				</div>
			`);
		});

		$('#card-carousel-1').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			autoplay: true,
			autoplayHoverPause: true,
			dots: false,
			navText: [ '<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>' ],
			responsive:{0:{items:1,},800:{ items:2,},1000:{items:3,}}
		});
	}

	// Initially show all cards
	filterCards1('');
});


$(document).ready(function() {
	$("#offers-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
		dots: true,
		responsive:{0:{items:1,},1000:{items:1,},1200:{items:2,}}
	});

	$('#bank-filter').on('change', function() {
		const selectedBank = $(this).val();
		filterOffers(selectedBank);
	});

	function filterOffers(selectedBank) {
		const offerItems = document.querySelectorAll('#offers-carousel-items .offer-item'); // Select all items
		const offers = []; // Empty array to store card objects

		offerItems.forEach(item => {
			const bankSelected = item.dataset.bank;
			const modalId = item.querySelector('.offer-box').dataset.bsTarget;
			const bankLogo = item.querySelector('.latest-offer-img>img').src;
			const offerType = item.querySelector('.latest-offer-type').textContent.trim();
			const bankName = item.querySelector('.bank-name').textContent.trim();
			const offerValid = item.querySelector('.offer-valid').textContent.trim();
			const offerDesc = item.querySelector('.offer-desc>span').textContent.trim();
			offers.push({ bankSelected, modalId, bankLogo, offerType, bankName, offerValid, offerDesc }); // Create object and push to array
		});
		// console.log(offerValid);

		const filteredOffers = selectedBank === ''
			? offers
			: offers.filter(offer => offer.bankSelected === selectedBank);

		$('#offers-carousel').trigger('destroy.owl.carousel');
		$('#offers-carousel').empty();

		filteredOffers.forEach(offer => {
			$('#offers-carousel').append(`
				<div class="offer-item" data-bank="${offer.bankSelected}">
					<div class="offer-box" data-bs-toggle="modal" data-bs-target="${offer.modalId}">
						<div class="latest-offer-img"><img src="${offer.bankLogo}" class="mw-100" alt="${offer.bankName}"></div>
						<div class="latest-offer-type">${offer.offerType}</div>
						<div class="bank-name">${offer.bankName}</div>
						<div class="offer-valid">${offer.offerValid}</div>
						<div class="offer-desc"><span>${offer.offerDesc}</span></div>
					</div>
				</div>
			`);
		});

		$("#offers-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			dots: true,
			responsive:{0:{items:1,},1000:{items:1,},1200:{items:2,}}
		});
	};
	$('#bank-filter').val('').trigger('change');
});

/*
const title = document.querySelector(".hero-txt");
let [shadowX, shadowY] = [0, 0];

function setTitleBoxShadow(x, y) {
  //title.style.textShadow = `${x}px ${y}px 0px rgba(0, 0, 0, 0.14)`;
  title.style.transform = `translate3d(${x}px, ${y}px, 0)`;
}

function moveTextShadow(event) {
  let mouseX = 0;
  let mouseY = 0;

  if (event.type === "touchmove") {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
  } else {
    mouseX = event.x;
    mouseY = event.y;

    title.setAttribute("contenteditable", true);
  }

  const moveStep = 15;
  const centerXposition = title.offsetLeft + title.clientWidth / 2;
  const centerYposition = title.offsetTop + title.clientHeight / 2;

  if (mouseX < centerXposition || mouseX > centerXposition) {
    shadowX = Math.round((mouseX - centerXposition) / moveStep);
  }

  if (mouseY < centerYposition || mouseY > centerYposition) {
    shadowY = Math.round((mouseY - centerYposition) / moveStep);
  }

  setTitleBoxShadow(shadowX, shadowY);
}

window.addEventListener("mousemove", moveTextShadow);
window.addEventListener("touchmove", moveTextShadow);
window.addEventListener("touchend", () => setTitleBoxShadow(0, 0));
*/

	/*SCROLL PAGE TO TOP*/
$(document).ready(function() {
	// $(".toTop").css("display", "none");

	$(window).scroll(function(){
		if($(window).scrollTop() > 0){$(".toTop").fadeIn("slow");} else {$(".toTop").fadeOut("slow");}
	});

	$(".toTop").click(function(event){
		event.preventDefault();
		$("html, body").animate({scrollTop:0},"slow");
	});
});


	var navHeight = $('#main_navbar').offset().top;
	FixMegaNavbar(navHeight);
	$(window).bind('scroll', function() {FixMegaNavbar(navHeight);});

	function FixMegaNavbar(navHeight) {
		if (!$('#main_navbar').hasClass('navbar-fixed-bottom')) {
			if ($(window).scrollTop() > navHeight) {
				$('#main_navbar').addClass('navbar-fixed-top')
				$('#main_navbar').addClass('fixed-bg')
				
				
				if ($('#main_navbar').parent('div').hasClass('container')) $('#main_navbar').children('div').addClass('container').removeClass('container-fluid');
				
				else if ($('#main_navbar').parent('div').hasClass('container-fluid'))
				$('#main_navbar').children('div').addClass('container-fluid').removeClass('container');
			}
			else {
				$('#main_navbar').removeClass('navbar-fixed-top');
				$('#main_navbar').removeClass('fixed-bg')
				
				$('body').css({'margin-top': ''});
			}
		}
	}


	$(window).on('scroll', function () {
		var scrolled = $(this).scrollTop();
		$('.header-content').css({
			'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)', // parallax (20% scroll rate)
			'opacity': 1 - scrolled / 400 // fade out
		});        
		// $('.header-image').css('transform', 'translate3d(0, ' + -(scrolled * 0.03) + 'px, 0)');
	});



$(window).on('load resize', function(){
	"use strict";
	var _array = [
		//      [height=0]
		//      [width=1]
		//      [height&width=3]
		//      [0:3]       [parent]                [child]
		/*00*/ 	"0",        ".owl-stage",      ".card-box",
		/*00*/ 	"0",        ".owl-stage",      ".fees-more",
	];
	for(var x = 0;_array.length > x;x+=3){
		$(_array[x+1].toString()).each(function()
		{
			var boxes = $(this).find(_array[x+2].toString());
			if(_array[x] === "0" || _array[x] === "3"){
				boxes.css("height", "");
				var maxHeight = Math.max.apply(Math, boxes.map(function() {return $(this).height();}).get());
				boxes.height(maxHeight);
			}
			if(_array[x] === "1" || _array[x] === "3"){
				boxes.css("width", "");
				var maxWidth = Math.max.apply(Math, boxes.map(function() {return $(this).width();}).get());
				boxes.height(maxWidth);
			}
		});
	}
});


$(document).ready(function() {
	$(".four-items-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		navText: [ '<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>' ],
		responsive:{0:{items:1,},600:{items:2,},900:{items:3,},1200:{items:4,}}
	});
	$(".testimonials-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		responsive:{0:{items:1,},800:{items:2,}}
	});
});


/* Read More */
const expandableDivs = document.querySelectorAll('.expandable');
expandableDivs.forEach(div => {
  const button = div.querySelector('.collapse-btn');

  button.addEventListener('click', () => {
    div.classList.toggle('collapsed');
    div.classList.toggle('expanded');

    if (div.classList.contains('expanded')) {
      button.textContent = 'Read Less';
    } else {
			button.textContent = 'Read More';
    }
  });
});


/* Compare Part */
document.addEventListener('DOMContentLoaded', () => {
	// Delay execution by 1 seconds (1000 milliseconds)
	setTimeout(() => {
		const compareButtons = document.querySelectorAll('.compare-link');
		const comparisonBar = document.querySelector('.comparison-bar');
		const selectedProductsDiv = document.querySelector('.selected-products');
		const startComparisonBtn = document.querySelector('.start-comparison-btn');

		let selectedProducts = [];

		compareButtons.forEach(button => {
			button.addEventListener('click', (event) => {
				event.preventDefault(); // Prevent the default button behavior

				// Find the closest product card and get its product ID from the data attribute
				const productCard = button.closest('.product-card');
				const productId = productCard.getAttribute('data-product-id'); // Get product ID from data attribute

				if (!selectedProducts.includes(productId)) {
					if (selectedProducts.length < 3) {
						selectedProducts.push(productId);
						updateComparisonBar();
					} else {
						showTooltip(button, 'You can only compare up to 3 products.');
					}
				} else {
					showTooltip(button, 'This product is already selected for comparison.');
				}
			});
		});

		function showTooltip(element, message) {
			// Remove any existing tooltip
			$(element).tooltip('dispose');
			
			// Create a new tooltip
			$(element).tooltip({
				title: message,
				placement: 'top',
				trigger: 'manual'
			}).tooltip('show');

			// Hide the tooltip after 2 seconds
			setTimeout(() => {
				$(element).tooltip('hide');
			}, 2000);
		}

		function updateComparisonBar() {
			selectedProductsDiv.innerHTML = ''; // Clear previous selections

			selectedProducts.forEach(productId => {
				const productDiv = document.createElement('div');
				productDiv.classList.add('selected-product');

				// Get the product name
				const productNameElement = document.querySelector(`.product-card[data-product-id="${productId}"] .product-name`);
				const productName = document.createElement('span');
				productName.textContent = productNameElement.textContent; // Get the product name

				// Get the product image
				const productImageElement = document.querySelector(`.product-card[data-product-id="${productId}"] .product-image`);
				const productImage = document.createElement('img');
				productImage.src = productImageElement.src; // Get the image source
				productImage.alt = `Product ${productId}`;

				productDiv.appendChild(productImage);
				productDiv.appendChild(productName);

				// Create a remove button
				const removeButton = document.createElement('button');
				removeButton.textContent = 'X';
				removeButton.className = 'remove-product-btn';
				removeButton.addEventListener('click', () => {
						removeProduct(productId);
				});

				productDiv.appendChild(removeButton);
				selectedProductsDiv.appendChild(productDiv);
			});

			// Show the comparison bar if there are products selected
			comparisonBar.classList.toggle('empty', selectedProducts.length === 0);

			// Enable or disable the Start Comparison button
			startComparisonBtn.disabled = selectedProducts.length < 2;
		}

		function removeProduct(productId) {
			selectedProducts = selectedProducts.filter(id => id !== productId);
			updateComparisonBar();
		}
	}, 1000);
});