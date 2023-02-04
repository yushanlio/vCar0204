/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

	/*
		// 解析網址 pair[1]是值pair[0]是參數名
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		var idNumber;
		for(var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			idNumber = pair[1];
			//console.log(pair[1]);
		}
*/
// 解析網址
var getUrlString = location.href;
var url = new URL(getUrlString);
var idNumber = url.searchParams.get('id'); // 回傳 21
let str = url.toString();
var Page = str.search('Form');
//.searchParams.get('page'); // 回傳 21
//url.searchParams.get('name'); //回傳 jason

	var a = {
		id: idNumber
	/*	sheetUrl : '你的試算表網址',
		sheetTag : '工作表1',
		row: 1,
		col: 1,
		endRow : 6,
		endCol : 2
		*/
	};
	//試算表
	
	const ka = $.get('https://script.google.com/macros/s/AKfycbxCYtroK9wzf3mlRzvNcbEDe6V0V83k3ZygNKTPmdMcmT8UouCoJE5eGCrp2_67iOeh/exec',a, function(data){
		console.log(data);
		var d = data.split(',');  //把傳出來的字串分割成陣列
		var arr = [];  
		var i=12;
		console.log(d[i],d[i+1],d[i+2],d[i+3],d[i+4])
		
		if(Page !=-1)
		{	//輸入資料頁面
			$("#contactName").attr("value",d[0]);
			$("#web1").attr("value",d[1]);
			$("#web2").attr("value",d[2]);
			$("#web3").attr("value",d[3]);
			$("#web4").attr("value",d[4]);
			$("#web5").attr("value",d[5]);

			$("#introduceHi").attr("value",d[6]);
			$("#jobtitle").attr("value",d[7]);
			$("#jobtitle2").attr("value",d[8]);

			$("#introduceDoc").attr("value",d[9]);
			$("#introduceDoc2").val(d[10]);
			$("#Picweb").attr("value",d[11]);
			
			if(d[i]==0)
				document.getElementById("check1").checked = false;
			else
				document.getElementById("check1").checked = true;
			if(d[i+1]==0)
				document.getElementById("check2").checked = false;
			else
				document.getElementById("check2").checked = true;
			if(d[i+2]==0)
				document.getElementById("check3").checked = false;
			else
				document.getElementById("check3").checked = true;
			if(d[i+3]==0)
				document.getElementById("check4").checked = false;
			else
				document.getElementById("check4").checked = true;
			if(d[i+4]==0)
				document.getElementById("check5").checked = false;
			else
				document.getElementById("check5").checked = true;		

		}
		else
		{
			//顯示頁面
			document.getElementById("name").innerHTML = d[0];
			$("#li1").attr("href",d[1]);
			$("#li2").attr("href",d[2]);
			$("#li3").attr("href",d[3]);
			$("#li4").attr("href",d[4]);
			$("#li5").attr("href",d[5]);
			document.getElementById("Hello").innerHTML = d[6];
			document.getElementById("Num1").innerHTML = d[7];
			document.getElementById("Num2").innerHTML = d[8];
			document.getElementById("introduce").innerHTML = d[9];
			document.getElementById("introducePage").innerHTML = d[10];
			//document.getElementById("introducePic").innerHTML = d[11];
			$("#introducePic").attr("src",d[11]);

			if(d[i]==0)
				document.getElementById("li1").parentElement.style.display = "none";
			else
				document.getElementById("li1").parentElement.style.display = "";
			if(d[i+1]==0)
				document.getElementById("li2").parentElement.style.display = "none";
			else
				document.getElementById("li2").parentElement.style.display = "";
			if(d[i+2]==0)
				document.getElementById("li3").parentElement.style.display = "none";
			else
				document.getElementById("li3").parentElement.style.display = "";
			if(d[i+3]==0)
				document.getElementById("li4").parentElement.style.display = "none";
			else
				document.getElementById("li4").parentElement.style.display = "";
			if(d[i+4]==0)
				document.getElementById("li5").parentElement.style.display = "none";
			else
				document.getElementById("li5").parentElement.style.display = "";

		}
	})


		//editInfo(9);
      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
		$("#preloader").delay(3000).fadeOut("slow");
		//$("#preloader").delay(1500).fadeOut("slow");	
		
      });  
	  
  	})

	document.getElementById('btnSub').onclick = function order(){
		$("#content1").attr("height",'10px');
		var content = document.getElementById("content1");
		content.style.height='10px';
		content = document.getElementById("content2");
		content.style.height='10px';
		content = document.getElementById("content3");
		content.style.height='10px';
		var getUrlString = location.href;
		var url = new URL(getUrlString);
		var idNumber = url.searchParams.get('id'); // 回傳 21
	var a = {
		id:idNumber,
		name : document.getElementById("contactName").value,
		web1:  document.getElementById("web1").value,
		web2:  document.getElementById("web2").value,
		web3:  document.getElementById("web3").value,
		web4:  document.getElementById("web4").value,
		web5:  document.getElementById("web5").value,
		Picweb:document.getElementById("Picweb").value,
		introduceDoc2:document.getElementById("introduceDoc2").value,
		introduceHi:document.getElementById("introduceHi").value,
		introduceDoc:document.getElementById("introduceDoc").value,
		jobtitle :document.getElementById("jobtitle").value,
		jobtitle2 :document.getElementById("jobtitle2").value,
		check1:document.getElementById("check1").checked  ? 1 : 0,
		check2:document.getElementById("check2").checked ? 1 : 0,
		check3:document.getElementById("check3").checked ? 1 : 0,
		check4:document.getElementById("check4").checked ? 1 : 0,
		check5:document.getElementById("check5").checked ? 1 : 0
	/*	sheetTag : '工作表1',
		row: 1,
		col: 1,
		endRow : 6,
		endCol : 2
		*/
	};
	//試算表
	
	const ka = $.post('https://script.google.com/macros/s/AKfycbzGsigh0QMT_H4cPbtmZ37IYdq8xM6Dwe-CbCMqcm7y1dK2tksOx6e1zgGHYUmlWPqyug/exec',a ,function(result){
		alert(result);    
	
    })

	}

  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);

	function getdata()
	{


		
	}
	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({      	

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() { 

		      	sLoader.fadeIn(); 

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut(); 
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();   
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut(); 
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut(); 
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });     		
  		}

	});


 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);