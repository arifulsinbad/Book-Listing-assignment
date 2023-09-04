import { Order, User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (user: User, data: any): Promise<Order> => {
  //   console.log(user.id);
  const result = await prisma.order.create({
    data: {
      userId: user.id,
      orderedBooks: data.orderedBooks,
    },
  });
  return result;
};

const getAllFromDB = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany();
  return result;
};
const getAllCustomer = async (id: string): Promise<Order[]> => {
  const result = await prisma.order.findMany({
    where: {
      userId: id,
    },
  });
  return result;
};
const getSingleFromDB = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const OrderService = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  getAllCustomer,
};
