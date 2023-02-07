import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../../../lib/users";

const prisma = new PrismaClient();

export default async function users(req: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.user.findMany();

  if (req.method === "GET") {
    const users = await getUsers();
    return res.status(200).json({
      data: users,
    });
  }

  if (req.method === "POST") {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return res.status(201).json(user);
  }

  return res.status(404).json({ message: "Route not found" });
}
