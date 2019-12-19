/**
 * @name QuestCreate
 * @description Create a decentralized quest using the RAPID specification.
 * @version 0.0.1
 */
/* --- Global --- */
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import Forms from 'foundry/Forms';

const QuestCreate = props => (
  <Atom.Box>
    <Atom.Box sx={{p: 0}}>
      <Atom.Flex
        alignCenter
        between
        sx={{bg: 'smoke', boxShadow: 0, p: 3, zIndex: 1000}}>
        <Atom.Heading lg heavy mb={0}>
          Create Quest
        </Atom.Heading>
        <Atom.Flex>
          <Atom.Button effects={['blue']} sx={{ml: 2}}>
            Quest Specification
          </Atom.Button>
        </Atom.Flex>
      </Atom.Flex>

      <Atom.Box sx={{mt: 0}}>{Component(Forms.quest.standard)}</Atom.Box>
    </Atom.Box>
  </Atom.Box>
);

export default QuestCreate;
