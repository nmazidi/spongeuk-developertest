/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

=====================================================
 SPONGE UK DEVELOPER TEST
 Page-specific JS
=====================================================
*/
//import ContentES6 from './lib/ContentES6';
jQuery(

		function( $ ) {

			/**
			 * A new instance of the content parser using the content JSON file
			 */
			var resContent = new Content( 'app/data/content.json' );

			/**
			 * Show tab content for the tab that has the 'selected' class, and vice versa
			 */
			 var setSelectedTab = function() {
				 //set default selected tab
				 $("#"+"tab0").addClass('selected');
				 $("[name='tab0']").addClass('selected');

				 $("div.tab button").click(function() {
					 var tabName = $(this).attr('name');

					 //deselect all tabs first
					 $('div.tab button').removeClass('selected');
					 $('.tabcontent').removeClass('selected');

					 //then select clicked tab
					 $(this).addClass('selected');
					 $("#"+tabName).addClass('selected');
				 });
			 };

			/**
			 * Register a Handlebars helper for the difficulty stars
			 */
			Handlebars.registerHelper( 'difficulty',
					function( intStars ) {
						var strHTMLStarsOut = '';

						for( var intStar = 0; intStar < intStars; intStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star"></i>';
						}

						for( var intBlankStar = intStars; intBlankStar < 5; intBlankStar++ ) {
							strHTMLStarsOut += '<i class="fa fa-star-o"></i>';
						}

						return strHTMLStarsOut;
					}
			);
			/**
			 * When the content file is ready, actually populate the content
			 */
			resContent.onReady(
					function() {
						//call populate function in content.js
						resContent.populate("header");
						resContent.populate("tabs");
						resContent.populate("tasks");
						resContent.populate("content");
						resContent.populate("documentation");
						setSelectedTab();
					}
			);
		}
);
