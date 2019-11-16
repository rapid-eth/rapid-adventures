import {Site} from 'templates';
import {CodeHighlight, Markdown} from '@horizin/design-system-molecules';

/* --- Component --- */
export default () => (
  <Site
    sx={{bg: 'paper', color: 'text'}}
    sxMain={{alignItems: 'center', justifyContent: 'center'}}>
    <Atom.Container sx={{maxWidth: [1, 1, 780, 780]}}>
      <Atom.Box sx={{py: 3, textAlign: 'center'}}>
        <Atom.Heading giga>Rapid Adventures</Atom.Heading>
        <CodeHighlight>
          git clone git@github.com:rapid-eth/rapid-adventures
        </CodeHighlight>
      </Atom.Box>
    </Atom.Container>
  </Site>
);
