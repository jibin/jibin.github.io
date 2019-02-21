import Constant from './constant.js';
import nav from './navigation/nav.js';

// // Make sure sw are supported
// if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', () => {
// 		navigator.serviceWorker.register('../sw.js')
// 			.then( function(registration) {

// 				// Registration was successful
// 				console.log('ServiceWorker registration successful with scope: ', registration.scope);

// 			}, function(err) {

// 				// registration failed :(
// 				console.log('ServiceWorker registration failed: ', err);

// 			});
// 	})
// }

const holder = document.getElementById('holder');

// var clientX, clientY;


// function start(e) {
// 	clientX = e.touches[0].clientX;
// 	clientY = e.touches[0].clientY;
// 	holder.innerHTML = 'Start: ' +  clientX + ', ' + clientY;
// }
// function move(e) {
	
// }
// function end(e) {
// 	var deltaX, deltaY;
// 	deltaX = e.changedTouches[0].clientX - clientX;
// 	deltaY = e.changedTouches[0].clientY - clientY;
	  
// 	document.getElementById('holder').innerHTML = 'Start: ' +  clientX + ', ' + clientY + '<br> End: ' +  clientX + ', ' + clientY;
// }

// document.addEventListener('touchstart', start, false);
// document.addEventListener('touchmove', move, false);
// document.addEventListener('touchend', end, false);



// document.addEventListener('touchstart', handleTouchStart, false);        
// document.addEventListener('touchmove', handleTouchMove, false);

// var xDown = null;                                                        
// var yDown = null;

//  function handleTouchStart(evt) {
//     const firstTouch = evt.touches[0];                                      
//     xDown = firstTouch.clientX;                                      
//     yDown = firstTouch.clientY;                                      
// };                                                

// function handleTouchMove(evt) {
// 	console.log('Move');
	
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;                                    
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;

//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
// 			/* left swipe */ 
//             holder.innerHTML = 'Left Swipe';
//             Constant.HTML.classList.remove('main-navigation-open');
//         } else {
// 			/* right swipe */
//             holder.innerHTML = 'Right Swipe';
//             Constant.HTML.classList.add('main-navigation-open');
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
// 			/* up swipe */ 
// 			holder.innerHTML = 'Up Swipe';
//         } else { 
// 			/* down swipe */
// 			holder.innerHTML = 'Down Swipe';
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };

Constant.HAMBURGER.addEventListener('click', nav);
Constant.OVERLAY.addEventListener('click', nav);
