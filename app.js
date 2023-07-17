const email = $("input");
const emailValue = email.val();
const popup = $(".pup-up-modal");
const confirmMessage = $(".confirm-message");
const dismissMessage = $(".dismiss-message");

console.log(emailValue);

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

$("form").on("submit", function (event) {
  event.preventDefault();
  if (validateEmail(email.val())) {
    $(".alert-message").show();
    $(".alert-message").css("color", "green");
    $(".alert-message").text("Success");
    $(".pop-up-modal").hide();
    $(".confirm-message").show();
  } else {
    $(".alert-message").show();
    $("input").css("border", "1px solid hsl(4, 100%, 67%");
    $("input").css("background-color", "hsl(4, 100%, 67%, 0.1");
    $("input").css("color", "hsl(4, 100%, 67%");
  }
});

$("input").on("keyup", function (event) {
  const emailVal = email.val();
  console.log($(this).val().lenght);
  if ($(email.val().lenght()) < 1) {
    console.log("works?");
    $(".alert-message").show();
    $(".alert-message").text("Cant't leave empty");
  }
});

$(".dismiss-message").on("click", function (event) {
  event.preventDefault();
  $(".confirm-message").hide();
});
