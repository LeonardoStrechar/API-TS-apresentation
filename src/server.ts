
import express from 'express'
import { Router, Request, Response } from 'express';
import { z } from 'zod'

const route = Router()
const app = express()
app.use(express.json())


//É parecida com a Interface do TS
const TypesSchema = z.object ({
  num1: z.number(),
  num2: z.number()
})

//Rota para receber os dados
route.post('/types', (req: Request, res:Response) => {
  
  //Validador de tipos
  const result = TypesSchema.safeParse({
    num1: req.body.num1,
    num2: req.body.num2
  })

  console.log(result)
})


app.use(route)

app.listen(3001, () => 'server running on port 3001')


// Comandos para rodar a aplicação

// yarn install 
// yarn run build 
// yarn run dev
