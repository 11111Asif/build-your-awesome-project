import logo from '../../assets/Logo Icon 1.png'

const Footer = () => {
    return (
        <div className="grid-cols-4 bg-base-200 space-y-6">
            <div className="lg:flex text-center lg:justify-between py-10 px-4 lg:px-10">
                <div className="col-span-1 flex gap-2 justify-center">
                    <img src={logo} alt="" className='' />
                    <h1 className='text-3xl font-bold'>Enver</h1>
                </div>
                <div className="col-span-2 lg:flex gap-5 mt-2">
                    <p className=''>Support</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className="col-span-1 mt-2">
                    <p>© 2020 Enver, All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;