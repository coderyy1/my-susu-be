import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index.js';

// 当前文件的目录路径（兼容 ES Modules）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 加载正确的 .env 文件（根据 NODE_ENV）
dotenv.config({
  path: path.resolve(__dirname, '..', `.env.${process.env.NODE_ENV || 'development'}`)
});

// 使用环境变量
const PORT = process.env.PORT || 3000;

// 测试
console.log('Loaded DB_URL:', process.env.DB_URL);


// 初始化
const app = express();

// 中间件（如解析 JSON）
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ['http://localhost:5173'], // 允许的前端地址
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// 公开访问 public 目录 -> 静态资源
app.use('/static', express.static(path.resolve(__dirname, '..', 'public')));

// 路由
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});