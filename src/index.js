import {app} from './app.js';
import 'dotenv/config'

import connectDB from './db/index.js';



connectDB().then(()=>{

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
});