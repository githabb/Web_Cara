let count = 0;

$(".cart1-btn").on("click", function () {
  let cart1 = $(".cart1-nav");
 
  let imgtodrag = $(this)
    .parent(".buttons")
    .parent(".content1")
    .parent(".card1")
    .find("img")
    .eq(0);
  if (imgtodrag) {
    
    var imgclone = imgtodrag
      .clone()
      .offset({
        top: imgtodrag.offset().top,
        left: imgtodrag.offset().left
      })
      .css({
        opacity: "0.8",
        position: "absolute",
        height: "150px",
        width: "150px",
        objectFit: "cover",
        "z-index": "100"
      })
      .appendTo($("body"))
      .animate(
        {
          top: cart1.offset().top + 20,
          left: cart1.offset().left + 30,
          width: 75,
          height: 75
        },
        1000,
        "easeInOutExpo"
      );

    setTimeout(function () {
      count++;
      $(".cart1-nav .item-count").text(count);
    }, 1500);

    imgclone.animate(
      {
        width: 0,
        height: 0
      },
      function () {
        $(this).detach();
      }
    );
  }
});

