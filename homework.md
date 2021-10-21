# 第一題

## => index.ejs
```
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <img src="" alt="">
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <p>My name is 游志信</p>
    <p>My student id is 209410157</p>
  </body>
</html>
```

## => index.js
```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

![](img/unknown.png)

# 第二題

## =>crown_57.js

```
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("crown_57", { title: "Express", name: "游志信", id: 209410157 });
});

module.exports = router;
```

## =>crown_57.ejs

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crown Clothing</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="header">
        <a href="/" class="logo-container">
            <img src='./assets/crown.svg' />
        </a>
        <div class="options">
            <a href="./overview.html" class="option">Shop</a>
            <a href="/shop" class="option">Contact</a>
            <a href="/signin" class="option">Sign In</a>
            <div class="cart-icon" onclick="cartToggle()">
                <img class="shopping-icon" src="./assets/shopping-bag.svg" alt="">
            </div>
            <div class="cart-dropdown">
                <div class="cart-items">
                    <div class="cart-item">
                        <img src="https://i.ibb.co/QdJwgmp/brown-cowboy.png" alt="item">
                        <div class="item-details">
                            <span class="name">Brown Cowboy</span>
                            <span class="price">4 * $35</span>
                        </div>
                    </div>
                    <div class="cart-item">
                        <img src="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png" alt="item">
                        <div class="item-details">
                            <span class="name">Blue Jean Jacket</span>
                            <span class="price">1 * $90</span>
                        </div>
                    </div>
                </div>
                <button class="custom-button">GO TO CHECKOUT</button>
            </div>
        </div>
    </div>

    <div class="homepage">
        <%= name %>
            <%= id %>
                <div class="directory-menu">
                    <div class="menu-item">
                        <img class="background-image" src="https://i.ibb.co/cvpntL1/hats.png" alt="">
                        <a href="./hats.html" class="content">
                            <h1 class="title">HATS</h1>
                            <span class="subtitle">SHOP NOW</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <img class="background-image" src="https://i.ibb.co/px2tCc3/jackets.png" alt="">
                        <a href="./jackets.html" class="content">
                            <h1 class="title">JACKETS</h1>
                            <span class="subtitle">SHOP NOW</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <img class="background-image" src="https://i.ibb.co/0jqHpnp/sneakers.png" alt="">
                        <a href="./sneakers.html" class="content">
                            <h1 class="title">SNEAKERS</h1>
                            <span class="subtitle">SHOP NOW</span>
                        </a>
                    </div>
                    <div class="large menu-item">
                        <img class="background-image" src="https://i.ibb.co/GCCdy8t/womens.png" alt="">
                        <a href="./womens.html" class="content">
                            <h1 class="title">WOMENS</h1>
                            <span class="subtitle">SHOP NOW</span>
                        </a>
                    </div>
                    <div class="large menu-item">
                        <img class="background-image" src="https://i.ibb.co/R70vBrQ/men.png" alt="">
                        <a href="./mens.html" class="content">
                            <h1 class="title">MENS</h1>
                            <span class="subtitle">SHOP NOW</span>
                        </a>
                    </div>
                </div>
    </div>

    <script>
        function cartToggle() {
            p = document.querySelector('.cart-dropdown');
            p.classList.toggle("show");
        }
    </script>
</body>
</html>
```

![](/img/unknown1.png)

# 第三題

![](img/unknown2.png)

# 第四題
![](/img/unkno1wn.png)
![](/img/un1known.png)
[Github](https://github.com/a55121684/1101-db-crown-209410157)

# 第五題

![](img/un1known.png)
![](img/u213nknown.png)
```
postgres://mdrszznangvtyx:5662bae61399230aa8842b79ea9a2f4b388ae385402fd06f7de508c3b2acf751@ec2-3-222-24-200.compute-1.amazonaws.com:5432/d5t42drnp8k8un

username:mdrszznangvtyx

password:5662bae61399230aa8842b79ea9a2f4b388ae385402fd06f7de508c3b2acf751

host:ec2-3-222-24-200.compute-1.amazonaws.com

database:5432/d5t42drnp8k8un
```

# 第六題

## => app.js
```
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
let crown_57Router = require("./routes/crown_57");
let crown2_57Router = require("./routes/crown2_57");
let api_57Router = require("./routes/api_57");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/crown_57", crown_57Router);
app.use("/crown2_57", crown2_57Router);
app.use("/api_57", api_57Router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
```

## =>crown2_57.js
```
var express = require("express");
var router = express.Router();
const crown2Controller_57 = require("../controllers/crown2Controller_57");

/* GET home page. */
router.get("/", crown2Controller_57.getCategories);

module.exports = router;
```

## =>crown2_57.ejs
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crown Clothing</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="header">
        <a href="/" class="logo-container">
            <img src='./assets/crown.svg' />
        </a>
        <div class="options">
            <a href="./overview.html" class="option">Shop</a>
            <a href="/shop" class="option">Contact</a>
            <a href="/signin" class="option">Sign In</a>
            <div class="cart-icon" onclick="cartToggle()">
                <img class="shopping-icon" src="./assets/shopping-bag.svg" alt="">
            </div>
            <div class="cart-dropdown">
                <div class="cart-items">
                    <div class="cart-item">
                        <img src="https://i.ibb.co/QdJwgmp/brown-cowboy.png" alt="item">
                        <div class="item-details">
                            <span class="name">Brown Cowboy</span>
                            <span class="price">4 * $35</span>
                        </div>
                    </div>
                    <div class="cart-item">
                        <img src="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png" alt="item">
                        <div class="item-details">
                            <span class="name">Blue Jean Jacket</span>
                            <span class="price">1 * $90</span>
                        </div>
                    </div>
                </div>
                <button class="custom-button">GO TO CHECKOUT</button>
            </div>
        </div>
    </div>
    <p>
        <%= title %> --<%= name %>
                <%= id %>
    </p>
    <div class="homepage">
        <div class="directory-menu">
            <% data.forEach((item)=>{ %>
                <div class="large menu-item">
                    <img class="background-image" src=<%=item.remote_url %> alt="">
                    <a href="./mens.html" class="content">
                        <h1 class="title">
                            <%= item.name %>
                        </h1>
                        <span class="subtitle">SHOP NOW</span>
                    </a>
                </div>
                <% })%>
        </div>
    </div>

    <script>
        function cartToggle() {
            p = document.querySelector('.cart-dropdown');
            p.classList.toggle("show");
        }
    </script>
</body>
</html>
```
![](img/123123.png)

# 第八題

![](img/api.png)
[Github](https://github.com/a55121684/1101-db-crown-209410157)

# 第九題
![](img/api.png)