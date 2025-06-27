import image4 from '../../assets/image 4.png'

const Choice = () => {
    return (
        <div className="bg-base-200 h-[860px] py-16 px-16">
            <div className="flex">
                <h1 className="text-4xl w-[588px] h-[140px]">Why Enver Is The<br/> Best Choice?</h1>
                <p className="w-[588px] h-[88px]">Watch this one minute video so you understand why you should<br/> use our services!</p>
            </div>
            <img className='h-[670px]' src={image4} alt="" />
        </div>
    );
};

export default Choice;