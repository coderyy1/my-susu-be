import prisma from '../prisma.js';

// (page: number, pageSize: number, type: string)
export const getPhotoList = async (req, res) => {
  const page = parseInt(req.body?.page) || 1;
  const pageSize = parseInt(req.body?.pageSize) || 3;
  const type = req.body?.type || 'bodensee';

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const where = { type };

  try {
    const [total, photoList] = await Promise.all([
      prisma.photo.count({ where }),
      prisma.photo.findMany({
        where,
        skip,
        take,
      })
    ]);

    res.json({
      code: 1,
      msg: '查询成功！',
      data: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
        photoList,
      }
    });
  } catch (err) {
    res.json({
      code: 0,
      msg: '网络出了点问题，请稍后重试....',
      data: {},
    });
  }
};