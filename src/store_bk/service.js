
export function* request(url, options) {
    const user = yield fetch(url, options)
      .then((data) => ({ data }))
      .catch((err) => ({ err }));
      console.log(user);
    return user;

  }