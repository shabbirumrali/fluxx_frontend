import axios from "axios";
import appConfig from "../config";
class APIUtil {
  constructor(root = appConfig.config().baseUrl) {
    this.root = root;
  }

  /**
   * Get request
   *
   * @param path
   * @returns {axios.promise}
   */
  get(path, config = {}) {
    return axios.get(`${this.root}/${path}`, config);
  }

  /**
   * Post request
   *
   * @param path
   * @param data
   * @param config
   * @returns {axios.Promise}
   */
  post(path, data, config = {}) {
    return axios.post(`${this.root}/${path}`, data, config);
  }

  /**
   * Put request
   *
   * @param path
   * @param data
   * @param config
   * @returns {axios.Promise}
   */
  put(path, data, config = {}) {
    return axios.put(`${this.root}/${path}`, data, config);
  }

  /**
   * Patch request
   *
   * @param path
   * @param data
   * @param config
   * @returns {axios.Promise}
   */
  patch(path, data, config = {}) {
    return axios.patch(`${this.root}/${path}`, data, config);
  }

  /**
   * Delete request
   *
   * @param path
   * @param data
   * @param config
   * @returns {axios.Promise}
   */
  delete(path, data, config = {}) {
    return axios.delete(`${this.root}/${path}`, data, config);
  }
}

export default APIUtil;
