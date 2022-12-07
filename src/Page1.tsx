import React, { useEffect } from 'react';
// import * as WebWorker from "react-webworker";
import shared_worker_script from './sharedWorker';

const Page1: React.FC<{}> = (props) => {

    useEffect(() => {
        const worker = new SharedWorker(shared_worker_script);
        worker.port.postMessage({msg:'page1向worker线程发送数据'});

        worker.port.onmessage = (e) => {
            console.log("/*****收到worker线程的消息：", e);
        }

    }, []);

    return(
        <div>
            page1
        </div>
    )
}

export default Page1;
