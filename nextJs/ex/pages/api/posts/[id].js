// http://localhost:3000/api/posts/1
import data from "../data.json";
export default function handler(req, res) {
  const id = parseInt(req.query.id);
  const post = data.find((item) => item.id === id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).send();
  }
}
