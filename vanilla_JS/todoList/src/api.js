export function request(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      } else {
        reject(xhr.statusText);
      }
    });
    xhr.addEventListener("error", (e) => failCallback(xhr.statusText));

    xhr.open("GET", url);
    xhr.send();
  });

  /* XMLHttpRequest 사용 코드
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallback(JSON.parse(xhr.responseText));
      }
    } else {
      failCallback(xhr.statusText);
    }
  });
  xhr.addEventListener("error", (e) => failCallback(xhr.statusText));

  xhr.open("GET", url);
  xhr.send();
  */
}
