import { request } from "./api";
import PhotoList from "./PhotoList";

export default function App({ $target }) {
  const $h1 = document.createElement("h1");

  $h1.innerText = "Cat Photos";
  $target.appendChild($h1);

  this.state = {
    limit: 5,
    start: 0,
    photos: [],
  };

  this.setState = (nextState) => {
    this.state - nextState;
    photoListComponent.setState(nextState.photos);
  };

  const photoListComponent = new PhotoList({
    $target,
    initialState: this.state.photos,
  });

  const fetchPhotos = async () => {
    const photos = await request(`/cat-photos?_limit=5&_start=0`);
    this.setState({
      ...this.state,
      photos,
    });
  };

  fetchPhotos();
}
