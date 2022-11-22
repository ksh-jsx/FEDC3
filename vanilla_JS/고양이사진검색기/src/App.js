import { request } from "./api";
import Header from "./component/Header";
import SuggestKeywords from "./component/suggestKeywords";

export default function App({ $target }) {
  this.state = {
    keyword: "",
    keywords: [],
    cursor: 0,
  };

  const header = new Header({
    $target,
    initialState: { keyword: this.state.keyword },
    onKeywordInput: async (keyword) => {
      if (keyword.trim().length > 1) {
        const keywords = await request(`/keywords?q=${keyword}`);

        this.setState({
          ...this.state,
          keyword,
          keywords,
        });
      }
    },
  });

  const suggestKeywords = new SuggestKeywords({
    $target,
    initialState: {
      keywords: this.state.keywords,
      cursor: this.state.cursor,
    },
    onKeywordSelect: (keyword) => {
      this.setState({
        ...this.state,
        keyword,
      });
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      keyword: this.state.keyword,
    });

    suggestKeywords.setState({
      keywords: this.state.keywords,
      cursor: this.state.cursor,
    });
  };
}
