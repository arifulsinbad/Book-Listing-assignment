import { OrderProccess } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';

export type IOrder = {
  orderedBooks?:
    | {
        bookId: string;
        quantity: number;
      }[]
    | undefined;
};
export type OrderCreateInput = {
  id: string;
  userId: string;
  orderedBooks: JsonValue[];
  status: OrderProccess;
  createdAt: Date;
  updatedAt: Date;
};
