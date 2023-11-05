

const Salider = () => {
    return (
        <div>
             <div className="carousel w-full h-[600px] ">
            {/* slide 1 */}
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/59qDSsz/woman-being-enthusiastic-about-shopping.jpg" className="w-full rounded-xl" />
    <div className="absolute flex items-center rounded-lg h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
         
         <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold" >  WE ARE BEST <br /> FOR AFFORDABLE CLOTHING </h2>
            <p className=" text-xl" >You can check out our services to get advanced clothes
We provide full service</p>
            <div>
            <button className="btn btn-primary mr-5"> Discover More </button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
         </div>

    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

  </div> 
  {/* slide 2 */}
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/HgxFYkZ/woman-holding-credit-cards-while-talking-phone.jpg" className="w-full rounded-lg " />
    <div  className="absolute flex items-center rounded-lg h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] " >
       
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold" > WE ARE BEST  <br /> FOR AFFORDABLE CLOTHING </h2>
            <p className=" text-xl" >You can check out our services to get advanced clothes
We provide full service</p>
            <div>
            <button className="btn btn-primary mr-5"> Discover More </button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
         </div>

 </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>

  </div> 
{/* slide 3 */}
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/ZTLS2s1/1537670-4732.jpg" className="w-full rounded-lg " />
    <div className="absolute flex items-center rounded-lg h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] " >
   
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold" >  WE ARE BEST  <br /> FOR AFFORDABLE CLOTHING </h2>
            <p className=" text-xl" > Order to get all the best quality t-shirts and apparel </p>
            <div>
            <button className="btn btn-primary mr-5"> Discover More </button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
         </div>
     </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>

{/* slide 4 */}

  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/6Zd4J0m/still-life-spring-wardrobe-switch.jpg" className="w-full rounded-lg" />
    <div className="absolute flex items-center rounded-lg h-full top-0 left-0  right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] "  >
       
    <div className=" text-white ml-5 space-y-6" >
            <h2 className=" text-4xl font-bold" >  WE ARE BEST <br /> FOR AFFORDABLE CLOTHING </h2>
            <p className=" text-xl" > To 20 % Off Ong cold Binta Apparels For Girls Only </p>
            <div>
            <button className="btn btn-primary mr-5"> Discover More </button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
         </div> 


    </div>

    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>

  </div>


  
</div>
        </div>
    );
};

export default Salider;