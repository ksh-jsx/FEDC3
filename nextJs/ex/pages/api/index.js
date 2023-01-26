// http://localhost:3000/api
// http://localhost:3000/api?test=111
export default function handler(req, res) {
  res.status(200).json({
    name: "kim",
    email: "shkim7@naver.com",
    query: req.query,
  });
}
