export default function PhotoList({ $target, initialState, onScrollEnded }) {
  const $photoList = document.createElement("div");

  $target.appendChild($photoList);
  this.state = initialState;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { isLoading, totalCount, photos } = this.state;

        if (entry.isIntersecting && !isLoading) {
          console.log("entry 화면 끝", entry);
          if (totalCount > photos.length) {
            onScrollEnded();
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  let isInitialize = false;
  let $lastLi = null;

  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `
        <ul class="PhotoList__photos" style="padding-left:0"></ul>
      `;

      isInitialize = true;
    }

    const { photos } = this.state;
    const $photos = $photoList.querySelector(".PhotoList__photos");

    photos.forEach((photo) => {
      if ($photos.querySelector(`[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");

        $li.setAttribute("data-id", photo.id);
        $li.style = "list-style:none;min-height: 500px";
        $li.innerHTML = `<img style="width:100%" src="${photo.imagePath}"/>`;

        $photos.appendChild($li);
      }
    });

    const $nextLi = $photos.querySelector("li:last-child");

    if ($nextLi !== null) {
      if ($lastLi !== null) {
        observer.unobserve($lastLi);
      }

      $lastLi = $nextLi;
      observer.observe($lastLi);
    }
  };

  this.render();
}
