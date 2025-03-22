import fs from "fs";

export const createBlobFromFile = async (path: string): Promise<Blob> => {
  const file = await fs.promises.readFile(path);
  return new Blob([file]);
};
