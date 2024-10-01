要讓 Google 表單在送出後導向您想要的畫面，您可以採取以下幾個步驟來實現這一功能：

## 設定 Google 表單的回覆頁面

### **1. 開啟表單設定**

-   在 Google 表單中，打開您想要修改的表單。
-   點擊右上角的「設定」圖示。

### **2. 自訂確認訊息**

-   在「設定」選項中，找到「呈現方式」部分。
-   在「確認訊息」欄位中，您可以輸入自訂的訊息，這是用戶提交表單後看到的內容。雖然這不會直接導向新的網頁，但可以提供用戶所需的指引或信息[2][4]。

### **3. 使用外掛進行更高級的操作**

如果您需要更進一步的功能，例如在提交後自動重定向到特定網址，您可能需要使用一些外掛或自訂程式碼。以下是推薦的一些方法：

-   **Simply Send 外掛**：這個外掛可以在用戶提交表單後自動發送確認信，並且能夠在信件中包含連結，讓用戶點擊後導向您指定的頁面[3]。
-   **自訂 HTML 表單**：如果您有一些編程基礎，可以考慮創建一個自訂的 HTML 表單，然後使用 AJAX 將數據提交到 Google 表單的 POST URL。這樣您可以在成功提交後使用 JavaScript 進行重定向。例如：

```javascript
$.ajax({
    type: "POST",
    url: "您的 Google 表單 POST URL",
    data: { "entry.XXXX": "填寫的值" },
    success: function () {
        window.location.href = "您的目標網址";
    },
});
```

🌟 這裡的 data 要用 formData 的方式 🌟

在這段代碼中，`entry.XXXX` 是您從 Google 表單中獲取的欄位名稱，而 `您的目標網址` 是您希望用戶重定向到的地址[1][3]。

## 總結

透過以上步驟，您可以有效地設定 Google 表單在送出後導向特定畫面或提供自訂訊息。若需要進一步功能，可以考慮使用外掛或自訂程式碼來達成更高級的需求。

Citations:
[1] https://www.letswrite.tw/custom-google-form/
[2] https://support.google.com/docs/answer/2839588?hl=zh-Hant
[3] https://www.playpcesor.com/2016/03/google-form-simply-send.html
[4] https://support.google.com/a/users/answer/9303072?hl=zh-Hant
[5] https://www.playpcesor.com/2014/10/google-form-tips-10.html
[6] https://digital-transformation.media/googleworkspace/google-forms/googlesheets-questionnaire/
[7] https://gary1491.pixnet.net/blog/post/115938860
[8] https://animationgame.pixnet.net/blog/post/323414494
