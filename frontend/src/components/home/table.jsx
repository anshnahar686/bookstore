import { Link } from "react-router-dom";
import {AiOutlineEdit} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
const Table=({books})=>{
    return(
        <>
        <table  style={{margin:"0px auto"}} cellSpacing={10} cellPadding={10}>
                        <thead>
                            <tr>
                                <th className="border border-slate-600 rounded-md">No</th>
                                <th className="border border-slate-600 rounded-md">Title</th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Publish year</th>
                                <th className="border border-slate-600 rounded-md max-md:hidden">Operatins</th>

                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                books.map((book, index) => {
                                    return (
                                        <tr key={book._id} className="h-8">
                                            <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                                            <td className="border border-slate-600 rounded-md text-center">{book.title}</td>
                                            <td className="border border-slate-600 rounded-md max-md:hidden text-center">{book.author}</td>
                                            <td className="border border-slate-600 rounded-md text-center">{book.publishYear}</td>
                                            <td className="border border-slate-600 rounded-md text-center">
                                                <div className="flex justify-center gap-x-4">
                                                    <Link to={`/books/details/${book._id}`}>
                                                        <BsInfoCircle className="text-green-800 text-2xl mx-2" />
                                                    </Link>
                                                    <Link to={`/books/edit/${book._id}`}>
                                                        <AiOutlineEdit className="text-yellow-600 text-2xl " />
                                                    </Link>
                                                    <Link to={`/books/delete/${book._id}`}>
                                                        <MdOutlineDelete className="text-red-600 text-2xl mx-2" />
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
        </>
    )
}
export default Table;