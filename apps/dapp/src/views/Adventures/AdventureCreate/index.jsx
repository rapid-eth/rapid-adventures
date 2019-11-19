/**
 * @name CommunicationsSMS
 * @description View list of SMS log.
 * @version 1.0.0
 */
/* --- Global --- */
import {Component} from '@horizin/ui-compose';

/* --- Local --- */
import Forms from 'foundry/Forms';

/* --- Module --- */
// import { sms } from './sample'

const Communications = props => (
  <Atom.Box>
    <Atom.Box sx={{p: 0}}>
      <Atom.Flex
        alignCenter
        between
        sx={{bg: 'smoke', boxShadow: 0, p: 3, zIndex: 1000}}>
        <Atom.Heading lg heavy mb={0}>
          Create Adventure
        </Atom.Heading>
        <Atom.Flex>
          <Atom.Button effects={['blue']} sx={{ml: 2}}>
            Adventure Specification
          </Atom.Button>
        </Atom.Flex>
      </Atom.Flex>

      <Atom.Box sx={{mt: 0}}>{Component(Forms.adventure.standard)}</Atom.Box>
    </Atom.Box>
  </Atom.Box>
);

export default Communications;
