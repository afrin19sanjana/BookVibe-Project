import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
   
   
    return (
        <div className="">
             <h2 className='text-center text-4xl pb-9 pt-24 font-bold '>Books</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
           
           <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
         {data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)}
           </Suspense>
           </div>
        </div>
 
    );
};

export default Books;