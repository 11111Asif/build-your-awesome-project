import Add from '../../assets/add.png'
import group29 from '../../assets/Group 162529.png'

const Contact = () => {
    return (
        <div className="px-4 lg:px-10 bg-[#1E1E2080]">
            <img src={Add} alt="" className='lg:ml-[1000px] ml-[300px]' />
            <div className='lg:flex justify-center lg:py-7'>
                <h2 className='lg:text-5xl text-3xl lg:w-[826px] h-[128px]'>Contact us for the service<br/> you want to use</h2>
                <button className=' w-[201px] h-[60px] lg:mt-10 bg-[#5454d4]'>Contact us</button>
            </div>
            <img src={group29} alt="" className='w-[51px] h-[60px]' />
        </div>
    );
};

export default Contact;