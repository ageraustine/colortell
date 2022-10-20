import React from 'react'
import AppBar from '../components/AppBar'

function AboutPage() {
  return (
    <div>
      <AppBar/>
      <div class="container d-flex flex-column align-items-center">
        <div>
          <h1>Ager Austine</h1>
          <h3 class="text-success">
            Who am I ?
          </h3>
          <p>
            I am a software engineer with a soft spot on artificial intelligence disciplines especially machine learning.
            I love building machine learning models using Tensorflow. I also enjoy building data science applications
            with the help of python libraries such as pandas, matplotlib, numpy and sklearn.
          </p>
          <br/>
          <h3 class="text-success">
            R&D Interests
          </h3>
          <p>
            Machine learning is revolutionizing the process of decision making in businesses especially
            in this age in which tonnes of data is generated on a daily basis. Predictive analytics plays an important
            role in informing businesses on direction in which there company is headed i.e profits, burnrate and other very 
            important financial ratios.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage