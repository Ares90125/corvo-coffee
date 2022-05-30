import './App.css';
import { BsList } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaDirections } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App min-h-screen h-full w-full">
      <div className='mb-[100px] w-full h-[64px] flex items-center px-[50px] justify-between shadow-[0_0px_5px_3px_rgba(0,0,0,0.3)]'>
        <div className='flex items-center'>
          <BsList className='w-[60px] h-[25px] mr-[30px] text-mainColor' />
          <img src='/images/1.jpg' className='w-[100px] h-[60px]'></img>
        </div>
        <div className='h-full flex items-center'>
          <GrMail className='w-[30px] h-[20px] mr-[10px] text-mainColor' />
          <p className='mr-[30px] text-mainColor'> Contact Us</p>
          <FaDirections className='w-[30px] h-[15px] mr-[10px] text-mainColor' />
          <p className='mr-[30px] text-mainColor'> Get Directions</p>
        </div>
      </div>
      <p className='text-mainColor text-[100px] font-black tracking-tight mb-[7px]'>Corvo Coffee</p>
      <p>cafe in Munich</p>
      <p className='mb-[7px]'>cafe in New York Open today until 7:00 PM</p>
      <button className='bg-mainColor text-whiteColor px-[40px] py-[15px] text-[20px] hover:bg-hoverColor'>
        Contact US
      </button>
      <div className='flex mt-[50px] mb-[100px]'>
        <Carousel className='mx-auto w-[800px]' showThumbs={false}
          showStatus={false}
          showIndicators={true}
          infiniteLoop
          useKeyboardArrows
          transitionTime={1000}
          autoPlay={true}
          >
          <div>
            <img src="/images/1.png" className='w-full h-[500px]' />
            
          </div>
          <div>
            <img src="/images/2.png" className='w-full h-[500px]'  />
          </div>
          <div>
            <img src="/images/3.png" className='w-full h-[500px]'  />
          </div>
          <div>
            <img src="/images/4.png" className='w-full h-[500px]'  />
          </div>
          <div>
            <img src="/images/5.png" className='w-full h-[500px]'  />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
