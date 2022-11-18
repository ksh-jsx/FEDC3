import { request } from "./api";
import PhotoList from "./PhotoList";

export default function App({ $target }) {
  const $h1 = document.createElement("h1");

  $h1.innerText = "Cat Photos";
  $h1.style.textAlign = "center";
  $target.appendChild($h1);

  this.state = {
    limit: 5,
    nextstart: 0,
    photos: [],
    totalCount: 0,
    isLoading: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    photoListComponent.setState({
      isLoading: this.state.isLoading,
      photos: this.state.photos,
      totalCount: this.state.totalCount,
    });
  };

  const photoListComponent = new PhotoList({
    $target,
    initialState: {
      isLoading: this.state.isLoading,
      photos: this.state.photos,
      totalCount: this.state.totalCount,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const { limit, nextstart } = this.state;
    const photos = await request(`/cat-photos?_limit=${limit}&_start=${nextstart}`);

    this.setState({
      ...this.state,
      nextstart: nextstart + limit,
      photos: [...this.state.photos, ...photos],
    });

    this.setState({
      ...this.state,
      isLoading: false,
    });
  };

  const initialize = async () => {
    const totalCount = await request("/cat-photos/count");

    this.setState({
      ...this.state,
      totalCount,
    });

    await fetchPhotos();
  };

  initialize();
}
