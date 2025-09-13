# production
#-------build--------
FROM node:18 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# 拷贝项目文件
COPY . .

# 生成 Prisma 客户端
RUN npx prisma generate

#--------runtime-------
FROM node:18-slim

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

RUN npm prune --production

# 暴露后端端口（如使用 3000）
EXPOSE 3000

# 启动服务（可根据你实际入口文件调整）
CMD ["npm", "start"]