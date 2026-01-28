import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/spinner';
import Backbutton from '../components/backbutton';
const Showbook=()=>{
    const [book,setBook] =useState({});
    const[loading,setLoading]=useState(false);  
    const {id}=useParams();
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:1000/books/${id}`).then((response)=>{
            setBook(response.data);
            console.log(setBook);
            setLoading(false);
        }).catch((error)=>{
            console.log(error);
            setLoading(false);})
    },[])
    return(
        <>
            <div className='p-4'>
                <Backbutton/>
                <h1 className='text-3xl my-4'>Show Books</h1>
                {
                    loading ? <Spinner/> : <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                                                <div className='my-4'>
                                                     <span className='text-xl mr-4 text-grey-500'>Id</span> 
                                                     <span className='text-xl'>{book._id}</span>              
                                                </div>
                                                <div className='my-4'>
                                                     <span className='text-xl mr-4 text-grey-500'>Title</span> 
                                                     <span className='text-xl'>{book.title}</span>              
                                                </div>
                                                <div className='my-4'>
                                                     <span className='text-xl mr-4 text-grey-500'>Author</span> 
                                                     <span className='text-xl'>{book.author}</span>              
                                                </div>
                                                <div className='my-4'>
                                                     <span className='text-xl mr-4 text-grey-500'>PublishYear</span> 
                                                     <span className='text-xl'>{book.publishYear}</span>              
                                                </div>
                                              
                                                </div>
                }
            </div>
        </>
    )
}
export default Showbook;