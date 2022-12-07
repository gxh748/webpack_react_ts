import React, { useEffect } from 'react';
// import worker_script from './worker';
import shared_worker_script from './sharedWorker';


const Page2: React.FC<{}> = (props) => {

    useEffect(() => {
        const worker = new SharedWorker(shared_worker_script);
        worker.port.postMessage({msg:'page2向worker线程发送数据'});

        worker.port.onmessage = (e) => {
            console.log("/*****收到worker线程的消息：", e);
        }

    }, []);
    return(
        <div> page2</div>
    )
}

export default Page2;
