$(document).ready(function () {
  $('#btn1').click(function () {
      $("p:odd").hide();
  });

  $('#btn2').click(function () {
      $("span.my-span").hide();
  });

  $('#btn3').click(function () {
      $("[type='email']").hide();
  });

  $('#btn4').click(function () {
      $("[checked]").hide();
  });

  $('#btn5').click(function () {
      $("div span:odd").hide();
  });
});
