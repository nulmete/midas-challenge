import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Button from '../../Button/Button';
import TextInput from '../../TextInput/TextInput';
import DetectStyles from './DetectStyles';
import Heading3 from '../../Typography/Heading3';
import SuccessScreen from '../../SuccessScreen/SuccessScreen';

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
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(dnaSchema) });

  // TODO: maybe move to a constants.js file
  const numberOfSequences = 6;
  const getNumberOfSequences = () => [
    ...Array(parseInt(numberOfSequences || 0)).keys(),
  ];

  const [isMutant, setIsMutant] = useState(false);
  const [isNotMutant, setIsNotMutant] = useState(false);

  const onDnaSubmit = (formData) => {
    const { sequences } = formData;

    axios
      .post('http://localhost:8080/mutant/', {
        dna: sequences,
      })
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          setIsMutant(true);
          setIsNotMutant(false);
        }
        reset();
      })
      .catch((error) => {
        const errorStatus = error.response.status;
        if (errorStatus === 403) {
          // TODO: do similar screen as in success case
          setIsNotMutant(true);
          alert('No es mutante.');
        }
        setIsMutant(false);
      });
  };

  const handleNewAnalysis = () => {
    setIsMutant(false);
    setIsNotMutant(false);
    reset();
  };

  return (
    <DetectStyles className="spacing">
      {!isMutant && !isNotMutant && (
        <>
          <Heading3>Ingresá la secuencia de ADN</Heading3>
          <form onSubmit={handleSubmit(onDnaSubmit)} className="spacing-lg">
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
        </>
      )}

      {isMutant && !isNotMutant && (
        <SuccessScreen
          message="Mutante detectado"
          handleNew={handleNewAnalysis}
        />
      )}
    </DetectStyles>
  );
};

export default Detect;
