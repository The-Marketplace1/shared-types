import { BaseClient, type ClientConfig, type RequestOptions } from "./base-client.js";
import type {
  LoginRequest, LoginResponse,
  RegisterRequest, RegisterResponse,
  RefreshTokenRequest, RefreshTokenResponse,
  ForgotPasswordRequest, ForgotPasswordResponse,
  ResetPasswordRequest,
  VerifyOtpRequest,
  ChangePasswordRequest,
} from "../dto/auth.dto.js";

export class AuthClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async login(body: LoginRequest, opts?: RequestOptions): Promise<LoginResponse> {
    const { data } = await this.post<LoginResponse>("/auth/login", body, opts);
    return data;
  }

  async register(body: RegisterRequest, opts?: RequestOptions): Promise<RegisterResponse> {
    const { data } = await this.post<RegisterResponse>("/auth/register", body, opts);
    return data;
  }

  async refreshToken(body: RefreshTokenRequest, opts?: RequestOptions): Promise<RefreshTokenResponse> {
    const { data } = await this.post<RefreshTokenResponse>("/auth/refresh", body, opts);
    return data;
  }

  async forgotPassword(body: ForgotPasswordRequest, opts?: RequestOptions): Promise<ForgotPasswordResponse> {
    const { data } = await this.post<ForgotPasswordResponse>("/auth/forgot-password", body, opts);
    return data;
  }

  async resetPassword(body: ResetPasswordRequest, opts?: RequestOptions): Promise<{ message: string }> {
    const { data } = await this.post<{ message: string }>("/auth/reset-password", body, opts);
    return data;
  }

  async verifyOtp(body: VerifyOtpRequest, opts?: RequestOptions): Promise<{ message: string }> {
    const { data } = await this.post<{ message: string }>("/auth/verify-otp", body, opts);
    return data;
  }

  async changePassword(body: ChangePasswordRequest, opts?: RequestOptions): Promise<{ message: string }> {
    const { data } = await this.post<{ message: string }>("/auth/change-password", body, opts);
    return data;
  }

  async logout(opts?: RequestOptions): Promise<void> {
    await this.post("/auth/logout", undefined, opts);
  }
}
