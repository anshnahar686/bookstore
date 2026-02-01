import { useState,useEffect } from "react";
import Backbutton from "../components/backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
const Deletebook=()=>{
    const  [loading,setloader]=useState(false)
    const navigate=useNavigate()
    const {id}=useParams()
    const {enqueueSnackbar}=useSnackbar();
    const handleBook=()=>{
        setloader(true)
        axios.delete(`https://bookstore-1-648i.onrender.com/books/${id}`).then(()=>{
            setloader(false)
            enqueueSnackbar("Book deleted successfully",{variant:'success'});
            navigate('/')

        })
        .catch((error)=>{
            setloader(false)
            alert("an error has been occured")
            enqueueSnackbar("Book deleted failed",{variant:'error'});
            console.log(error);
        })
    }
    return(
        <>
            <div className="p-4">
                <Backbutton/>
                <h1 className="text-3xl my-4">Delete Book</h1>
                {loading ?<Spinner/>:""}
                <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
                    <h3>Are You Sure You Want to delete this book?</h3>
                    <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleBook}>Yes Delete this</button>
                </div>
            </div>
        </>
    )
}
export default Deletebook;