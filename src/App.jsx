import QRCode from 'qrcode';
import {useState} from 'react';
function App() {
const [qrCode, setQrCode] = useState('');
const [url, setUrl] = useState('');


const GenerateQrCode = () => {
  QRCode.toDataURL(url,{
    width: 800,
    margin: 2,
    color: {
      dark: '#335383ff',
      light: '#ffffffff'
    }
  } ,(err, url) => {
    if (err) return console.error(err)
    setQrCode(url)

  })
}

return (
    <div className="app">
     <h1>QR Code Generator</h1>
     <input type="text"
     placeholder='https://google.com' 
      value={url}
     onChange={(e) => setUrl(e.target.value)}
     />
     <button onClick={GenerateQrCode}>Generate</button>
  {qrCode && <>
    <img src={qrCode} />
    <a href={qrCode} download="qrcode.png">Download</a>
    </>}
    </div>
  )
}

export default App
