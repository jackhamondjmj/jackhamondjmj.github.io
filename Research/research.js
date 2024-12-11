$(document).ready(function() {
  // Toggle the month list when a year button is clicked
  $(".dropdown-toggle").click(function() {
    $(this).next(".subject").slideToggle(); // Slide down the next <ul> (month list)
  });
});
