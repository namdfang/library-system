export function getLocalRefreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  return refreshToken;
}
export function getLocalAccessToken() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
}
export function updateLocalAccessToken(accessToken) {
  localStorage.setItem("accessToken", accessToken);
}
export function updateLocalRefreshToken(refreshToken) {
  const now = new Date();
  const item = {
    value: refreshToken,
    expiry: now.getTime() + 5000,
  };
  localStorage.setItem("refreshToken", JSON.stringify(item));
}

export function removeAccessToken() {
  localStorage.removeItem("accessToken");
}
export function removeRefreshToken() {
  localStorage.removeItem("refreshToken");
}
