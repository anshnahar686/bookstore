import { useState } from "react";
import Backbutton from "../components/backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
const Createbook=()=>{
    const [title,settitle]=useState()
    const [author,setauthor]=useState()
    const [publishYear,setyear]=useState()
    const [loading,setloading]=useState()
    const navigate=useNavigate();
    const {enqueueSnackbar}=useSnackbar();
    const handleSaveBook=()=>{
        const data={
                title,
                author,
                publishYear,
            }
            axios.post(`https://bookstore-1-648i.onrender.com/books`,data).then(()=>{
                setloading(false);
                enqueueSnackbar("Book created successfully",{variant:'success'});
                navigate('/');
            }).catch((err)=>{
                console.log(err)
            })
            
    }
    // 
    return(
        <>
            <div className="p-4">
                <Backbutton/>
                <h1 className="text-3xl my-4">Create Book</h1>
                {loading?<Spinner/>:''

                }
                <div className="flex flex-col border-2 border-sky-400 rounded-xl max-w-full p-4 mx-auto">
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
                    <button className="p-2 bg-sky-300 m-8"onClick={handleSaveBook}>Save</button>
                </div>
            </div>
        </>
    )
}
export default Createbook;