import {z} from 'zod'

const  TrainModel = z.object({
    name: z.string(),
    type: z.enum(['man', 'woman', 'others']),
})