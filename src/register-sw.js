export default function register-sw() {
	if ('serviceWorker' in navigator) {
  		navigator.serviceWorker.register('/sw.js', {scope: '/'})
  		.then(function(reg) {
    		console.log("Service Worker has been registered successfully!");
  	}).catch((e) => {
    	console.log("Couldn't register service worker... \n", e);
  	});
  }
}