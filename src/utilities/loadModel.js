const tf = require('@tensorflow/tfjs');
const tfnode = require('@tensorflow/tfjs-node');

async function loadModel(){
    const handler = tfnode.io.fileSystem('tfjs_model/model.json');
    const model = await tf.loadLayersModel(handler);
    return model
}

export default loadModel