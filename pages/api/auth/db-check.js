import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    await prisma.$connect();
    res.status(200).json({ message: "Database connected successfully!" });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
