document.addEventListener("DOMContentLoaded", function() {
    // Get the first video element in .section1
    const video = document.querySelector('.section1 video:nth-child(1)');
  
    // Check if the video element exists
    if (!video) {
      console.error('Video element not found');
      return;
    }
  
    // Variable to track if the user is scrolling
    let isScrolling;
  
    // Function to pause the video when scrolling stops
    function pauseVideoWhenStopped() {
      clearTimeout(isScrolling); // Clear previous timeout
  
      isScrolling = setTimeout(function() {
        video.pause(); // Pause video when scrolling stops
      }, 1000); // 200 milliseconds delay
    }
  
    // Function to play the video while scrolling
    function playVideoOnScroll() {
      if (video.paused) {
        video.play(); // Play video if paused while scrolling
      }
    }
  
    // Add scroll event listener to the window
    window.addEventListener('scroll', function() {
      playVideoOnScroll(); // Play video on scroll
      pauseVideoWhenStopped(); // Pause video when scrolling stops
    });
  });