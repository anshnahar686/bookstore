import { useState,useEffect } from "react";
import Backbutton from "../components/backbutton";
import Spinner from "../components/spinner";
import axios from "axios";

import { useNavigate,useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
const EditBook=()=>{
    const [title,settitle]=useState()
    const [author,setauthor]=useState()
    const [publishYear,setyear]=useState()
    const [loading,setloading]=useState()
    const navigate=useNavigate();
    const {id}=useParams()
    const {enqueueSnackbar}=useSnackbar();
    useEffect(()=>{
        setloading(true)
        axios.get(`https://bookstore-igct.onrender.com/books/${id}`).then((response)=>{
                        setauthor(response.data.author)
                        settitle(response.data.title)
                        setyear(response.data.publishYear)
                        setloading(false)        
        })
        .catch((error)=>{
            setloading(false)
            alert("An error has been occured please check the console");
            console.log(error);
        })
            
            
    },[])
    const handleEditBook=()=>{
        const data={
                title,
                author,
                publishYear,
            }
            axios.put(`http://localhost:1000/books/${id}`,data).then(()=>{
                setloading(false);
                enqueueSnackbar('Book updated successfully',{variant:'success'});
                navigate('/');
            })
            .catch(error)
            {
                alert('An error has been occured')
                enqueueSnackbar('Error',{variant:'danger'});

            }
    }
    // 
    return(
        <>
            <div className="p-4">
                <Backbutton/>
                <h1 className="text-3xl my-4">Edit Book</h1>
                {loading?<Spinner/>:''

                }
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                    <div className="my-4">
                        <label htmlFor=""className="text-xl mr-4 text-grey-500">Title</label>
                        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="border-2 border-grey-500 px-4 py-2 w-full"/>
                    </div>
                    <div className="my-4">
                        <label htmlFor=""className="text-xl mr-4 text-grey-500">Author</label>
                        <input type="text" value={author} onChange={(e)=>setauthor(e.target.value)} className="border-2 border-grey-500 px-4 py-2 w-full"/>
                    </div>
                    <div className="my-4">
                        <label htmlFor=""className="text-xl mr-4 text-grey-500">Publishyear</label>
                        <input type="text" value={publishYear} onChange={(e)=>setyear(e.target.value)} className="border-2 border-grey-500 px-4 py-2 w-full"/>
                    </div>
                    <button className="p-2 bg-sky-300 m-8"onClick={handleEditBook}>Save</button>
                </div>
            </div>
        </>
    )
}
export default EditBook;