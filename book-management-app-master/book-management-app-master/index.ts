import express from 'express'
import bookRouter from './routes/book.js'
import searchRouter from './routes/search.js'

const app = express();
const PORT =3000;

app.use(express.json());
app.use('/library',bookRouter);
app.use('/search',searchRouter);


app.use('/',(req,res)=>{
    return res.status(404).json({message: "Your requested an api that I dont have :( "})
});

app.use('/health',(req,res)=>{
    return res.status(200).json({message: "ok"})
});
app.listen(PORT, () => {
    console.log(`App is running and Listening on port ${PORT}`);
  });
