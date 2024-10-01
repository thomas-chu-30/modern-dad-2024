# 使用 Node.js 官方 LTS 版本作為基礎映像
FROM node:14

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝專案依賴
RUN npm install

# 複製專案檔案到工作目錄
COPY . .

# 暴露應用程式埠號
EXPOSE 3000

# 啟動應用程式
CMD ["npm", "start"]