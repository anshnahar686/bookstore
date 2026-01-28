import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from 'react-icons/bi';
import Card from "./singleCard";
const Cards = ({ books }) => {
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    books.map((book, index) => {
                        return (
                            <Card key={book._id} book={book} /> 
                        )
                    })
                }
            </div>
        </>
    )
}
export default Cards;