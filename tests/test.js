function testHashing(bcrypt){
  var generateInputs = [
    {
      "password": "",
      "salt": "$2b$06$DCq7YPn5Rq63x1Lad4cll.",
      "output": "$2b$06$DCq7YPn5Rq63x1Lad4cll.TV4S6ytwfsfvkgY8jIucDrjc8deX1s."
    },
    {
      "password": "password",
      "salt": "$2b$12$lDViTbCF8NH7OEKAHiEqDu",
      "output": "$2b$12$lDViTbCF8NH7OEKAHiEqDuw2O78t.CSatsIISHGruiH3TOZcrFTLW"
    },
    {
      "password": "password",
      "salt": "$2b$08$oxxPCUDYFe5uHzetXh6XHu",
      "output": "$2b$08$oxxPCUDYFe5uHzetXh6XHu2OKlYx1O2Xx1WP6J5rLcizsCBenJIVS"
    },
    {
      "password": "\u6e2f",
      "salt": "$2b$08$Rdi7k19xXXtuk/an9tozaO",
      "output": "$2b$08$Rdi7k19xXXtuk/an9tozaOmO6MFWzFoeu1Ec3fdCFwPwCk6fbCRiG"
    },
    {
      "password": "\u6f2f",
      "salt": "$2b$08$QSTLTUJDqfxqsVs1Mk.rBe",
      "output": "$2b$08$QSTLTUJDqfxqsVs1Mk.rBebro/YCEKtbvKHWK62Utiidr7f.IETMe"
    }
  ]

  var current = 0;
  var entry = generateInputs[current];
  function hashNext(newHash) {
    if (entry.output == newHash) {
      document.write("<p>Pass: '" + newHash + "'</p>");
    } else {
      document.write("<p>Fail: '"+ entry.output + "' '"+ newHash + "'</p>");
    }
    current += 1
    if (current < generateInputs.length) {
      entry = generateInputs[current];
      hashpw(
        entry.password,
        entry.salt,
        function(h){ hashNext(h)},
        function() {});
    }
  }

  hashpw(
    entry.password,
    entry.salt,
    function(h){ hashNext(h)},
    function() {});
}

function testVerifying(bcrypt){
  var verifyInputs = [
    {
      "password": "password",
      "h": "$2b$12$lDViTbCF8NH7OEKAHiEqDuw2O78t.CSatsIISHGruiH3TOZcrFTLW",
    },
    {
      "password": "\u6e2f",
      "h": "$2b$08$Rdi7k19xXXtuk/an9tozaOmO6MFWzFoeu1Ec3fdCFwPwCk6fbCRiG"
    },
    {
      "password": "\u6f2f",
      "h": "$2b$08$QSTLTUJDqfxqsVs1Mk.rBebro/YCEKtbvKHWK62Utiidr7f.IETMe"
    }
  ]
  var current = 0;
  var entry = verifyInputs[current];
  function checkNext(res) {
    if (res) {
      document.write("<p>Pass</p>");
    } else {
      document.write("<p>Fail</p>");
    }
    current += 1
    if (current < verifyInputs.length) {
      entry = verifyInputs[current];
      checkpw(
        entry.password,
        entry.h,
        function(h){ checkNext(h)},
        function() {});
    }
  }

  checkpw(
    entry.password,
    entry.h,
    function(h){ checkNext(h)},
    function() {});
}
