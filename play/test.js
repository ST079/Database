const data = [
  { name: "kusum1" },
  { name: "kusum2" },
  { name: "kusum3" },
  { name: "kusum4" },
  { name: "kusum5" },
  { name: "kusum6" },
  { name: "kusum7" },
  { name: "kusum8" },
  { name: "kusum9" },
  { name: "kusum10" },
];
const page = 3;
const limit = 4;
///write js that basically creates pagination
const pagination = (data, limit, page) => {
  const dataLength = data.length;
  const startIndex = (+page - 1) * +limit;
  const endIndex = +startIndex + +limit;
  console.log({ dataLength, startIndex, endIndex });
  //either use loop or use methods
  //   for (let i = startIndex; i <= endIndex; i++) {
  //     console.log(data[i]);
  //   }
  return data.slice(startIndex, endIndex);
};
const result = pagination(data, limit, page);
console.log({ result });
