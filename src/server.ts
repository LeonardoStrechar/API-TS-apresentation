
import express, { text } from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

route.post('/types', (req: Request, res:Response) => {
  const text = req.body.text

  if ( !text ){
    console.log("é string")
  }
  console.log("não é string")
})

app.use(route)


app.listen(3001, () => 'server running on port 3333')
