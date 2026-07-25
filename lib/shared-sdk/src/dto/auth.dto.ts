import type { User } from "../types/user.js";

// --- Requests ---

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  name: string;
  email: string;
  phone: string;
  password: string;
  role?: "customer" | "professional";
};

export type RefreshTokenRequest = {
  refreshToken: string;
};

export type ForgotPasswordRequest = {
  email: string;
};

export type ResetPasswordRequest = {
  token: string;
  newPassword: string;
};

export type VerifyOtpRequest = {
  userId: string;
  otp: string;
};

export type ChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

// --- Responses ---

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type LoginResponse = {
  tokens: AuthTokens;
  user: User;
};

export type RegisterResponse = {
  user: User;
  message: string;
};

export type RefreshTokenResponse = {
  tokens: AuthTokens;
};

export type ForgotPasswordResponse = {
  message: string;
};
