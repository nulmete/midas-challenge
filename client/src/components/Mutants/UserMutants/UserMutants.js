import React from 'react';
import { useMutants } from '../../../state/MutantsContext';
import Heading3 from '../../Typography/Heading3';
import UserMutantsStyles from './UserMutantsStyles';
import FavImage from '../../../assets/images/fav.png';
import RemoveImage from '../../../assets/images/remove.png';
import ClickableImage from '../../ClickableImage/ClickableImage';

const UserMutants = () => {
  const { mutants, favMutant, removeMutant, mutantsAmount } = useMutants();
  return (
    <UserMutantsStyles className="spacing">
      <Heading3>Mis mutantes</Heading3>
      {mutantsAmount() > 0 ? (
        <div className="mutants-grid">
          {mutants.map((mutant) => (
            <div
              className={`mutant ${mutant.fav ? 'mutant--fav' : ''}`}
              key={mutant.id}
            >
              <div className="mutant__level">{mutant.level}</div>
              <div className="mutant__name">{mutant.name}</div>
              <div className="mutant__superpower">{mutant.superpower}</div>
              <div className="mutant__actions">
                <ClickableImage
                  onClick={() => favMutant(mutant.id)}
                  src={FavImage}
                  alt="fav"
                />
                <ClickableImage
                  onClick={() => removeMutant(mutant.id)}
                  src={RemoveImage}
                  alt="remove"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-mutants">No tenés ningún mutante.</p>
      )}
    </UserMutantsStyles>
  );
};

export default UserMutants;
