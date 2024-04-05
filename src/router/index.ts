import { Router } from "express";
import { asyncHandler } from "../middleware/async";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post(
    "/traits",
    asyncHandler(async (req, res) => {
        const { traits } = req.body;
        await prisma.traits.create({
            data: {
                traits: traits,
            },
        });
        res.json().status(201);
    })
);
router.get(
    "/traits",
    asyncHandler(async (req, res) => {
        const data = await prisma.traits.findMany();
        res.json(data);
    })
);
export default router;
