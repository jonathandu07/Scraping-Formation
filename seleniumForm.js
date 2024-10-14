$(document).ready(function () {
  var ccWrapper = $(".cc-wrapper");
  var ccWidth = "100%";
  var ccBg = "#333";
  var numberMask = true;

  var card =
    '<div class="card">' +
    '<div class="chip"><div class="mc"></div></div>' +
    '<div class="logo"></div>' +
    '<div class="number">3333 4444 5555 6666</div>' +
    '<div class="name">onur altınsoy</div>' +
    '<div class="date">' +
    '<div class="left">VALID DATE</div>' +
    '<div class="right">' +
    "MM / YY" +
    "<br><span>__ / __</span>" +
    "</div>";
  "</div>" + "</div>";

  var cardBack =
    '<div class="card-back">' +
    '<div class="magnet"></div>' +
    '<div class="sign"></div>' +
    '<div class="cvc">000</div>' +
    '<div class="chip"><div class="mc"></div></div>' +
    '<div class="copyright">jQuery easycard is implementable for all html forms easy to use made by onur altinsoy http://onuraltinsoy.com</div>' +
    "</div>";

  ccWrapper.html(card);

  var cc = $(".card");

  ccWrapper.append(cardBack);

  var cb = $(".card-back");

  var ccHeight = cc.width() / 1.5;

  $(".card, .card-back").css({
    width: ccWidth,
    height: ccHeight,
    background: ccBg,
  });

  cb.css({ marginTop: "-" + cb.height() + "px" });

  cc.find(".number").css({
    fontSize: cc.width() / 15 + "px",
  });

  cc.find(".name").css({
    fontSize: cc.width() / 22 + "px",
  });

  cc.find(".date").css({
    fontSize: cc.width() / 42 + "px",
  });

  cc.find(".date .right span").css({
    fontSize: cc.width() / 20 + "px",
  });

  cb.find(".cvc").css({
    fontSize: cc.width() / 15 + "px",
  });

  cb.find(".copyright").css({
    fontSize: cc.width() / 40 + "px",
  });

  $(document).on("keyup", "#name", function () {
    cc.find(".name").text($(this).val().toUpperCase());
  });

  $(document).on("keyup", "#cvc", function () {
    cb.find(".cvc").text($(this).val());
  });

  $(document).on("keyup", "#number", function () {
    var number = $(this).val().replace(/\s/g, "");
    if (number.slice(0, 2) === "34" || number.slice(0, 2) === "37") {
      $(".card, .card-back").css({
        background:
          "linear-gradient(135deg, rgba(255,162,0,1) 0%, rgba(251,255,120,1) 22%, rgba(255,162,0,1) 39%, rgba(255,162,0,1) 100%)",
      });
      $(".logo")
        .css({
          background:
            "url(https://images1.egifter.com/Images/themes/eGifter/2016/AmericanExpress.svg) no-repeat",
          backgroundSize: "100% auto",
        })
        .show();
    } else if (number[0] === "4") {
      $(".card, .card-back").css({
        background:
          "linear-gradient(135deg, rgba(8,75,94,1) 0%, rgba(20,108,140,1) 34%, rgba(3,47,59,1) 96%, rgba(3,47,59,1) 100%)",
      });
      $(".logo")
        .css({
          background:
            "url(https://www.azernews.az/media/2016/12/19/visa_logo_020615.jpg) no-repeat",
          backgroundSize: "100% auto",
        })
        .show();
    } else if (
      (parseInt(number.slice(0, 6)) >= 510000 &&
        parseInt(number.slice(0, 6)) <= 559999) ||
      (parseInt(number.slice(0, 6)) >= 222100 &&
        parseInt(number.slice(0, 6)) <= 272099)
    ) {
      $(".card, .card-back").css({
        background:
          "linear-gradient(135deg, rgba(191,13,48,1) 0%, rgba(255,84,121,1) 38%, rgba(191,13,48,1) 100%)",
      });
      $(".logo")
        .css({
          background:
            "url(https://vignette1.wikia.nocookie.net/logopedia/images/2/2a/Mastercard-logo.svg/revision/latest?cb=20170131035048) no-repeat",
          backgroundSize: "100% auto",
        })
        .show();
    } else {
      $(".card, .card-back").css({
        background: ccBg,
      });
      $(".logo").hide();
    }
    var formattedNumber = "";
    for (var i = 0; i < number.length; i++) {
      var chr;
      if (i === 3 || i === 7 || i === 11) {
        chr = number[i] + " ";
      } else {
        chr = number[i];
      }
      formattedNumber += chr;
    }
    if (numberMask) {
      $(this).prop("maxlength", 19);
      $(this).val(formattedNumber);
    }

    cc.find(".number").text(formattedNumber);
  });

  $(document).on("keyup change", "#date-m, #date-y", function () {
    var m = $("#date-m").val();
    var y = $("#date-y").val();

    console.log(m);

    cc.find(".date .right span").text(m + " / " + y);
  });

  $(document).on("focus", "#cvc", function () {
    cc.css({ zIndex: -1 });
    cc.css({
      transform: "rotateY(180deg)",
      transition: "all .5s ease",
      boxShadow: "-5px 5px 6px 3px #ccc",
    });
    cb.css({
      transform: "rotateY(0deg)",
      transition: "all .5s ease",
    });
  });
  $(document).on("focusout", "#cvc", function () {
    cc.css({ zIndex: 1 });
    cc.css({
      transform: "rotateY(0deg)",
      transition: "all .5s ease",
      boxShadow: "5px 5px 6px 3px #ccc",
    });
    cb.css({
      transform: "rotateY(180deg)",
      transition: "all .5s ease",
    });
  });
});
