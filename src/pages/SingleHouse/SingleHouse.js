import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleHouse = () => {
  let { id } = useParams();
  const [singleHouse, setSingleHouse] = useState();

  useEffect(() => {
    fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleHouse(data.result))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    singleHouse ? (
      <section>
        <h2>{singleHouse.address}</h2>
        <p>{singleHouse.description}</p>
        <p>{singleHouse.floorsNumber}</p>
      </section>
    ) : <p>Nie znaleziono domku</p>
  );
};

export default SingleHouse;
