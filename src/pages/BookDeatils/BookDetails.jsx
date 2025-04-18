import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const BookDetails = ({bookDesign}) => {
    const {id}= useParams();
    const bookIdRoute = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookIdRoute)
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = singleBook;
const handleMarkAsRead = (id)=> {
    addToStoreDB(id);
    MySwal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
     
}
    
    return (
        <div className="hero bg-[#ffff] min-h-screen">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="p-10 bg-[#f3f3f3] w-[50%]">
    <img className="max-w-sm rounded-lg shadow-2xl h-[564px] mx-auto"
      src={image}
       />
    </div>
    <div className='w-[50%]'>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6">
       By:{author}
      </p>
      <div className="border-b border-t  mb-6 border-[#131313]">
        {category}
      </div>
      <h3 className='pb-8'>Review : {review}</h3>
      <span className='text-bold'> Tag {tags}</span>
      <hr className='mb-8 text-[#131313] mt-8' ></hr>
      <div >
       <ul>
        <li> Number Of Pages :  {totalPages}</li>
        <li> Number Of Pages :  {publisher}</li>
        <li> Number Of Pages :  {yearOfPublishing}</li>
       </ul>
      </div>
      <div className="flex gap-4 mt-8">
        <div onClick={()=>handleMarkAsRead(id)} className="btn bg-[#23BE0A] text-white">Mark as Read</div>
        <div className="btn bg-[#59C6D2] text-white">Add to Wishlist</div>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;
