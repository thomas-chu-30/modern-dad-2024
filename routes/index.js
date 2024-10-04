var express = require("express");
var router = express.Router();
require("dotenv").config();

const ecpay_payment = require("ecpay_aio_nodejs");
const { MERCHANTID, HASHKEY, HASHIV, HOST } = process.env;
const options = {
    OperationMode: "Test", //Test or Production
    MercProfile: {
        MerchantID: MERCHANTID,
        HashKey: HASHKEY,
        HashIV: HASHIV,
    },
    IgnorePayment: [
        //    "Credit",
        //    "WebATM",
        //    "ATM",
        //    "CVS",
        //    "BARCODE",
        //    "AndroidPay"
    ],
    IsProjectContractor: false,
};
console.log(ecpay_payment);

/* GET home page. */

router.get("/", function (req, res, next) {
    const MerchantTradeDate = new Date().toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "UTC",
    });
    console.log("MerchantTradeDate", MerchantTradeDate);

    let base_param = {
        MerchantTradeNo: null, //請帶20碼uid, ex: f0a0d7e9fae1bb72bc93
        MerchantTradeDate,
        TotalAmount: "100",
        TradeDesc: "測試交易描述",
        ItemName: "測試商品等",
        ReturnURL: `${HOST}/return`,
        ClientBackURL: `${HOST}/clientReturn`,
    };
    const create = new ecpay_payment(options);
    const result = create.create(base_param);
    console.log("result", result);
    res.render("index", {
        title: `Express ${MerchantTradeDate}`,
        description: base_param,
    });
});

router.get("/test", function (req, res) {
    return res.send({ status: "ok" });
});

module.exports = router;
