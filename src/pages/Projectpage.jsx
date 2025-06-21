import { useState, useEffect } from 'react';
import { ThemeProvider } from '../../my-project/src/theme/Themebtn';
import { useParams } from 'react-router-dom';
import commentsdata from  '../comments.json'

const Projectpage = () => {
  const { id } = useParams();
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

 useEffect(() => {
  try {
    const allComments = commentsdata.comments;
    const singleComment = allComments.find((c) => c.id === id);
    setComments(singleComment);
    if (!singleComment) {
      setError("Project not found");
    }
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}, [id]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ThemeProvider>
      <section className="bg-gray-200 dark:bg-blacki">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left dark:text-white dark:bg-gray-700">
                <div className="text-black dark:text-gray-200 mb-4">{comments.type}</div>
                <h1 className="text-3xl font-bold mb-4">{comments.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <p className=" text-black dark:text-gray-100">{comments.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6 dark:text-white dark:bg-gray-700">
                <h3 className="text-black dark:text-white text-lg font-bold mb-6">description</h3>
                <p className="mb-4">{comments.description}</p>
              </div>
            </main>

            <div className="bg-white text-black p-6 rounded-lg shadow-md dark:bg-gray-700 dark:text-white">
              <h3 className="text-xl font-bold mb-6">{comments.company.name}</h3>
              <h2 className="text-2xl">company description</h2>
              <p className="my-2">{comments.company.description}</p>
              <hr className="my-4" />
              <h3 className="text-xl dark:text-black">Contact Email:</h3>
              <p className="my-2 dark:text-black bg-gray-100 p-2 font-bold">
                {comments.company.contactEmail}
              </p>
              <h3 className="text-xl">Contact Phone:</h3>
              <p className="my-2 bg-gray-100 p-2 font-bold dark:text-black">
                {comments.company.contactPhone}
              </p>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Projectpage;