export const constructId = (url, search) => {
  let str = url.substr(url.indexOf(search));
  let id = str.split('/')[1];

  return id;
};
