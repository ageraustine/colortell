const tf = require('@tensorflow/tfjs');
const tfnode = require('@tensorflow/tfjs-node');

async function loadModel(modelPath){
    const handler = tfnode.io.fileSystem(modelPath);
    const model = await tf.loadLayersModel(handler);
    return model
}

export default loadModel