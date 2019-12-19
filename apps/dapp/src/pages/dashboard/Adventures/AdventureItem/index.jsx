import {BoxContext} from '3box-ui-system';
import {StorageRender} from '3box-ui-system-render';

const AdventureItem = props => (
  <BoxContext>
    {box =>
      box.address ? (
        <StorageRender
          address={box.address}
          selector={`adventures.${props.delta}`}
          component={props.component}
          pass={props.pass}
        />
      ) : null
    }
  </BoxContext>
);

export default AdventureItem;
