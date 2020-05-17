export interface Query {
  [key: string]: any;
}
export default (reqUrl: string) => {
  reqUrl = reqUrl.replace(/\/$/, "");
  const [url, qs] = reqUrl.split("?");
  const query: Query = new Map();
  if (!qs) return { url, query };
  for (let q of qs.split("&")) {
    const [key, value] = q.split("=");
    query.set(key, value);
  }
  return { url, query };
};
