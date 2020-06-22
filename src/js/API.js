export default {
  pageNumber: 1,
  querySearch: '',
  apiKey: '17140088-58d7922c01a0b03576cc23a3e',
  makeFetch() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.querySearch}&page=${this.pageNumber}&per_page=12&key=${this.apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.pageNumber += 1;
        return data.hits;
      });
  },
  set query(value) {
    this.querySearch = value;
  },
  get query() {
    return this.querySearch;
  },
  resetPage() {
    this.pageNumber = 1;
  },
};
