export default function ({ $axios }, inject) {
  class ApiClient {
    constructor() {
      this.client = $axios.create({
        baseURL:
          process.env.NODE_ENV === 'production'
            ? 'https://api.podfetch.app/v1/'
            : 'http://localhost:3333/v1/',
      });
    }

    getStats() {
      return this.client.$get('podcasts/stats');
    }
  }
  const apiClient = new ApiClient();
  inject('api', apiClient);
}
