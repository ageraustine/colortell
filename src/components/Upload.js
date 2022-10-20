import React, { useEffect, useState } from 'react'

function Upload() {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    
    const handleFileChange = (e)=>{
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    const handleClick = () =>{
        document.getElementById('photofile').click()
    }

  return (
    <div class="container d-flex justify-content-center flex-column">
        <div class="mt-2" hidden>
            <label class="label" for="photofile">Upload</label>
            <input type="file" class="form-control" id="photofile" onChange={handleFileChange}/>
        </div>
        {
        selectedFile == undefined &&
            <div 
            class="container btn bg-dark mt-2 bg-gradient rounded-5 d-flex flex-column justify-content-center align-items-center" 
            style={{width:'15em', height:'10em'}}
            onClick={handleClick}
            >
                <h5 class="text-white">Upload an Image</h5>
                <i class="bi-arrow-down-circle" style={{color:'white', fontSize:'50px'}}></i>
            </div>

        }
        {
            selectedFile &&
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <div class="container d-flex justify-content-center align-items-center rounded-3 mt-2 bg-success" style={{width:'16em', height:'11em'}}>
                     <img src={preview} style={{width:'15em', height:'10em'}}/>
                </div>
                <div class="d-flex justify-content-center mt-2">
                    <button class="btn btn-dark mt-1" onClick={handleClick}>
                       Refresh
                    </button>
                </div>        
            </div>    
        }
    </div>
  )
}

export default Upload