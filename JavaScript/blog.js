$(document).ready(function() {
  // Toggle the month list when a year button is clicked
  $(".dropdown-toggle").click(function() {
    $(this).next(".month-list").slideToggle(); // Slide down the next <ul> (month list)
  });
});
