import group29 from '../../assets/Group 162529.png'
import group8 from '../../assets/Group 162508.png'
import group9 from '../../assets/Group 162509.png'
import group10 from '../../assets/Group 162510.png'
import vector from '../../assets/Vector 15.png'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div className='lg:px-10 px-4 py-16 bg-base-200'>
            <h2 className="text-4xl px-4 font-bold mb-12">Our Awesome Portfolio</h2>
            <img src={group29} alt="" className='w-[39px] h-[46px] lg:w-[62px] lg:h-[72px] lg:ml-[1000px] ml-[220px] -mt-[90px] lg:-mt-[50px]' />
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <img src={group8} alt="" className='' />
                     <img src={group9} alt="" className='lg:mt-10 hidden sm:inline-block' />
                      <img src={group10} alt="" className='lg:mt-20 hidden sm:inline-block' />
                </div>
                <div className='flex mt-3 gap-1 justify-center'>
                    <p className='w-3 h-3 bg-blue-600 rounded-lg hidden sm:inline-block'></p>
                    <p className='w-3 h-3 bg-black rounded-lg hidden sm:inline-block'></p>
                    <p className='w-3 h-3 bg-black rounded-lg hidden sm:inline-block'></p>
                </div>
                <div className='flex justify-center gap-4'>
                    <FaChevronLeft className='w-[38px] h-[38px] bg-black rounded-lg block lg:hidden'></FaChevronLeft>
                    <FaChevronRight className='w-[38px] h-[38px] bg-[#5454D4] rounded-lg block lg:hidden'></FaChevronRight>
                </div>
                    <img src={vector} alt="" className='w-[61px] h-[18px]' />
            </div>
        </div>
    );
};

export default Portfolio;