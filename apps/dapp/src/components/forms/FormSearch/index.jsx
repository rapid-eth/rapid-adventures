/**
 * @name FormFeedback
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import useForm from 'react-hook-form';
import {GeograpicLocation} from './GeograpicLocation';
const styles = {
  searchSelect: {
    width: 200,
    mr: 4,
  },
};
/* --- Component --- */
const FormFeedback = ({styled, ...props}) => {
  const isFilterOn = false;
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */
  const [isComplete, setComplete] = useState();

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
      console.log(values, 'values');
      setComplete(true); // Validate submission and set complete status to true
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Atom.Flex sx={{flex: 1}}>
        <Atom.Flex column sx={{flex: 1}}>
          <Molecule.Field
            name="search"
            variants={['text']}
            disabled={isComplete}
            register={register}
            errors={errors}
            placeholder="Search"
            sx={{
              height: 50,
            }}
            sxWrapper={{
              flex: 4,
              width: '100%',
            }}
          />
          {isFilterOn && (
            <Atom.Flex sx={{py: 3}}>
              {/* Skils */}
              <Molecule.Field
                name="skills"
                as="select"
                variants={['text']}
                disabled={isComplete}
                register={register}
                errors={errors}
                label="Skills"
                placeholder="Skills"
                sx={{
                  height: 50,
                }}
                sxWrapper={styles.searchSelect}>
                <option value="select">Select</option>
              </Molecule.Field>
              {/* Bounties Complete */}
              <Molecule.Field
                name="search"
                as="select"
                variants={['text']}
                disabled={isComplete}
                register={register}
                errors={errors}
                label="Bounties Completed"
                placeholder="Search"
                sx={{
                  height: 50,
                }}
                sxWrapper={styles.searchSelect}>
                <option value="select">Select</option>
              </Molecule.Field>
              {/* Bounties Complete */}
              <Molecule.Field
                name="leaderboard"
                as="select"
                variants={['text']}
                disabled={isComplete}
                register={register}
                errors={errors}
                label="Leaderboard Rank"
                placeholder="Leaderboard Rank"
                sx={{
                  height: 50,
                }}
                sxWrapper={styles.searchSelect}>
                <option value="select">Select</option>
              </Molecule.Field>

              {/* Bounties Complete */}
              <Molecule.Field
                name="persona"
                as="select"
                variants={['text']}
                disabled={isComplete}
                register={register}
                errors={errors}
                label="Persona"
                placeholder="Persona"
                sx={{
                  height: 50,
                }}
                sxWrapper={styles.searchSelect}>
                <option value="select">Select</option>
              </Molecule.Field>
            </Atom.Flex>
          )}
        </Atom.Flex>

        <Atom.Box sx={{pl: 4}}>
          <Atom.Button bg="blue" color="white" sx={{m: 0}}>
            <Atom.Flex center column>
              {isComplete ? (
                <Atom.Span>Searching...</Atom.Span>
              ) : (
                <Atom.Span>Search</Atom.Span>
              )}
            </Atom.Flex>
          </Atom.Button>
        </Atom.Box>
      </Atom.Flex>
    </form>
  );
};

FormFeedback.defaultProps = {
  styled: {},
};

FormFeedback.propTypes = {
  styled: PropTypes.object,
};

export default FormFeedback;

/* --- Sub-Components --- */
