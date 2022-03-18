// Validator help form
var main = function formValidator() {
  // Name Validator Funtion
  function nameValidator() {
    var name = $("#name").val();
    var flag = false;

    if (name === "") {
      $("#name-validator").text("Vui lòng điền tên của bạn");
      $("#name").css({ border: "2px solid #ff6464" });
      flag = false;
    } else {
      $("#name-validator").text("");
      $("#name").css({ border: "none" });
      flag = true;
    }

    return flag;
  }

  // Phone Validator Funtion
  function phoneValidator() {
    var phone = $("#phone").val();
    // Regex Phone Number
    var phoneRegex = new RegExp("(84|0[3|5|7|8|9])+([0-9]{8})\\b");
    var flag = false;

    if (phone === "") {
      $("#phone-validator").text("Vui lòng điền số điện thoại của bạn");
      $("#phone").css({ border: "2px solid #ff6464" });
      flag = false;
    } else if (phone !== "" && !phoneRegex.test(phone)) {
      $("#phone-validator").text("Số điện thoại không hợp lệ");
      $("#phone").css({ border: "2px solid #ff6464" });
      flag = false;
    } else if (phone !== "" && phoneRegex.test(phone)) {
      $("#phone-validator").text("");
      $("#phone").css({ border: "none" });
      flag = true;
    }
    return flag;
  }

  // Email Validator Funtion
  function emailValidator() {
    var email = $("#email").val();
    // Regex Email
    var emailRegex = new RegExp(
      "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$"
    );
    var flag = false;

    if (email === "") {
      $("#email-validator").text("Vui lòng điền email của bạn");
      $("#email").css({ border: "2px solid #ff6464" });
      flag = false;
    } else if (email !== "" && !emailRegex.test(email)) {
      $("#email-validator").text("Email không hợp lệ");
      $("#email").css({ border: "2px solid #ff6464" });
      flag = false;
    } else if (email !== "" && emailRegex.test(email)) {
      $("#email-validator").text("");
      $("#email").css({ border: "none" });
      flag = true;
    }

    return flag;
  }

  //Show Success Dialog
  function showDialog() {
    $(".dialog").addClass("active");
  }

  // Close Dialog when click outside
  $("html").click(function () {
    $(".dialog").removeClass("active");
  });

  $("form").submit(function () {
    nameValidator();
    phoneValidator();
    emailValidator();
    if (
      nameValidator() == true &&
      phoneValidator() == true &&
      emailValidator() == true
    ) {
      showDialog();
    }
    return false;
  });
};

$(document).ready(main);
