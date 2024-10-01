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

router.post("/", function (req, res, next) {
    res.json({ title: `Express ${JSON.stringify(req.body)}` });
});

const sendLineNotify = (token, payload) => {
    const headers = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
    });

    // 构建消息内容
    const message = payload.message;

    // 构建请求体
    const formData = new URLSearchParams();
    formData.append("message", message);

    // 发送 POST 请求
    return fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: headers,
        body: formData,
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("LINE Notify Response:", data);
        })
        .catch((error) => {
            console.error("Error sending LINE Notify message:", error);
        });
};

router.post("/line-notify", function (req, res, next) {
    try {
        sendLineNotify(req.body.token, req.body.payload);
        res.json({ message: "Line Notify sent" });
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;
