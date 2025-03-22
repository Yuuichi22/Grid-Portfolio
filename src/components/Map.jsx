import { CardWrapper } from "./CardWrapper"

export const Map = () => {
    return (
        <CardWrapper>
          {/*  <div className="text-lg  p-2">
      <div id="embedded-map-display " >
        <iframe
        className="w-full "
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=jaipur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          title="Google Map"
        ></iframe>
      </div>
      <style>
        {`
          #embedded-map-display img.text-marker { max-width: none !important; background: none !important; }
          img { max-width: none; }
        `}
      </style>
    </div> */}

            <div className="flex justify-center h-full items-center">
              <button className="btn px-2 py-1 rounded-md bg-rose-400 h-[max-content]" onClick={() => {window.open("https://drive.google.com/file/d/1s_pWhIRSBjbhV_er_-ljWABAOFBiCM8s/view")}}>Resume</button>
            </div>
          
        </CardWrapper>
    
       
    )
}