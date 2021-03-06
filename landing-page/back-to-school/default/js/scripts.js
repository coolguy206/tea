
var theItems;

jQuery(document).ready(function() {

    jQuery('img[usemap]').rwdImageMaps();

    //change the form submit to brown
   $('.wrap-content').find('form').find('input[type="email"]').keyup(function(){ 
      if($(this).val() !== '') {
            //desktop
            if($(window).width() > 737){
                $('.wrap-content').find('form').find('input[type="submit"]').css('background','url(https://www.teacollection.com/mas_assets/media/tea_collection/landing-pages/customer-aquisition/2018/0712/submit-icon-white.png) no-repeat 15px 13px #572700');
            }
            //mobile
            else {
                $('.wrap-content').find('form').find('input[type="submit"]').css('background','url(https://www.teacollection.com/mas_assets/media/tea_collection/landing-pages/customer-aquisition/2018/0712/submit-icon-white.png) no-repeat 50% 14px #572700');
            }
         
      } else {
         $('.wrap-content').find('form').find('input[type="submit"]').removeAttr('style');
      }
   });

    // $('.wrap-content header').bxSlider({
    //     auto:true,
    //     autoHover:true,
    //     infiniteLoop:true,
    //     //pager:true,
    //     controls:false
    // });

    //desktop
    if($(window).width() > 737){
       theItems = $('.items-list-wrapper .item').length; 

       $('.wrap-content header.desktop').bxSlider({
            auto:true,
            autoHover:true,
            infiniteLoop:true,
            //pager:true,
            //controls:false
        });

        //change sidebar
        $('#sidebar-Girl h2').html('<a href="/girls-clothing/favorites/back-to-school">Girl</a>');
        $('#sidebar-Tween h2').html('<a href="/tween-girls-clothing/favorites/back-to-school">Tween</a>'); 
        $('#sidebar-Boy h2').html('<a href="/boys-clothing/favorites/back-to-school">Boy</a>');  
    }
    //mobile
    else if($(window).width() < 737){
       theItems = $('.thumb-wrapper .single-item-box').length; 

       $('.wrap-content header.mobile').bxSlider({
            auto:true,
            autoHover:true,
            infiniteLoop:true,
            //pager:true,
            controls:false
        });  
    }
    

    var contentCells = function(){ 
        //remove all the .cell
        $('.items-list-wrapper .item.cell, .thumb-wrapper .single-item-box.cell').remove();

        //url to pdf
    	var baseUrl = 'https://www.teacollection.com/mas_assets/theme/tea_collection/images/categories/headers/180118/tween/';

        //url to images
        var baseUrl2 = 'https://www.teacollection.com/mas_assets/media/tea_collection/landing-pages/back-to-school/2018/';

        //the content cell take over
        var images = [
            {num:4, img:'c4.png', url:'', alt:'100% Cotton, Comfortable, Breathable, Washable, Durable, 100% Kid Friendly', target:''},
            {num:15, img:'c15.png', url:'', alt:'Tees that tell Tales', target:''},
            {num:22, img:'c22.png', url:'', alt:'Worn Happily Handed Down Beautifully', target:''},
            {num:32, img:'c32.png', url:'', alt:'Prints that Play Well Together', target:''},
            
        ];

       // console.log(images);

        //if mobile window width change
        // if($(window).width()< 737){
        //     $(window).resize(function(){
        //         //get the new height
        //         var height = Math.round($('.single-item-box')[1].getBoundingClientRect().height * 10)/10;

        //         //change the height on the items
        //         var items = $('.single-item-box');
        //         $(items).each(function(i,val){
        //             //if has class cell
        //             var yes = $(val).hasClass('cell');
        //             if(yes){
        //                 $(val).css({'height': height, 'overflow':'hidden'});
        //             }
        //         });
        //         // $('.single-item-box').hasClass('cell').css({'height': height, 'overflow':'hidden'});
        //     });
        // }

        //function to output to page
    	var outPut = function(num, url, imgSrc, baseUrl, target, prev,alt){

    		var elem;
            var height;

    		//if desktop
    		if($(window).width() > 768){

                // get the height
                height = Math.round($('.items-list-wrapper .item')[1].getBoundingClientRect().height * 10)/10;
              
    			//if element has url
    			if(url !== ''){
    				elem = '<section class="item cell" style="height:'+height+'px !important; overflow:hidden"><a href="'+ url +'" target="'+ target +'"><img src="'+ baseUrl + imgSrc +'" alt="'+ alt +'" data-num="content cell '+ num +'" style="max-width:100%;"></a></section>';
    			} 
                //element does not have url
                else {
    				elem = '<section class="item cell" style="height:'+height+'px !important; overflow:hidden"><img src="'+ baseUrl + imgSrc +'" alt="'+ alt +'" data-num="content cell '+ num +'" style="max-width:100%;"></section>';
    			}

                // console.log('desktop out putting');

                //output item to page
                if(num !== null){
                    if(num == 53){ 
                            
                        var addedItem = jQuery('.items-list-wrapper .item').length;

                        if(addedItem == 52){
                            jQuery('.items-list-wrapper .item').eq(51).after(elem);
                        }
                           
                    } 
                    else {
                        jQuery('.items-list-wrapper .item').eq(prev).before(elem);
                    }  
                }   
    		}

    		// if mobile
    		else {

                // get the height
                height = Math.round($('.thumb-wrapper .single-item-box')[1].getBoundingClientRect().height * 10)/10;

    			// element has url 
    			if(url !== ''){
    		
                    elem = '<div class="single-item-box cell" style="height:'+height+'px !important; overflow:hidden"><a href="'+ url +'" target="'+target+'"><img src="'+ baseUrl + imgSrc +'" alt="'+ alt +'" data-num="content cell" style="max-width:100%"></a></div>';
    			} 
                // element doen't have url
                else {
    			
                    elem = '<div class="single-item-box cell" style="height:'+height+'px !important; overflow:hidden"><img src="'+ baseUrl + imgSrc + '" alt="'+ alt +'" data-num="content cell" style="max-width:100%;"></div>';
    			}

    			// output item to mobile page
                if(num !== null){
                    if(num == 53){ 
                            
                        var addedItem = jQuery('.thumb-wrapper .single-item-box').length;

                        if(addedItem == 51){
                            jQuery('.thumb-wrapper .single-item-box').eq(50).after(elem);
                        }
                           
                    } 
                    else if(num !== 16) {
                        jQuery('.thumb-wrapper .single-item-box').eq(prev).before(elem);
                    }  
                    
                }
    		}
    	};


        //loop through the content cell take overs
    	$.each(images, function(i,val){
            //the number
    		var num = val.num;

            //the img src
            var imgSrc = val.img;
    			
            //the prev item
    		var prev = num -1;

            //the url
            var url;

            //the alt
            var alt = val.alt;

            // console.log('the url: ', val.url);
            if(val.url == 'field-notes-d.pdf'){
                // console.log('match');
                if($(window).width() < 737){
                    url = baseUrl + 'field-notes-m.pdf';
                    // console.log('mobile: ', url)
                }
                else {
                    url = baseUrl + val.url;
                    // console.log('desktop: ', url);
                }
            } else {
                url = val.url;
            }
                

            //the target
            var target = val.target;

            // console.log(num, url, imgSrc, prev);

            //output to screen
    		outPut(num, url, imgSrc, baseUrl2, target, prev, alt);
    	});
    };

    //call contentCell
    contentCells();

    //call contentCell again on window scroll if number of .items changes
    $(window).scroll(function(){ 
        var newItems;

        //desktop
        if($(window).width() > 737){
            newItems = $('.items-list-wrapper .item').length; 

            //for dev
            // if(newItems == 39){
            //         console.log('reached 39');
            //     for(i= newItems; i < 54; i++){
            //         var copy = $('.items-list-wrapper .item').eq(1).clone();
            //         $('.items-list-wrapper').append(copy);
            //     }
            //     contentCells();
            // } 
        }
        //mobile
        else if($(window).width() < 737){
            newItems = $('.thumb-wrapper .single-item-box').length;

            //for dev
            // if(newItems == 37){
            //     console.log('reached 37');
            //     for(i= newItems; i < 54; i++){
            //         var copy = $('.thumb-wrapper .single-item-box').eq(1).clone();
            //         $('.thumb-wrapper').append(copy);
            //     }
            //     contentCells();
            // }  
        }
        
        // console.log(theItems, newItems);


        //for prod
        if(theItems !== newItems){
            // console.log(theItems, newItems);

            //call contentCells()
            contentCells();
            //change theItems = newItems
            theItems = newItems; 

            // console.log('theItems has been changed to: ' , theItems);
        }
    });

});

