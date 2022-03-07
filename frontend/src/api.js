import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class ShoplyApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/api/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getPost(id) {
    let res = await this.request(`posts/${id}`);
    return res;
  }

  static async editPost(id, data) {
    let res = await this.request(`posts/${id}`, data, "put");
    return res;
  }

  static async addPost(data) {
    let res = await this.request(`posts`, data, "post");
    return res;
  }

  static async deletePost(id) {
    let res = await this.request(`posts/${id}`, {}, "delete");
    return res;
  }

  static async getTitles() {
    let res = await this.request(`posts`);
    return res;
  }

  static async changeVote(id, direction) {
    let res = await this.request(`posts/${id}/vote/${direction}`, {}, "post");
    return res;
  }

  static async addComment(postId, text) {
    let res = await this.request(`posts/${postId}/comments`, { text }, "post");
    return res;
  }

  static async removeComment(postId, id) {
    let res = await this.request(
      `posts/${postId}/comments/${id}`,
      {},
      "delete"
    );
    return res;
  }
}

export default ShoplyApi;
