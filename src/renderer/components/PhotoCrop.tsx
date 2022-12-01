import { useState, useCallback } from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { readFile, cropImageData } from '../../main/helpers';


export default function PhotoCrop() {
  
  const [imageSrc, setImageSrc] = useState(null); // file data
  const [filenamme, setFilename] = useState(null); // file address
  const [crop, setCrop] = useState({x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();

  const handleSave = async () => {
    // first save the croppped image
    // need the base64data
    if(croppedAreaPixels && imageSrc) { 
      const base64data = await cropImageData(imageSrc, croppedAreaPixels);
      const newFilename = filenamme + '-cropped.png';
      window.electron.saveCroppedImage([newFilename, base64data]);
      // save cropped image(filename, imageSrc, croppedpixles)
      // then reset for next photo
      setImageSrc(null);
      setZoom(1);
      setCrop({x: 0, y:0 });
     }
  }
const onCropComplete = useCallback((croppedAera: Area, currentCroppedPixels: Area) => {
  setCroppedAreaPixels(currentCroppedPixels);
}, []);

  const handleFileChange = async (e: any) => {
    if (e.target.files && e.target.files.length) {
      // we got a file..
      const file = e.target.files[0];
      setFilename(file.path);
      // get the image data from the file..
      const imageData: any = await readFile(file);
      setImageSrc(imageData);
    }
  };
  if (!imageSrc) {
    return (
      <>
        <h1>PLease chosse a photo to crop</h1>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </>
    );
  }
  return (
    <>
      <Cropper 
      image={imageSrc}
      crop={crop}
      zoom={zoom}
      onCropChange={setCrop}
      onZoomChange={setZoom}
      onCropComplete={onCropComplete}
      />
      <button onClick={handleSave} className="save-btn">Save</button>
    </>
  );
}
function setCroppedAreaPixels(currentCroppedPixels: Area) {
  throw new Error('Function not implemented.');
}

