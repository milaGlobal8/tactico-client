// ユーザーの入力に応じたアクションの設定
// ログイン
export const LoginStart = (user) => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const LoginError = (user) => ({
  type: "LOGIN_ERROR",
  payload: error,
});

// ログアウト
export const LogoutStart = (user) => ({
  type: "LOGOUT_START",
});
export const LogoutSuccess = (user) => ({
  type: "LOGOUT_SUCCESS",
  payload: user,
});
export const LogoutError = (user) => ({
  type: "LOGOUT_ERROR",
  payload: error,
});

// 更新
export const UpdateStart = (data) => ({
  type: "UPDATE_START",
});
export const UpdateSuccess = (data) => ({
  type: "UPDATE_SUCCESS",
  payload: data,
});
export const UpdateError = (data) => ({
  type: "UPDATE_ERROR",
  payload: error,
});
