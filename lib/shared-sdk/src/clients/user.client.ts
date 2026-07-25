import { BaseClient, type ClientConfig, type RequestOptions } from "./base-client.js";
import type {
  UpdateUserRequest,
  UpdateUserStatusRequest,
  ListUsersRequest,
  UserResponse,
  ListUsersResponse,
} from "../dto/user.dto.js";

export class UserClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async getMe(opts?: RequestOptions): Promise<UserResponse> {
    const { data } = await this.get<UserResponse>("/users/me", opts);
    return data;
  }

  async getById(id: string, opts?: RequestOptions): Promise<UserResponse> {
    const { data } = await this.get<UserResponse>(`/users/${id}`, opts);
    return data;
  }

  async update(id: string, body: UpdateUserRequest, opts?: RequestOptions): Promise<UserResponse> {
    const { data } = await this.patch<UserResponse>(`/users/${id}`, body, opts);
    return data;
  }

  async updateStatus(id: string, body: UpdateUserStatusRequest, opts?: RequestOptions): Promise<UserResponse> {
    const { data } = await this.patch<UserResponse>(`/users/${id}/status`, body, opts);
    return data;
  }

  async list(params: ListUsersRequest = {}, opts?: RequestOptions): Promise<ListUsersResponse> {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    const { data } = await this.get<ListUsersResponse>(`/users${qs ? `?${qs}` : ""}`, opts);
    return data;
  }

  async deleteUser(id: string, opts?: RequestOptions): Promise<void> {
    await this.delete(`/users/${id}`, opts);
  }
}
