import { z } from "zod";

export const TrainModel = z.object({
  name: z.string(),
  type: z.enum(["man", "woman", "Others"]),
  age: z.number(),
  ethinicity: z.enum([
    "White",
    "Black",
    "Asian",
    "American",
    "East Asian",
    "South East Asian",
    "South Asian",
    "Middle Eastern",
    "Pacific",
    "Hispanic"
  ]),
  eyeColor: z.enum(["Brown", "Blue", "Hazel", "Gray"]),
  bald: z.boolean(),
  images: z.array(z.string())
});

export const GenerateImage = z.object({
    promt: z.string(),
    modelId: z.string()
})
 export const GenerateImageFromPrompt = z.object({
    modelId: z.string(),
    packId: z.string()
 })
