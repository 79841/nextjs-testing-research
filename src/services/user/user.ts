import { z } from "zod";

export const getAllUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const schema = z
      .object({
        name: z.string().min(1),
      })
      .array();
    const validatedData = schema.parse(data);
    return validatedData;
  } catch (e) {
    throw e;
  }
};
