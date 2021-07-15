class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  search(query) {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD7Yr7cl7AZTJxyBb77ZN7huDPYxT4ls68&part=snippet&maxResults=25&q=${query}&key=AIzaSyD7Yr7cl7AZTJxyBb77ZN7huDPYxT4ls68`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => items);
  }

  mostPopular() {
    return fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0",
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }
}

export default Youtube;
