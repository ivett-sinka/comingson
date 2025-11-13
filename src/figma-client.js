import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class FigmaClient {
  constructor(accessToken) {
    this.accessToken = accessToken || process.env.FIGMA_ACCESS_TOKEN;
    this.baseURL = 'https://api.figma.com/v1';

    if (!this.accessToken) {
      throw new Error('Figma access token is required');
    }

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'X-Figma-Token': this.accessToken
      }
    });
  }

  /**
   * Get authenticated user information
   */
  async getMe() {
    try {
      const response = await this.client.get('/me');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get a file by key
   * @param {string} fileKey - Figma file key
   */
  async getFile(fileKey) {
    try {
      const response = await this.client.get(`/files/${fileKey}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get file comments
   * @param {string} fileKey - Figma file key
   */
  async getComments(fileKey) {
    try {
      const response = await this.client.get(`/files/${fileKey}/comments`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get team projects
   * @param {string} teamId - Figma team ID
   */
  async getTeamProjects(teamId) {
    try {
      const response = await this.client.get(`/teams/${teamId}/projects`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get project files
   * @param {string} projectId - Figma project ID
   */
  async getProjectFiles(projectId) {
    try {
      const response = await this.client.get(`/projects/${projectId}/files`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Handle API errors
   */
  handleError(error) {
    if (error.response) {
      const { status, data } = error.response;
      console.error('Response data:', JSON.stringify(data, null, 2));
      console.error('Response status:', status);
      console.error('Response headers:', error.response.headers);
      return new Error(`Figma API Error (${status}): ${JSON.stringify(data)}`);
    } else if (error.request) {
      return new Error('No response from Figma API');
    } else {
      return new Error(`Request error: ${error.message}`);
    }
  }
}

export default FigmaClient;
