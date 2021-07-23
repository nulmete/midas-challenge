import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useAlert } from 'react-alert';
import {
  getItemFromLocalStorage,
  saveItemToLocalStorage,
} from '../utils/localStorage';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const MutantsStateProvider = ({ children }) => {
  const alert = useAlert();

  // gets mutants from localStorage (if there are any)
  // else, it is initialised as an empty array
  const [mutants, setMutants] = useState(
    getItemFromLocalStorage('mutants') || []
  );

  const addMutant = (name, superpower, level) => {
    const mutant = {
      id: uuidv4(),
      name,
      superpower,
      level,
      fav: false,
    };

    // saves mutant to Context and localStorage
    setMutants((currentMutants) => {
      saveItemToLocalStorage('mutants', [...currentMutants, { ...mutant }]);
      return [...currentMutants, { ...mutant }];
    });
  };

  const removeMutant = (id) => {
    const filteredMutants = mutants.filter((mutant) => mutant.id !== id);

    // deletes mutant from localStorage
    saveItemToLocalStorage('mutants', filteredMutants);

    // deletes mutant from Context
    setMutants(filteredMutants);

    alert.success('Mutante eliminado.');
  };

  const favMutant = (id) => {
    const favvedMutantsLength = mutants.filter((mutant) => mutant.fav).length;

    const updatedMutants = mutants.map((mutant) => {
      if (mutant.id === id) {
        // mutant is already a fav
        if (mutant.fav) {
          return { ...mutant, fav: false };
        }
        // mutant is not a fav
        // and there is not an empty spot for a new fav
        if (favvedMutantsLength >= 5) {
          alert.error('Ya tenés 5 mutantes como fav.');
          return mutant;
        }
        // mutant is not a fav
        // and there is an empty spot for a new one
        return { ...mutant, fav: true };
      }
      return mutant;
    });

    // saves updated mutant to localStorage
    saveItemToLocalStorage('mutants', updatedMutants);

    // saves updated mutant to Context
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
