import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const MutantsStateProvider = ({ children }) => {
  const [mutants, setMutants] = useState([]);

  const addMutant = (name, superpower, level) => {
    setMutants((currentMutants) => [
      ...currentMutants,
      { id: uuidv4(), name, superpower, level, fav: false },
    ]);
  };

  const removeMutant = (id) => {
    const filteredMutants = mutants.filter((mutant) => mutant.id !== id);
    setMutants(filteredMutants);
  };

  const favMutant = (id) => {
    const updatedMutants = mutants.map((mutant) => {
      if (mutant.id === id) {
        return { ...mutant, fav: !mutant.fav };
      }
      return mutant;
    });
    setMutants(updatedMutants);
  };

  const mutantsAmount = () => mutants.length;

  return (
    <LocalStateProvider
      value={{
        mutants,
        setMutants,
        addMutant,
        removeMutant,
        favMutant,
        mutantsAmount,
      }}
    >
      {children}
    </LocalStateProvider>
  );
};

MutantsStateProvider.propTypes = {
  children: PropTypes.node,
};

const useMutants = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { MutantsStateProvider, useMutants };
