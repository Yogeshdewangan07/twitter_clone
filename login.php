<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twitter</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="JavaScript/login.css">
    <link rel="stylesheet" href="twitter-clone.css">
</head>
<body>
<div class="loginform">
  <div class='container'>
    <div class='div-1'>
      <div class='sub-div-1'>
        <i class="fa fa-twitter icon"></i>
      </div>
    </div>
    <div class='div-2'>
      <div class='sub-div-2'>
        <h3>Login to Twitter</h3>
      </div>
    </div>
  </div>
  <section class="form login">
  <form action="" method="POST">
  <div class="error-text"></div>
        <div class='div-3'>
            <div class='sub-div-3'>
                <label>Email</label>
                <input type='email' name="email">
            </div>
        </div>
        <div class='div-4'>
            <div class='sub-div-4'>
                <label>Password</label>
                <input type='password' name="password">
            </div>
        </div>
        <div class='div-5'>
            <div class="sub-div-5 field button">
                <input type="submit" name="submit" value="Login">
            </div>
            </form>
        </div>
        <div class='div-6'>
            <div class='sub-div-6'>
                <span>Don't have an account <a href='index.php'>Signup Here</a></span>
            </div>
        </div>
    </section>
  </div>

  <script src="JavaScript/login.js"></script>
</body>
</html>