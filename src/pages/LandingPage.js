import React from 'react'
import HomeBar from '../components/HomeBar'
import Upload from '../components/Upload'
import loadModel from '../utilities/loadModel'
import preprocess from '../utilities/preprocess'


function LandingPage() {
  const modelPath = "models/colorTeller/model.json"
  const model = loadModel(modelPath)
  
  return (
   <div>
    <HomeBar/>
    <Upload/>
   </div>
  )
}

export default LandingPage