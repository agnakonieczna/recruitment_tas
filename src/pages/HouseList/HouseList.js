import { Link } from 'react-router-dom';

const HouseList = ({ data, setData }) => {
  
  const removeHouse = (id) => {
    setData(data.filter((house) => house._id !== id));
    fetch(`http://mobile-reality-backend.sadek.usermd.net/houses/${id}`, {
      method: 'DELETE'
    });
  };

  return (
    <section>
      <ul>
        {data &&
          data.map((house) => {
            return (
              <li key={house._id}>
                <h2>{house.address}</h2>
                <p>{house.description}</p>
                <p>{house.floorsNumber}</p>
                <Link to={`/single-house/${house._id}`}>Zobacz więcej</Link>
                <button onClick={() => removeHouse(house._id)}>X</button>
              </li>
            );
          })}
      </ul>
      <Link to='/house-form'>Dodaj nowy dom</Link>
    </section>
  );
};

export default HouseList;
