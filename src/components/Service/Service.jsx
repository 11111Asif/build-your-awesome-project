import group28 from '../../assets/Group 162528.png'
import Add from '../../assets/add.png'
import icon5 from '../../assets/Icon (5).png'
import icon4 from '../../assets/Icon (4).png'
import icon3 from '../../assets/Icon (3).png'
import icon2 from '../../assets/Icon (2).png'
import icon1 from '../../assets/Icon (1).png'
import icon from '../../assets/Icon.png'

const Service = () => {
    return (
        <div className="bg-base-200">
            <div className="lg:flex justify-center gap-10 py-14 px-4">
                <img src={group28} alt="" className='w-[73px] h-[73px]' />
                <h2 className="lg:text-4xl text-3xl font-semibold lg:text-center">The Service We Provide<br /> For You</h2>
            </div>
            <img src={Add} alt="" className='lg:ml-[900px] ml-[300px] -mt-[100px]' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 mt-5'>
                <div className="card w-auto">
                    <figure className="px-5 pt-5">
                        <img
                            src={icon5}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Development</h2>
                        <p>Create a platform with the best<br/> and coolest quality from us.</p>
                        
                    </div>
                </div>
                <div className="card w-auto">
                    <figure className="px-5 pt-5">
                        <img
                            src={icon4}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">UI/UX Designer</h2>
                        <p>We provide UI/UX Design services,<br/> and of course with the best quality</p>
                        
                    </div>
                </div>
                <div className="card w-auto">
                    <figure className="px-5 pt-5">
                        <img
                            src={icon3}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Graphik Designer</h2>
                        <p>We provide Graphic Design<br/> services, with the best designers</p>
                        
                    </div>
                </div>
                <div className="card w-auto">
                    <figure className="px-5 pt-5">
                        <img
                            src={icon2}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Motion Graphik</h2>
                        <p>Create a platform with the best<br/> and coolest quality from us.</p>
                        
                    </div>
                </div>
                <div className="card w-auto">
                    <figure className="px-5 pt-5">
                        <img
                            src={icon1}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Photography</h2>
                        <p>We provide Photography services,<br/> and of course with the best quality</p>
                        
                    </div>
                </div>
                <div className="card w-auto">
                    <figure className="px-5 pt-5">
                        <img
                            src={icon}
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Videography</h2>
                        <p>Create a platform with the best<br/> and coolest quality from us.</p>
                        
                    </div>
                </div>
            </div>
            <img src={Add} alt="" className='px-10' />
        </div>
    );
};

export default Service;