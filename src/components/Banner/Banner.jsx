import bannerImg from '../../assets/Group 162534.png'
import vector15 from '../../assets/Vector 15.png'
import group29 from '../../assets/Group 162529.png'
import group28 from '../../assets/Group 162528.png'
import Add from '../../assets/add.png'
import { GoArrowUpRight } from "react-icons/go";

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
                    <h1 className="text-6xl font-bold">Build Your<br /> Awesome<br /> Platform</h1>
                    <p className="py-6">
                        Enver studio is a digital studio that offers several services<br /> such as UI/UX Design to developers, we will provide the best<br /> service for those of you who use our services.
                    </p>
                    <button className="bg-[#5454D4] w-[204px] h-[58px] btn">
                        Our Services
                        <GoArrowUpRight></GoArrowUpRight>
                    </button>

                </div>
            </div>
            <div className=' absolute -mt-[660px] -ml-[260px] lg:-mt-56 lg:ml-48'>
                <img className='w-[61px] h-[18px] lg:w-[95px] lg:h-[28px]' src={vector15} alt="" />

            </div>
            <div className='absolute ml-[300px] -mt-[730px] lg:ml-[950px] lg:-mt-[270px]'>
                <img className=' w-[35px] h-[42px] lg:w-[51px] lg:h-[60px]' src={group29} alt="" />
            </div>
            <div className='absolute -ml-[300px] mb-[100px] lg:-mb-[350px] lg:ml-[150px]'>
                <img className='w-[65px] lg:w-[73px] h-[73px]' src={group28} alt="" />
            </div>
            <div className='absolute ml-[300px] mb-[160px] lg:ml-[950px] lg:-mb-[300px]'>
                <img className='lg:w-[50px] lg:h-[50px] w-[39px] h-[39px]' src={Add} alt="" />
            </div>
        </div>
    );
};

export default Banner;