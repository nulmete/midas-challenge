import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Button from '../../Button/Button';
import TextInput from '../../TextInput/TextInput';
import DetectStyles from './DetectStyles';

const dnaSchema = yup.object().shape({
  sequences: yup.array().of(
    yup
      .string()
      .required('Requerido.')
      .min(6, 'Debe tener 6 caracteres.')
      .max(6, 'Debe tener 6 caracteres.')
      .matches(/[ACTG]{6,6}/, 'Ingresar A, C, T o G.')
  ),
});

const Detect = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(dnaSchema) });

  // TODO: maybe move to a constants.js file
  const numberOfSequences = 6;
  const getNumberOfSequences = () => [
    ...Array(parseInt(numberOfSequences || 0)).keys(),
  ];

  const onDnaSubmit = (formData) => {
    const { sequences } = formData;

    // TODO: create a baseURL variable?
    axios
      .post('http://localhost:8080/mutant/', {
        dna: sequences,
      })
      .then((response) => {
        console.log(response);
        // TODO: show success screen and hide inputs
      })
      .catch((error) => {
        console.log(error.message);
        // TODO: show error screen and hide inputs
      });
  };

  return (
    <DetectStyles>
      <h3>Ingresá la secuencia de ADN</h3>
      <form onSubmit={handleSubmit(onDnaSubmit)}>
        <div className="dna">
          {getNumberOfSequences().map((i) => (
            <div className="dna__sequence" key={`sequence-${i}`}>
              <TextInput
                htmlFor={`sequences[${i}]`}
                register={register}
                error={errors.sequences?.[i]?.message}
                minLength={6}
                maxLength={6}
                style={{ width: '100%' }}
                onKeyPress={(e) => {
                  // Only allow to enter "A", "C", "G" and "T"
                  // TODO: maybe move to a constants.js file
                  const allowedKeys = ['A', 'C', 'G', 'T'];
                  const { key } = e;
                  if (!allowedKeys.includes(key)) e.preventDefault();
                }}
              />
            </div>
          ))}
        </div>
        <Button type="submit">Analizar</Button>
      </form>
    </DetectStyles>
  );
};

export default Detect;
