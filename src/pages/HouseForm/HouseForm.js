import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

const HouseForm = ({houseData, setData}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onFormSubmit = (data) => {
    setData([...houseData, data]);
    fetch('http://mobile-reality-backend.sadek.usermd.net/houses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    setFormSubmitted(true);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label>Adres</label>
        <input {...register('address', { required: true })} type='text' error={errors.addres} />
        <label>Liczba pięter</label>
        <input
          {...register('floorsNumber', { required: true })}
          type='number'
          error={errors.floorsNumber}
        />
        <label>Opis</label>
        <textarea {...register('description', { required: true })} error={errors.description} />
        <label>Etykieta</label>
        <input type='text' {...register('label', { required: true })} error={errors.label} />
        <button>Dodaj</button>
      </form>
      {formSubmitted && <Redirect to='/house-list' />}
    </section>
  );
};

export default HouseForm;
