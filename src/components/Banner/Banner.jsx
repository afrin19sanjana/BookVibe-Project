import React from 'react';
import hero from '../../assets/heroimg.png'
const Banner = () => {
    return (
        <div className='flex justify-between'>
            <div className="ml-32">
           <h2 className='text-[#131313] playfair-display font-bold text-6xl pt-32'> Books to freshen up <br></br>your bookshelf</h2>
           <button> <a className="btn btn-wide bg-[#23BE0A] text-white mb-32 mt-12">View The List</a></button>
            </div>
            <div className="mr-32 mt-20">
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;