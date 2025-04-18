
import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = singleBook;
   
    
    return (
    <Link to={`/bookDetails/${bookId}`}>
        <div className="card  shadow-md ">
        <figure className='bg-[#F3F3F3] w-4/5 mx-auto my-4'>
          <img className='w-80% mx-auto p-6 rounded-4xl h-[166px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body ml-8">
        <div className="flex gap-2 flex-wrap mb-2">
          {tags.map((singleTag, index) => (
            <div key={index} className="badge bg-[#f4fcf3] text-[#23BE0A]">
              {singleTag}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center ">
        <p className='font-bold text-2xl text-[#131313] playfair-display'>{bookName}</p>
        <p className='bg-[#23BE0A] text-white text-center rounded-4xl '>{yearOfPublishing}</p>
        </div>
         
          <p className=' text-lg text-[#13131380] work-sans '>Written By : {author}</p>
          <p className=' text-lg text-[#13131380] work-sans '>Published By : {publisher}</p>
          <p className='border-b-2 border-dashed text-[#13131315]'></p>
          <div className="card-actions justify-between">
            <div className="badge text-lg font-semibold text-[#13131380] work-sans ">{category}</div>
            <div className="badge ">{rating}<FaStarHalfAlt className='text-[#23BE0A]' /></div>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default Book;