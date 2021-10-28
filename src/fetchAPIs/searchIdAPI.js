export default function searchIdApi(data) {
    return new Promise((resolve, reject) => {
      const url = `http://localhost:3001/searchId/${data}`;
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
  