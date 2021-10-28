import { LIMIT } from "../constants";

export default function searchApi(data) {
    return new Promise((resolve, reject) => {
      const url = `http://localhost:3001/search?nameSearch=${data.name}&page=${data.activePage}&limit=${LIMIT}`;
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  