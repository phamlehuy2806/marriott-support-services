export interface Admin {
  _id?: string; // Type string
  avatarPath: string | "";
  displayName: string; // Type string name
  userName: string; // Type string, max 15
  email: string; // Type gmail
  phone: string; // Type phone, min 8, max 11 characters
  password?: string; // Type string, min 6, max 20 characters
  confirmPassword?: string; // Type string, min 6, max 20 characters
  refreshToken?: string; // refresh token from jwt
}
