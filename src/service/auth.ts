import axios from 'axios';
import HttpClient from '../network/http';

export default class AuthService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  async kakaoLogin(code: string) {
    try {
      const response = await axios.get(`http://localhost:8001/oauth/kakao/callback?code=${code}`);

      return response.data;
    } catch (error) {
      console.error('Error during Kakao login:', error);
      throw error;
    }
  }
}
