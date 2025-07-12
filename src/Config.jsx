const config = {
  urlPrefix: import.meta.env.VITE_API_URL_PREFIX,
  imageDirectory: import.meta.env.VITE_IMAGE_DIRECTORY,
  tabluuu_server: import.meta.env.VITE_TABLUUU_SERVER,
  barId: new URLSearchParams(window.location.search).get("barid"),
  table: new URLSearchParams(window.location.search).get("table"),
};

export default config;
