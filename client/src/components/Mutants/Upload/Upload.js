import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Heading3 from '../../Typography/Heading3';
import TextInput from '../../TextInput/TextInput';
import UploadStyles from './UploadStyles';
import RadioInput from '../../RadioInput/RadioInput';
import Button from '../../Button/Button';
import { useMutants } from '../../../state/MutantsContext';

const Upload = () => {
  const { addMutant } = useMutants();

  // TODO: validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // TODO: maybe move to a constants.js file
  const levels = [
    {
      label: 'Bajo',
      value: 'low',
    },
    {
      label: 'Medio',
      value: 'medium',
    },
    {
      label: 'Alto',
      value: 'high',
    },
    {
      label: 'Muy alto',
      value: 'veryHigh',
    },
  ];

  const onNewMutantSubmit = (formData) => {
    const { name, superpower, level } = formData;
    addMutant(name, superpower, level);
    reset();
  };

  return (
    <UploadStyles>
      <Heading3>Registrar nuevo mutante</Heading3>
      <form onSubmit={handleSubmit(onNewMutantSubmit)}>
        <TextInput
          label="Nombre del mutante"
          htmlFor="name"
          required
          register={register}
          error={errors.name?.message}
        />
        <TextInput
          label="Superpoder"
          htmlFor="superpower"
          required
          register={register}
          error={errors.superpower?.message}
        />
        <p>Nivel*</p>
        {levels.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            name="level"
            value={value}
            htmlFor={value}
            required
            register={register}
          />
        ))}
        <Button type="submit">Enviar</Button>
      </form>
    </UploadStyles>
  );
};

export default Upload;
