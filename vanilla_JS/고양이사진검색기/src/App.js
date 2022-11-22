import { request } from "./api";
import debounce from "./component/debounce";
import Header from "./component/Header";
import SearchResults from "./component/SearchResults";
import SuggestKeywords from "./component/suggestKeywords";
import { getItem, setItem } from "./storage";

export default function App({ $target }) {
  this.state = {
    keyword: "",
    keywords: [],
    catImages: [],
  };

  this.cache = getItem("keywords_cache", {});

  const header = new Header({
    $target,
    initialState: { keyword: this.state.keyword },
    onKeywordInput: debounce(async (keyword) => {
      if (keyword.trim().length > 1) {
        let keywords = null;

        if (this.cache[keyword]) {
          keywords = this.cache[keyword];
        } else {
          keywords = await request(`/keywords?q=${keyword}`);
          console.log(keywords);
          this.cache[keyword] = keywords;
          console.log(this.cache);
          setItem("keywords_cache", this.cache);
        }

        this.setState({
          ...this.state,
          keyword,
          keywords,
        });
      }
    }, 300),
    onEnter: () => {
      fetchCatsImage();
    },
  });

  const suggestKeywords = new SuggestKeywords({
    $target,
    initialState: {
      keywords: this.state.keywords,
      cursor: 0,
    },
    onKeywordSelect: (keyword) => {
      this.setState({
        ...this.state,
        keyword,
        keywords: [],
      });
      fetchCatsImage();
    },
  });

  const searchResults = new SearchResults({
    $target,
    initialState: this.state.catImages,
  });

  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      keyword: this.state.keyword,
    });

    suggestKeywords.setState({
      keywords: this.state.keywords,
      cursor: 0,
    });

    if (this.state.catImages.length > 0) {
      searchResults.setState(this.state.catImages);
    }
  };

  const fetchCatsImage = async () => {
    const { data } = await request(`/search?q=${this.state.keyword}`);

    this.setState({
      ...this.state,
      catImages: data,
      keywords: [],
    });
  };
}
