import { useState } from "react";
import { css } from "@emotion/react";

const style = css`
  color: hotpink;
`;

const Pagination = ({ defaultPage, limit, total, onChange }) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handleCahngePage = (newPage) => {
    onChange(newPage);
    setPage(newPage);
  };

  return (
    <div>
      <button onClick={() => page !== 0 && handleCahngePage(page - 1)}>이전</button>
      {Array.from(new Array(totalPage), (_, i) => i).map((i) => (
        <button
          key={i}
          style={{ backgroundColor: page === i ? "red" : undefined }}
          onClick={() => handleCahngePage(i)}
          css={style}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => page + 1 !== totalPage && handleCahngePage(page + 1)}>다음</button>
    </div>
  );
};

export default Pagination;
