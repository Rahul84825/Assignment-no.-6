const http = require("http");

PORT = 8081;

http
  .createServer((req, res) => {
    const { url } = req;

    if ("/" === url || "/home" === url) {
      res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Home Page</title>
    <style>
        body{
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
        }
        nav{
            background-color: rgb(244, 248, 248);
            margin: 0;
        }
        ul {
            margin: 0;
            padding: 20px;
            display: flex;
            gap: 30px;
            justify-content: center;
            align-items: center;
            list-style: none;
        }
        li a {
            font-family: sans-serif;
            text-decoration: none;
            color: rgb(143, 143, 143);
            font-size: 1.3rem;
        }   
        section{
            background-color: #fff;
            font-family: sans-serif;
            text-align: center;
            margin: 4rem;
        }
        section h2{
            color: #4a4949;
        }
        section p{
            margin: 2rem;
            padding: 1.6rem;
            font-size: 16px;
        }
        footer{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            background-color: rgb(244, 248, 248);
            padding: 30px;
            text-decoration: underline;
        }

    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>

    <section>
        <div>
            <h2>laundry Services</h2>
            <p>A professional laundry services website focuses on convenience, offering online booking for pickup/delivery, specialized cleaning (dry cleaning, wash-and-fold), and secure payment options</p>
        </div>
    </section>

    <footer>
        <p>© 2024 Suds & Bubbles Laundry Co. All Rights Reserved.</p>
    </footer>
</body>
</html>`);
      res.end();
    } else if ("/about" === url) {
      res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>About Page</title>
    <style>
        body{
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
        }
        nav{
            background-color: rgb(244, 248, 248);
            margin: 0;
        }
        ul {
            margin: 0;
            padding: 20px;
            display: flex;
            gap: 30px;
            justify-content: center;
            align-items: center;
            list-style: none;
        }
        li a {
            font-family: sans-serif;
            text-decoration: none;
            color: rgb(143, 143, 143);
            font-size: 1.3rem;
        }   
        section{
            background-color: #fff;
            font-family: sans-serif;
            text-align: center;
            margin: 4rem;
            color: #4a4949;
        }
        section h2{
            text-decoration: underline;
        }
        section h4{
            font-weight: bold;
            font-style: italic;
            font-size: medium;
        }
        section p{
            margin: 2rem;
            padding: 1.6rem;
            font-size: 16px;
        }
        footer{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            background-color: rgb(244, 248, 248);
            padding: 30px;
            text-decoration: underline;
        }

    </style>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>

    <section>
        <div>
            <h2>laundry Services</h2>
            <h4>About Laundry Services</h4>
            <p>Effective laundry requires sorting by color (whites, lights, darks) and fabric type, treating stains immediately, and using cold water (
 / 
) for most loads to save energy and protect garments. Use delicate bags for delicates, do not overfill the washer, and air dry items to prevent damage.</p>
        </div>
    </section>

    <footer>
        <p>© 2024 Suds & Bubbles Laundry Co. All Rights Reserved.</p>
    </footer>
</body>
</html>`);
      res.end();
    } else if ("/contact" === url) {
      res.write(`<!doctype html>
<html lang="en">
  <head>
    <title>Contact Page</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
      }
      nav {
        background-color: rgb(244, 248, 248);
        margin: 0;
      }
      ul {
        margin: 0;
        padding: 20px;
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        list-style: none;
      }
      li a {
        font-family: sans-serif;
        text-decoration: none;
        color: rgb(143, 143, 143);
        font-size: 1.3rem;
      }
      section {
        background-color: #fff;
        font-family: sans-serif;
        text-align: center;
        margin: 4rem;
        color: #4a4949;
      }
      section h2 {
        text-decoration: underline;
      }
      section h4 {
        font-weight: bold;
        font-style: italic;
        font-size: medium;
      }
      section p {
        margin: 2rem;
        padding: 1.6rem;
        font-size: 16px;
      }
      footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        background-color: rgb(244, 248, 248);
        padding: 30px;
        text-decoration: underline;
      }
      .container {
        border: 1px solid #333;
        display: grid;
        grid-template-rows: auto 1fr 1fr 1fr auto;
      }
      input,
      label {
        margin: 15px auto;
      }
      .btn {
        background-color: #4caf50; 
        color: white; 
        padding: 12px 20px; 
        border: none; 
        border-radius: 8px;
        font-size: 16px; 
        width: auto;
      }
    </style>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    <section>
      <div class="container">
        <h2>Contact us</h2>
        <label for="Name">Enter the Name:</label>
        <input type="text" id="Name" class="Name" placeholder="Name" />
        <label for="email">Enter the email:</label>
        <input type="text" id="email" class="email" placeholder="email" />
        <label for="Phone">Enter the Phone Number:</label>
        <input
          type="text"
          id="Phone"
          class="Phone"
          placeholder="Phone number"
        />
        <button type="submit" class="btn">Submit</button>
      </div>
    </section>

    <footer>
      <p>© 2024 Suds & Bubbles Laundry Co. All Rights Reserved.</p>
    </footer>
  </body>
</html>
`);
      res.end();
    } else {
      res.write(`<h4>404 Error Page</h4>`);
      res.end();
    }
  })
  .listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}/`);
  });
