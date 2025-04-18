import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/addToDB';
import Book from '../Book/Book';
import { RiArrowDropDownLine } from "react-icons/ri";

const ListedBooks = () => {
 const [readBook, setReadBook] = useState([]);
 const [sort, setSort] = useState("");
const data = useLoaderData();
useEffect(()=>{
    const storedBookData = getStoredBook ();
    const convertedStoredBookData = storedBookData.map((id)=> parseInt(id));
    const myReadList = data.filter((book)=>convertedStoredBookData.includes(book.bookId));
    setReadBook(myReadList);
    
},[])

 const handleSort =(type)=>{
   setSort(type)
   if(type === "totalPages"){
    const sortedByPage = [...readBook].sort((a,b)=>a.totalPage-b.totalPage);
    setReadBook(sortedByPage);
   }if(type === "rating"){
    const sortedByRating = [...readBook].sort((a,b)=>a.rating-b.rating);
    setReadBook(sortedByRating);
   }if(type=== "yearOfPublishing"){
    const SortByPublishingYear =[...readBook].sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing);
    setReadBook(SortByPublishingYear);
   }
 }
    return (
        
        <div>
            <div className="bg-base-300 text-center text-4xl py-6 rounded-2xl font-bold mb-4">
                <h2>Books</h2>
            </div>
            <div className="text-center">           
<button className="btn bg-[#23BE0A] text-xl text-white" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } }>
 Sort By  <RiArrowDropDownLine className='text-4xl mt-1' />
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm "
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }  }>
  <li><a onClick={()=>handleSort("rating")}>Rating</a></li>
  <li><a  onClick={()=>handleSort("totalPages")}>Number of Pages</a></li>
  <li><a  onClick={()=>handleSort("yearOfPublishing")}>Publisher Year</a></li>

</ul>
            </div>
             <Tabs>
    <TabList>
      <Tab>My BookList</Tab>
      <Tab>My Wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2>Books To Be Read</h2>
      {
     
       readBook.map((b)=>(<Book key={b.bookId} singleBook={b}></Book>))
        
      }
    </TabPanel>
    <TabPanel>
      <h2>Books In My WishlList</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;