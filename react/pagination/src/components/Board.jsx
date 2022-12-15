const Board = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          {article.id} | {article.title}
        </li>
      ))}
    </ul>
  );
};

export default Board;
