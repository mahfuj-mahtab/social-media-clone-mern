import express from 'express';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
const app = express();

app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5000, // limit each IP to 100 requests per windowMs
    handler:(req,res,___,options)=>{
        res.status(options.statusCode || 500).send(options.message || 'Too many requests, please try again later.');
    }
})

app.use(limiter);
app.get('/', (req, res) => {
  res.json({'msg': 'Hello World'});
});


export {app};