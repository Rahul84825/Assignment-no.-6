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
  background-color: #f8faff;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    color: #6d8595;
    padding: 0 1.5vw;
}

.footer {
    background-color: #f6f7f9;   
    color: #374151;              
    padding: 40px 20px;
}

.footer-bottom {
    max-width: 1200px;
    margin: 30px auto 0;
    padding-top: 15px;
    border-top: 1px solid #e6e9ee;

    text-align: center;
    font-size: 13px;
    color: #6b7280;
}

.hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 8%;
    background: #ffffff;
}

.left-div {
    width: 50%;
}

.left-div h1 {
    font-size: 38px;
    margin-bottom: 20px;
    color: #222;
    line-height: 1.3;
}

.half_heading {
    color: #2563eb;
}

.span {
    color: #1e40af;
}

.left-div p {
    color: #555;
    font-size: 16px;
    margin-bottom: 25px;
    line-height: 1.6;
}

.book-button {
    padding: 12px 20px;
    background-color: #2563eb;
    cursor: pointer;
    color: #fff;
    border-radius: 4px;
    border: none;
    font-size: 15px;
}

.book-button:hover {
    background-color: #1d4ed8;
}

.right-div {
    width: 45%;
    text-align: center;
}

.right-div img {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
}

.quality-section {
    padding: 60px 8%;
    background-color: #f5f7fa;
}

.quality-inner {
    max-width: 1100px;
    margin: 0 auto;
}

.quality-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.quality-card {
    width: 240px;
    background: #ffffff;
    padding: 25px 20px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e5e7eb;
}

.quality-icon {
    font-size: 30px;
    margin-bottom: 15px;
}

.quality-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #222;
}

.quality-card p {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
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
      <button class="book-button" onclick="bookService()">Book a service today!</button>
    </div>
    <div class="right-div">
      <img src="resources/css/img/machine.jpeg" alt="Washing Machine Icon">
    </div>
  </section>

    <section class="quality-section">
    <div class="quality-inner">
      <div class="quality-cards">
        <div class="quality-card">
          <div class="quality-icon">📋</div>
          <h3>Premium Services</h3>
          <p>We offer premium dry cleaning to swift wash and fold, with expert care and attention to detail.</p>
        </div>
        <div class="quality-card">
          <div class="quality-icon">💬</div>
          <h3>Quick Support</h3>
          <p>24/7 customer support available to assist you with inquiries, feedback, or any laundry needs.</p>
        </div>
        <div class="quality-card">
          <div class="quality-icon">🚚</div>
          <h3>Timely Delivery</h3>
          <p>Guaranteed on-time pickup and delivery of your clothes with professional handling throughout.</p>
        </div>
        <div class="quality-card">
          <div class="quality-icon">💰</div>
          <h3>Affordable Prices</h3>
          <p>Competitive pricing without compromising on quality. We offer great value for premium services.</p>
        </div>
      </div>
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
  background-color: #f8faff;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    color: #6d8595;
    padding: 0 1.5vw;
}

.footer {
    background-color: #f6f7f9;   
    color: #374151;              
    padding: 40px 20px;
}

.footer-bottom {
    max-width: 1200px;
    margin: 30px auto 0;
    padding-top: 15px;
    border-top: 1px solid #e6e9ee;

    text-align: center;
    font-size: 13px;
    color: #6b7280;
}


.about-section {
    padding: 50px 20px;
    background: #f4f6f8;
}

.about-inner {
    width: 80%;
    max-width: 750px;
    margin: 0 auto;
}

.about-inner h1 {
    font-size: 26px;
    margin-bottom: 20px;
    color: #222;
    text-align: center;
}

.about-inner p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 18px;
    color: #444;
    text-align: center;
}

.about-inner strong {
    color: #000;
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
  background-color: #f8faff;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
    color: #6d8595;
    padding: 0 1.5vw;
}

.footer {
    background-color: #f6f7f9;   
    color: #374151;              
    padding: 40px 20px;
}

.footer-bottom {
    max-width: 1200px;
    margin: 30px auto 0;
    padding-top: 15px;
    border-top: 1px solid #e6e9ee;

    text-align: center;
    font-size: 13px;
    color: #6b7280;
}

.contact-section {
    background-color: #ffffff;
    padding: 60px 20px;
}

.contact-inner {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.contact-inner h1 {
    font-size: 28px;
    margin-bottom: 30px;
    color: #0f172a;
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
    border: 1px solid #d1d5db;
    border-radius: 6px;
    outline: none;
    width: 100%;
}

.contact-form button {
    padding: 12px 14px;
    font-size: 14px;
    font-weight: bold;
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s ease;
    width: 100%;
}

.contact-form button:hover {
    background-color: #1d4ed8;
}


.contact-info {
    margin-top: 30px;
    font-size: 14px;
    color: #6b7280;
}

.contact-info p {
    margin: 5px 0;
}
  </style>
  <title>Contact Us - Expert Laundry Services</title>

  <!-- SAME CSS -->
  <link rel="stylesheet" href="/style.css" />
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
