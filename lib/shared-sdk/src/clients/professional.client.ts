import { BaseClient, type ClientConfig, type RequestOptions } from "./base-client.js";
import type {
  CreateProfessionalProfileRequest,
  UpdateProfessionalProfileRequest,
  SearchProfessionalsRequest,
  ProfessionalResponse,
  SearchProfessionalsResponse,
} from "../dto/professional.dto.js";

export class ProfessionalClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async create(body: CreateProfessionalProfileRequest, opts?: RequestOptions): Promise<ProfessionalResponse> {
    const { data } = await this.post<ProfessionalResponse>("/professionals", body, opts);
    return data;
  }

  async getById(id: string, opts?: RequestOptions): Promise<ProfessionalResponse> {
    const { data } = await this.get<ProfessionalResponse>(`/professionals/${id}`, opts);
    return data;
  }

  async getByUserId(userId: string, opts?: RequestOptions): Promise<ProfessionalResponse> {
    const { data } = await this.get<ProfessionalResponse>(`/professionals/user/${userId}`, opts);
    return data;
  }

  async update(id: string, body: UpdateProfessionalProfileRequest, opts?: RequestOptions): Promise<ProfessionalResponse> {
    const { data } = await this.patch<ProfessionalResponse>(`/professionals/${id}`, body, opts);
    return data;
  }

  async search(params: SearchProfessionalsRequest = {}, opts?: RequestOptions): Promise<SearchProfessionalsResponse> {
    const qs = new URLSearchParams(params as Record<string, string>).toString();
    const { data } = await this.get<SearchProfessionalsResponse>(`/professionals/search${qs ? `?${qs}` : ""}`, opts);
    return data;
  }
}
