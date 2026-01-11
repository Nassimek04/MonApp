import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchTodosFetch = async () => {
  const response = await fetch(`${API_URL}/todos?_limit=10`);
  if (!response.ok) {
    throw new Error("Erreur serveur");
  }
  return response.json();
};
