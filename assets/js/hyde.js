$(function() {
  // Mobile navbar
  $(".hyde.nav-toggle-btn").click(function() {
    $(".hyde.mobile-nav-wrapper").slideDown();
  });

  $(".hyde.mobile-nav-item.close-btn").click(function() {
    $(".hyde.mobile-nav-wrapper").slideUp();
  });

  // Navbar background
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $(".hyde.navbar-parent").addClass("navbar-bg");
    } else {
      $(".hyde.navbar-parent").removeClass("navbar-bg");
    }
  });

  // Auto-append '_blank' attribute to external link
  // https://stackoverflow.com/questions/12041935/how-to-automatically-add-target-blank-to-external-links-only
  $.expr[":"].external = function(obj) {
    return !obj.href.match(/^mailto\:/) && obj.hostname != location.hostname && !obj.href.match(/^javascript\:/) && !obj.href.match(/^$/);
  };
  $("a:external").attr("target", "_blank");

  // Clipboard
  var clipboard = new ClipboardJS(".hyde.share-item.copy");

  clipboard.on("success", function() {
    alert("클립보드에 복사되었습니다.");
  });

  clipboard.on("error", function(e) {
    console.log(e);
  });

  // Auto-add responsive Youtube iframe
  $(".hyde.youtube").each(function() {
    return $(this).append('<iframe src="https://www.youtube.com/embed/' + this.id + '" frameborder="0" allowfullscreen></iframe>');
  });
});
