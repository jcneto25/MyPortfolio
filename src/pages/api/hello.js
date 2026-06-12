// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (process.env.NODE_ENV !== 'development') {
    return res.status(404).end();
  }
  res.status(200).json({ name: 'John Doe' });
}