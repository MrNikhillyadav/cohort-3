import os from 'os';
import cluster, { isPrimary } from "cluster";
import { app, PORT } from './index.ts';

const CPU_COUNT = os.cpus().length;

if(cluster.isPrimary ){

   for(let i=0; i < CPU_COUNT; i++){
        cluster.fork();
   }
}
else{

        app.listen(PORT,() => {})
}


