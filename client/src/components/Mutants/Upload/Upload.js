import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Heading3 from '../../Typography/Heading3';
import TextInput from '../../TextInput/TextInput';
import UploadStyles from './UploadStyles';
import RadioInput from '../../RadioInput/RadioInput';
import Button from '../../Button/Button';
import { useMutants } from '../../../state/MutantsContext';

const uploadSchema = yup.object().shape({
  name: yup.string().required('Requerido.'),
  superpower: yup.string().required('Requerido.'),
  // level: yup.string().required('Requerido.').nullable(),
  level: yup.string().required('Requerido.').nullable(),
});

const Upload = () => {
  const { addMutant } = useMutants();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(uploadSchema) });

  console.log({ errors });

  // TODO: maybe move to a constants.js file
  const levels = [
    {
      label: 'Bajo',
      value: '1',
    },
    {
      label: 'Medio',
      value: '2',
    },
    {
      label: 'Alto',
      value: '3',
    },
    {
      label: 'Muy alto',
      value: '4',
    },
  ];

  const onNewMutantSubmit = (formData) => {
    const { name, superpower, level } = formData;
    addMutant(name, superpower, level);
    reset();
  };

  return (
    <UploadStyles className="spacing">
      <Heading3>Registrar nuevo mutante</Heading3>
      <form onSubmit={handleSubmit(onNewMutantSubmit)} className="spacing">
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
        <div className="levels">
          <div className="levels__label">
            <span>Nivel*</span>
            {errors.level?.message && (
              <span className="input-error">{errors.level.message}</span>
            )}
          </div>
          <div className="levels__options">
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
          </div>
        </div>
        <Button type="submit" centerX>
          Enviar
        </Button>
      </form>
    </UploadStyles>
  );
};

export default Upload;
