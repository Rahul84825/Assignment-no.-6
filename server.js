const http = require("http");

const PORT = 3000;

http
  .createServer((req, res) => {
    const { url } = req;

    if (url === "/" || url === "/home") {
      res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <style>
      body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: rgb(244, 236, 236);
  color: rgb(51, 51, 51);
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.navbar {
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    padding: 1.7vh 7vw;
}

.navbar ul {
    list-style: none;
    margin: 0;
    font-size: 1.3rem;
    padding: 0;
    display: flex;
}

.navbar ul li a {
    text-decoration: none;
    color: rgb(93, 109, 131);
    padding: 0 1.5rem;
}

.footer {
    background-color: rgb(236, 235, 235);  
    color: rgb(56, 55, 55);
    display: flex;
    justify-content: center;
    align-items: center;              
    padding: 40px 20px;
}

.hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 60px 30px;
    background: white;
}

.left-div h1 {
    font-size: 38px;
    margin-bottom: 20px;
    color: rgb(48, 47, 47);
    line-height: 1.3;
}

.left-div p {
    color: rgb(85, 85, 85);
    font-size: 16px;
    margin-bottom: 25px;
    line-height: 1.6;
}

.book-button {
    padding: 12px 20px;
    background-color: rgb(55, 81, 207);
    color: white;
    border-radius: 4px;
    border: none;
    font-size: 15px;
}

.right-div img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
}
    </style>
    <title>home page</title>
</head>
<body>
    <header class="navbar">
    <div class="logo">Logo</div>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
    <div class="username">Rahul</div>
  </header>

  <section class="hero-section">
    <div class="left-div">
      <h1>
        <div>Revitalize Your </div>
        <div class="half_heading">Clothes with Expert</div>
        <div class="span">Laundry Services!</div>
      </h1>
      <p>From premium dry cleaning to swift wash and fold, we deliver care and convenience. Schedule a pickup and
        rediscover the freshness of your clothes today!</p>
      <button class="book-button">Book a service today!</button>
    </div>
    <div class="right-div">
      <img src="resources/css/img/machine.jpeg" alt="Washing Machine Icon">
    </div>
  </section>

    <footer class="footer">
    <div class="footer-bottom">
      <p>&copy; 2024 Expert Laundry Services. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`);
      return res.end();
    } else if (url === "/about") {
      res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - Expert Laundry Services</title>
  <style>
    body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: rgb(233, 233, 250);
  color: rgb(51, 51, 51);
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.navbar {
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    padding: 1.7vh 7vw;
}

.navbar ul {
    list-style: none;
    margin: 0;
    font-size: 1.3vw;
    padding: 0;
    display: flex;
}

.navbar ul li a {
    text-decoration: none;
    color: rgb(109, 133, 149);
    padding: 0 1.5vw;
}

.footer {
    background-color: rgb(215, 215, 224);   
    color: rgb(55, 65, 81);              
    padding: 40px 20px;
}

.footer-bottom {
    max-width: 1200px;
    margin: 30px auto 0;
    padding-top: 15px;
    border-top: 1px solid rgb(194, 194, 206);

    text-align: center;
    font-size: 13px;
    color: rgb(107, 114, 128);
}


.about-section {
    padding: 50px 20px;
    background: rgb(229, 229, 241);
}

.about-inner {
    width: 80%;
    max-width: 750px;
    margin: 0 auto;
}

.about-inner h1 {
    text-align: center;
}

.about-inner p {
    text-align: center;
}

  </style>
</head>

<body>

  <header class="navbar">
    <div class="logo">Logo</div>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
    <div class="username">Rahul</div>
  </header>

  <section class="about-section">
    <div class="about-inner">
      <h1>About Us</h1>
      <p>
        Expert Laundry Services is dedicated to providing premium laundry and dry-cleaning
        solutions with care, reliability, and convenience. We believe your clothes deserve
        the best treatment possible.
      </p>

      <p>
        With over <strong>2+ years of experience</strong> and hundreds of satisfied customers,
        our mission is to make laundry hassle-free and affordable for everyone.
      </p>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-bottom">
      <p>&copy; 2024 Expert Laundry Services. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>
`);
      return res.end();
    } else if (url === "/contact") {
      res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: rgb(248, 250, 255);
  color: rgb(51, 51, 51);
  min-height: 100vh;
  display:grid;
  grid-template-rows:auto 1fr auto;
}

.navbar {
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    padding: 1.7vh 7vw;
}

.navbar ul {
    list-style: none;
    margin: 0;
    font-size: 1.3vw;
    padding: 0;
    display: flex;
}

.navbar ul li a {
    text-decoration: none;
    color: rgb(109, 133, 149);
    padding: 0 1.5vw;
}

.footer {
    background-color: rgb(246, 247, 249);   
    color: rgb(55, 65, 81);              
    padding: 40px 20px;
}

.footer-bottom {
    max-width: 1200px;
    margin: 30px auto 0;
    padding-top: 15px;
    border-top: 1px solid rgb(230, 233, 238);

    text-align: center;
    font-size: 13px;
    color: rgb(107, 114, 128);
}

.contact-section {
    background-color: rgb(255, 255, 255);
    padding: 60px 20px;
}

.contact-inner {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form input,
.contact-form textarea {
    padding: 12px 14px;
    font-size: 14px;
    border: 1px solid rgb(209, 213, 219);
    border-radius: 6px;
    outline: none;
    width: 100%;
}

.contact-form button {
    padding: 12px 14px;
    font-size: 14px;
    font-weight: bold;
    background-color: rgb(37, 99, 235);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 6px;
    width: 100%;
}

.contact-info {
    margin-top: 30px;
    font-size: 14px;
    color: rgb(107, 114, 128);
}

.contact-info p {
    margin: 5px 0;
}
  </style>
  <title>Contact Us - Expert Laundry Services</title>
</head>

<body>

  <header class="navbar">
    <div class="logo">Logo</div>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
    <div class="username">Rahul</div>
  </header>

  <section class="contact-section">
    <div class="contact-inner">
      <h1>Contact Us</h1>

      <form class="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div class="contact-info">
        <p><strong>Email:</strong> contact@laundry.com</p>
        <p><strong>Phone:</strong> +1 (234) 567-890</p>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-bottom">
      <p>&copy; 2024 Expert Laundry Services. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>
`);
      return res.end();
    } else {
        res.write("<h1>404 - Page Not Found</h1>");
        return res.end();
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
  });
