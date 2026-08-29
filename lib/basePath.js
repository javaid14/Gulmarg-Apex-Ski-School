export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/Gulmarg-Apex-Ski-School" : "";

export function withBasePath(path) {
  if (!path) return path;
  if (BASE_PATH !== "" && path.startsWith(BASE_PATH)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
