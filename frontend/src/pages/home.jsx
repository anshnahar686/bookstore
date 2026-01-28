import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import Table from "../components/home/table";
import Cards from "../components/home/card";
import {Link} from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showtype, setShowtype] = useState('table');
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:1000/books').then((response) => {
            setBooks(response.data.data);
            console.log(setBooks);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })
    }, [])
    return (
        <>
            <div className="p-4">
                <div className="flex justify-between items-center gap-x-4">
                    <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowtype('table')}>Table</button>
                    <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setShowtype('card')}>Card</button>

                </div>
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl my-8" >Books List</h1>
                    <Link to="/books/create">
                        <MdOutlineAddBox className="text-sky-800 text-4xl" />
                    </Link>
                </div>
                {
                    loading ? <Spinner /> :showtype==='table'? <Table books={books} />:<Cards books={books}/>
                }
            </div>
        </>
    )
}
export default Home;
// showtype=== 'table'?: <Card books={books} />