import GoogleMapReact from 'google-map-react';
import React from 'react';
import { useCountUp } from 'react-countup';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ExtraSection = () => {

   
    

    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
      ref: countUpRef,
      start: 0,
      end: 1234567,
      delay: 500,
      duration: 3,
     
      onReset: () => console.log('Resetted!'),
      onUpdate: () => console.log('Updated!'),
      onPauseResume: () => console.log('Paused or resumed!'),
      onStart: ({ pauseResume }) => console.log(pauseResume),
      onEnd: ({ pauseResume }) => console.log(pauseResume),
    });
 



    const defaultProps = {
        center: {
          lat: 23.8041,
          lng: 90.4152
        },
        zoom: 11
      };


    return (
        <div className=' m-2 bg-slate-200' >  {/* section 1 */}
            <h1 className=' text-center font-bold text-4xl mt-3' >Service Area Map</h1>
            <p className=' text-center text-2xl mt-2' >Can you book our services at the following <br /> locations or anywhere in the country?</p>
            <div className=' h-96 lg:w-full mt-3' >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>


 {/* section 2 */}
     
   <section>
   <h1 className=' text-center font-bold text-4xl mt-3' > Trust Symbols or Badges </h1>

   <div className="hero min-h-screen bg-slate-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/VTKYVHs/stressed-woman-covering-her-head-with-knit-cap.jpg" className=" relative h-[600px] w-[700px]" />
    <img src="https://i.ibb.co/r2Bfc30/1485480-198803-OYME7-K-963.jpg" className=" h-64 w-64 -mt-[345px]  border-8 border-zinc-300   absolute" />
    <div>
      <h1 className="text-4xl font-bold mt-20 ml-10 "> Custom Decorative Badges Personal Expression </h1>
      <p className="py-6"> To sort the badges by description, you can alphabetize the list based on the names or descriptions of the badges. This can typically be done in most text editors, word processing software, or spreadsheet applications </p>
      
    </div>
  </div>
</div>

   </section>

  {/* section 3 */}

<section>
<h1 className=' text-center font-semibold text-2xl mt-3' > Lets count some time and think
How is our service? </h1>
<div className=' text-center ' >

      <div  ref={countUpRef} />
      <button className=' btn mr-3' onClick={start}>Start</button>
      <button className=' btn mr-3' onClick={reset}>Reset</button>
      <button className=' btn mr-3' onClick={pauseResume}>Pause/Resume</button>
      <button className=' btn mr-3' onClick={() => update(12000)}>Update to 12000</button>
    </div>

    

</section>

{/* section 4 */}

<section>
<h1 className=' text-center font-bold text-6xl mt-5' > About Us </h1>

<div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img src="https://i.ibb.co/J5dkG9r/friends-going-shopping-antique-store.jpg" className=" w-[700px] h-[500px] rounded-lg shadow-2xl" />
<img src="https://i.ibb.co/QDFRjnm/12178775-4907885.jpg" className=" w-[300px] mb-[300px] absolute border-8 border-orange-500   rounded-lg  shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Revamp Your Wardrobe Clothing Swap Event!</h1>
      <p className="py-6">  Clothing swaps promote sustainability by extending the lifespan of clothing items and reducing textile waste. The fashion industry is notorious for its environmental impact, and clothing swaps offer a small but significant way to combat this issue</p>
      
    </div>
  </div>
</div>
   


</section>

        </div>
    );
};

export default ExtraSection;

