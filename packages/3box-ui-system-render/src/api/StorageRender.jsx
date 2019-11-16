/* --- Global Dependencies --- */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BoxInject } from '3box-ui-state';

/* --- Local Dependencies --- */
import { Component, ListObjectValues } from '@horizin/ui-compose';
import { Effects } from '3box-ui-state';

/* --- Component --- */
const StorageRender = ({ box, ...props }) => {
  const storage = Effects.useStorageRetrieveEffect(box, props);
  const space = Effects.useGetSpaceEffect(box, props);

  const address = '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d';
  console.log(address, props.space, 'box.address, props.space');
  useEffect(() => {
    box.static.getSpace(address, props.space).then(res => {
      console.log(res, 'spssccca');
    });
  }, [props.index]);

  return !storage.data ? null : props.isList ? (
    <ListObjectValues
      data={storage.data}
      pass={props.pass}
      component={props.component}
    />
  ) : (
    Component(props.component, {
      ...storage.data,
      ...props.pass
    })
  );
};

StorageRender.defaultProps = {
  canRequestData: true,
  component: () => null,
  isGlobalConfig: false,
  isRefresh: true
};

StorageRender.propTypes = {
  address: PropTypes.string,
  canRequestData: PropTypes.bool,
  component: PropTypes.func.isRequired,
  selector: PropTypes.string,
  space: PropTypes.string
};

export default props => (
  <BoxInject>
    <StorageRender {...props} />
  </BoxInject>
);
