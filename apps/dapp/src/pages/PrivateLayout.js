import React from 'react';
import { Route } from 'react-router';
// import { Drawer } from '../controls';
// import { AppStyles as styles } from '../styles';

const PrivateLayout = ({ component: Component, title, ...rest }) => {
  return (
    <Route {...rest}
      render={props => (
        <div>
          {/* <NavigationBar location={props.location} /> */}
          <Component {...props} />
        </div>
      )}
    />
  );
};


export default PrivateLayout