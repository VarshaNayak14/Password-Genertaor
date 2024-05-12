
    function generatePassword() {
      var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lowerChars = "abcdefghijklmnopqrstuvwxyz";
      var numberChars = "0123456789";
      var symbolChars = "!@#$%^&*()";
      var allChars = "";
      var passwordLength = 12;
      var password = "";

      if(document.getElementById('uppercase').checked) {
        allChars += upperChars;
      }
      if(document.getElementById('lowercase').checked) {
        allChars += lowerChars;
      }
      if(document.getElementById('numbers').checked) {
        allChars += numberChars;
      }
      if(document.getElementById('symbols').checked) {
        allChars += symbolChars;
      }

      for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * allChars.length);
        password += allChars[randomNumber];
      }
      document.getElementById("password").value = password;
    }
  