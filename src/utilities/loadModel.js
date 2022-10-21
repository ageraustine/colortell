import * as tf from '@tensorflow/tfjs';

async function loadModel(url){
    const model = await tf.loadLayersModel(url);
    return model
}
// /home/techie/Desktop/projects/ai-ml/colourteller/color-teller-ui/public/Color-Model/colorTeller/model.json
export default loadModel