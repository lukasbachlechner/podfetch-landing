export default function ({ $axios, $config }, inject) {
  class ApiClient {
    constructor() {
      this.client = $axios.create({
        baseURL: $config.apiUrl,
      });
    }

    getStats() {
      return this.client.$get('stats');
    }

    getTrending(params) {
      return this.client.$get('podcasts/trending', { params });
    }
  }
  const apiClient = new ApiClient();
  inject('api', apiClient);
}
