import axios from "axios";

// Actual API key and URL
const API_KEY =
  "rm7LgtKH0jJkipiiSDKF8jOj0FnOR6a2zFGpVZFR3ubjVHhLsrZViiipbipiiFk8TMj7IR";
const API_URL = "https://release.aws.thmi.cloud/publicapi/swagger/";

// Function to fetch projects from the API
export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

// Function to fetch pages for a specific project from the API
export const getPages = async (projectId) => {
  const response = await axios.get(`${API_URL}/projects/${projectId}/pages`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};
