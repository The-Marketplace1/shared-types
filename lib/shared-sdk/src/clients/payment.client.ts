import { BaseClient, type ClientConfig, type RequestOptions } from "./base-client.js";
import type {
  CreatePaymentIntentRequest,
  PaymentIntentResponse,
  ConfirmPaymentRequest,
  RefundPaymentRequest,
  ReleaseEscrowRequest,
  PaymentResponse,
  EscrowResponse,
} from "../dto/payment.dto.js";

export class PaymentClient extends BaseClient {
  constructor(config: ClientConfig) {
    super(config);
  }

  async createIntent(body: CreatePaymentIntentRequest, opts?: RequestOptions): Promise<PaymentIntentResponse> {
    const { data } = await this.post<PaymentIntentResponse>("/payments/intent", body, opts);
    return data;
  }

  async confirm(body: ConfirmPaymentRequest, opts?: RequestOptions): Promise<PaymentResponse> {
    const { data } = await this.post<PaymentResponse>("/payments/confirm", body, opts);
    return data;
  }

  async getById(id: string, opts?: RequestOptions): Promise<PaymentResponse> {
    const { data } = await this.get<PaymentResponse>(`/payments/${id}`, opts);
    return data;
  }

  async refund(body: RefundPaymentRequest, opts?: RequestOptions): Promise<PaymentResponse> {
    const { data } = await this.post<PaymentResponse>("/payments/refund", body, opts);
    return data;
  }

  async releaseEscrow(body: ReleaseEscrowRequest, opts?: RequestOptions): Promise<EscrowResponse> {
    const { data } = await this.post<EscrowResponse>("/escrow/release", body, opts);
    return data;
  }

  async getEscrow(id: string, opts?: RequestOptions): Promise<EscrowResponse> {
    const { data } = await this.get<EscrowResponse>(`/escrow/${id}`, opts);
    return data;
  }
}
