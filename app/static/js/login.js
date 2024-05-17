(function() {
  $('header a.login').addClass('active');
var msgs = {
  login: "login your account.",
  fail: "There is no account or wrong password.",
};

var Event = {
  login: function () {
    $("#login-btn").on("click", function () {
      var params = {
        email: $("#email").val(), //이메일 입력
        pw: $("#pw").val(), //패스워드 입력 받기
      };
      console.log(params);
      if (params.email === "admin@kt.com" && params.pw === "1234") {
        //해당 이메일과 로그인이 입력되면
        console.log("login!"); //패스
        $(".msg").text(msgs.login).show();
        location.href = 'contents';

      } else {
        console.log("fail!"); //아니라면 fail
        $(".msg").text(msgs.fail).show();
      }
    });
  },
};

Event.login();
})();

