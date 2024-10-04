var express = require("express");
var router = express.Router();
var cors = require("cors"); // 引入 cors

var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // 一些旧版浏览器 (如IE11) 可能会对204状态码有问题
};

router.use(cors(corsOptions)); // 使用 cors 中间件

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

module.exports = router;
