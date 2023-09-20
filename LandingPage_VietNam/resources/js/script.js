// Khi khởi động lên là hiện chữ này
$(document).ready(function () {
  alert("Hoàng Sa, Trường Sa là của Việt Nam");
});

// Khi chạy vào trang chữ thì chuyển màu
$(document).ready(function () {
  $("h1").css("color", "yellow");
});

// Khi clcik vào chữ thì đổi màu
$(document).ready(function () {
  $("h1").click(function () {
    // this ở đây chính là h1
    $(this).css("color", "orange");
  });
});

// Làm scroll
$(document).ready(function () {
  //Sticky
  $(".about-section").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px",
    }
  );

  //Scroll
  $("a").click(function (event) {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      700
    );
    event.preventDefault();
  });
});
