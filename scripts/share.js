 // Load the Facebook SDK asynchronously
 (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Initialize Facebook SDK
  window.fbAsyncInit = function() {
    FB.init({
      appId            : 'YOUR_APP_ID', // Replace with your Facebook App ID
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v13.0'
    });
  };

  // Function to share on Facebook
  function shareOnFacebook() {
    FB.ui({
      method: 'share',
      href: window.location.href, // URL to share
    }, function(response){
      // Optional: Add callback function
    });
  }
