import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { useRef } from "react";

const style = css`
  color: hotpink;
`;

const Pagination = ({ defaultPage, limit, total, onChange }) => {
  const tmpName = useRef(null);
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handleChangePage = (newPage) => {
    onChange(newPage);
    setPage(newPage);
  };

  return (
    <div>
      <button
        onClick={() => page !== 0 && handleChangePage(page - 1)}
        className="tmp"
        ref={tmpName}
      >
        이전
      </button>
      {Array.from(new Array(totalPage), (_, i) => i).map((i) => (
        <button
          key={i}
          style={{ backgroundColor: page === i ? "red" : undefined }}
          onClick={() => handleChangePage(i)}
          css={style}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => page + 1 !== totalPage && handleChangePage(page + 1)}>다음</button>
    </div>
  );
};

export default Pagination;
