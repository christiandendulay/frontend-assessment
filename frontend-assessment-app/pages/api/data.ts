import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { ApiResponse } from "@/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    const filePath = path.join(process.cwd(), "mockData", "data.json");

    const data = fs.readFileSync(filePath, "utf8");

    res.status(200).json({ data: JSON.parse(data) });
  } catch (error) {
    res.status(500).json({ error: "Failed to read the file" });
  }
}
