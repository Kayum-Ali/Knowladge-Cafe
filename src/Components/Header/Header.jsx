import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between container mx-auto my-5
         border-b-2 items-center lg:p-5 p-3' >
            <h1 className='lg:text-3xl text-2xl font-bold'>Knowladge Cafe</h1>
            <div className='flex justify-between lg:gap-10 gap-5'>
                <button className='bg-[#37cf83] text-white font-bold rounded-full lg:px-5 px-4 lg:py-3 py-0'>Sign in </button>
                <img className='w-[60px] h-[60px] bg-[#D9DADC] p-2 rounded-full' src={Profile} alt="" />
            </div>


        </div>
    );
};

export default Header;