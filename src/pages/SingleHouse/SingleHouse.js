import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleHouse = () => {
  let { id } = useParams();
  const [singleHouse, setSingleHouse] = useState();

  useEffect(() => {
    fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.error);
        }
        return res;
      })
      .then((data) => setSingleHouse(data.result));
  }, [id]);

  return (
    <section>
      <h2>{singleHouse.address}</h2>
      <p>{singleHouse.description}</p>
      <p>{singleHouse.floorsNumber}</p>
    </section>
  );
};

export default SingleHouse;
