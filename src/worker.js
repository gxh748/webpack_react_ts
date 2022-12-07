const worker = () => {
    let local = '';
    self.onmessage = (e) => {
        console.log("/*********get data from main：",e);
        if(!local){
            local = e.data.msg
        }
        console.log("/************local:", local);
        self.postMessage({msg: `push msg to main${e}`});
    };
}

let code = worker.toString();
code = code.substring(code.indexOf('{')+1, code.lastIndexOf('}'));
const blob = new Blob([code], {type: 'application/javascript'});
const worker_script = URL.createObjectURL(blob);

export default worker_script;

