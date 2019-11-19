import {BoxContext} from '3box-ui-system';
import {StorageRender} from '3box-ui-system-render';

const AdventureStorageList = props => (
  <BoxContext>
    {box =>
      box.address ? (
        <StorageRender
          isList
          address={box.address}
          selector={'questList'}
          component={props.component}
          pass={props.pass}
        />
      ) : null
    }
  </BoxContext>
);

export default AdventureStorageList;
