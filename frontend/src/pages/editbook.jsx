import { useState, useEffect } from "react";
import Backbutton from "../components/backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
const EditBook = () => {
  const [title, settitle] = useState();
  const [author, setauthor] = useState();
  const [publishYear, setyear] = useState();
  const [loading, setloading] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setloading(true);
    axios
      .get(`https://bookstore-1-648i.onrender.com/books/${id}`)
      .then((response) => {
        setauthor(response.data.author);
        settitle(response.data.title);
        setyear(response.data.publishYear);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        alert("An error has been occured please check the console");
        console.log(error);
      });
  }, []);
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(`https://bookstore-1-648i.onrender.com/books/${id}`, data)
      .then(() => {
        setloading(false);
        enqueueSnackbar("Book updated successfully", { variant: "success" });
        navigate("/");
      })
      .catch(error);
    {
      alert("An error has been occured");
      enqueueSnackbar("Error", { variant: "danger" });
    }
  };
  //
  return (
    <>
     <div className="p-4 sm:p-6 lg:p-8">
  <Backbutton />

  <h1 className="text-2xl sm:text-3xl font-semibold my-4 text-center sm:text-left">
    Edit Book
  </h1>

  {loading && <Spinner />}

  <div className="
    flex flex-col
    border-2 border-sky-400
    rounded-xl
    w-full
    max-w-md sm:max-w-lg lg:max-w-xl
    p-4 sm:p-6
    mx-auto
    bg-white shadow-md
  ">

    {/* Title */}
    <div className="my-3">
      <label className="text-base sm:text-lg text-gray-600 block mb-1">
        Title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="
          border-2 border-gray-300
          focus:border-sky-500 focus:outline-none
          rounded-md
          px-3 py-2
          w-full
          text-sm sm:text-base
        "
      />
    </div>

    {/* Author */}
    <div className="my-3">
      <label className="text-base sm:text-lg text-gray-600 block mb-1">
        Author
      </label>
      <input
        type="text"
        value={author}
        onChange={(e) => setauthor(e.target.value)}
        className="
          border-2 border-gray-300
          focus:border-sky-500 focus:outline-none
          rounded-md
          px-3 py-2
          w-full
          text-sm sm:text-base
        "
      />
    </div>

    {/* Publish Year */}
    <div className="my-3">
      <label className="text-base sm:text-lg text-gray-600 block mb-1">
        Publish Year
      </label>
      <input
        type="number"
        value={publishYear}
        onChange={(e) => setyear(e.target.value)}
        className="
          border-2 border-gray-300
          focus:border-sky-500 focus:outline-none
          rounded-md
          px-3 py-2
          w-full
          text-sm sm:text-base
        "
      />
    </div>

    {/* Button */}
    <button
      className="
        p-2 sm:p-3
        bg-sky-400 hover:bg-sky-500
        text-white
        rounded-md
        mt-4
        transition
        text-sm sm:text-base
      "
      onClick={handleEditBook}
    >
      Save
    </button>

  </div>
</div>

    </>
  );
};
export default EditBook;
