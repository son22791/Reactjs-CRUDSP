import { LIMIT } from "../constants";

export default function paginationApi(data) {
    return new Promise((resolve, reject) => {
      const url = `http://localhost:3001/pagination?limit=${LIMIT}&page=${data}`;
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
  