import { useState } from "react";
import EmojiList from "./components/EmojiList";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import emojiJson from "./data.json";

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} keyword={keyword} />
    </div>
  );
}

export default App;
