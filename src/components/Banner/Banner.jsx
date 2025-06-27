import bannerImg from '../../assets/Group 162534.png'
import vector15 from '../../assets/Vector 15.png'
import group29 from '../../assets/Group 162529.png'
import group28 from '../../assets/Group 162528.png'
import Add from '../../assets/add.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
                
               <div className="hero-content flex-col relative lg:flex-row-reverse">
                
                <img
                    src={bannerImg}
                    className=" rounded-lg" />
                    <div>

                    </div>
                <div className="lg:w-[582px]">
                    <h1 className="text-6xl font-bold">Build Your<br/> Awesome<br/> Platform</h1>
                    <p className="py-6">
                        Enver studio is a digital studio that offers several services<br/> such as UI/UX Design to developers, we will provide the best<br/> service for those of you who use our services.
                    </p>
                    <button className="bg-[#5454D4] w-[204px] h-[58px]">Our Services</button>
                </div>
            </div>
            <div className=' absolute lg:-mt-56 lg:ml-48'>
                    <img className='w-[95px] h-[28px]' src={vector15} alt="" />
                    
                </div>
                <div className='absolute lg:ml-[950px] lg:-mt-[270px]'>
                    <img className=' w-[51px] h-[60px]' src={group29} alt="" />
                </div>
                <div className='absolute lg:-mb-[350px] ml-[150px]'>
                    <img className='w-[73px] h-[73px]' src={group28} alt="" />
                </div>
                <div className='absolute lg:ml-[950px] lg:-mb-[300px]'>
                    <img className='w-[50px] h-[50px]' src={Add} alt="" />
                </div>
        </div>
    );
};

export default Banner;