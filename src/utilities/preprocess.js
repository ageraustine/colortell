const tf = require('@tensorflow/tfjs');
 
async function preprocess(image){
    scalingLayer = tf.layers.rescaling(1/255)
    const img = scalingLayer(img)
    img = tf.expandDims(img,0)
    return tf.image.resizeBilinear(img,[256, 256])
}

export default preprocess