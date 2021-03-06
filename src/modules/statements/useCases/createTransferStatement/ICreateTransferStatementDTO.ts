import { OperationType } from "../../enums/OperationTypeEnum";

export interface ICreateTransferStatementDTO {
  amount: number;
  description: string;
  sender_id: string;
  recipient_id: string;
}
