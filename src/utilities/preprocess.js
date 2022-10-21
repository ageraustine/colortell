import * as tf from '@tensorflow/tfjs';

async function preprocess(image){
    const scalingLayer = tf.layers.rescaling(1/255)
    let img = scalingLayer(image)
    img = tf.expandDims(img,0)
    return tf.image.resizeBilinear(img,[256, 256])
}

export default preprocess