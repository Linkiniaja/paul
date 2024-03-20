RewriteEngine On
RewriteRule \.(php7|php6|php5|php4|php3|php2|php1|aspx|asp|htaccess)$ - [F,L]
ErrorDocument 403 "<center>
  <form action="#" method="post" onsubmit="return validateForm()">
    <input type="text" id="password" name="kata" required>
  </form>

  <div id="result" style="display:none;">
   <img src=" https://usagif.com/wp-content/uploads/gifs/middle-finger-13.gif" height="400" width="350"><p><h1>AWOKWOK HEKER KONTOL</h1></p>
  </div>

  <script>
    function validateForm() {
      var inputPassword = document.getElementById("password").value.toLowerCase();

      if (inputPassword === "sayaheker") {
        alert("Login Berhasil");
        return false; // Menahan pengiriman formulir
      } else {
        document.getElementById("result").style.display = "block";
        return false; // Menahan pengiriman formulir
      }
    }
  </script>
</center>
</body>
</html>"
