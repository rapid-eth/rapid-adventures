/* --- Global --- */
import {Menu} from '@horizin/design-system-molecules';

/* --- Local --- */
import {Site} from 'templates';

const CMSTemplate = ({children}) => (
  <Site>
    <Atom.Flex flex={1}>
      {/* Main Content */}
      <Atom.Flex flex={7} order={2}>
        <Atom.Box sx={{p: 3, flex: 1}}>{children}</Atom.Box>
      </Atom.Flex>

      {/* Menu Panel */}
      <Atom.Flex flex={2} sx={{bg: 'smoke'}}>
        <Atom.Box sx={{p: 3, flex: 1}}>
          <Menu
            expanded
            direction="column"
            sx={{
              my: 2,
            }}
            items={[
              {
                label: 'Overview',
                to: '/cms',
              },
              {
                label: 'Content',
                to: '/cms/content',
                children: [
                  {
                    label: 'Adventure',
                    to: '/cms/content/adventure',
                  },
                  {
                    label: 'Quests',
                    to: '/cms/content/quest',
                  },
                ],
              },
              {
                label: 'Create',
                to: '/cms/content-types',
                children: [
                  {
                    label: 'Adventure',
                    to: '/cms/content/adventure/create',
                  },
                  {
                    label: 'Quests',
                    to: '/cms/content/quest/create',
                  },
                ],
              },
              {
                label: 'Settings',
                to: '/cms/settings',
              },
            ]}
          />
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  </Site>
);

export default CMSTemplate;
