/* --- Global --- */
import React from 'react';
import { BoxInject } from '3box-ui-state';
import { Span } from '@horizin/design-system-atoms';
import { Component } from '@horizin/ui-compose';
import { useEnableEffect, useOpenRequestEffect } from './effects';
import EthereumEnable from './EnableEthereum';
import Avatar from './Avatar';

/* ---  Sub-Component --- */
const Tag = ({ label, ...props }) => <Span {...props}>{label}</Span>;

/* --- Component --- */
const Login = ({ box, ...props }) => {
  const enabled = useEnableEffect(box);
  const login = useOpenRequestEffect(box);
  return (
    <>
      {!login.isDispatched && !login.isLoggedIn ? (
        <span onClick={box.login}>
          {Component(props.componentLoggedOut, {
            label: props.loggedOutLabel,
            ...props.sxLoggedOut
          })}
        </span>
      ) : null}
      {login.isDispatched && !login.isLoggedIn
        ? Component(props.componentLoading, {
            label: props.loadingLabel,
            ...props.sxLoading
          })
        : null}
      {login.isLoggedIn && (
        <span>
          {props.children || (
            <>
              {props.display === 'avatar'
                ? Component(Avatar, {
                    label: props.loggedInLabel,
                    ...props.sxLoggedIn
                  })
                : Component(props.componentLoggedIn, {
                    label: props.loggedInLabel,
                    ...props.sxLoggedIn
                  })}
            </>
          )}
        </span>
      )}
    </>
  );
};

Login.defaultProps = {
  loggedOutLabel: 'Login',
  loadingLabel: 'Loading...',
  loggedInLabel: 'Active',
  componentLoggedOut: Tag,
  componentLoading: Tag,
  componentLoggedIn: Tag,
  display: 'tag',
  sxLoggedOut: {
    pointer: true,
    tag: true
  },
  sxLoading: {
    pointer: true,
    tag: true
  },
  sxLoggedIn: {
    pointer: true,
    tag: true
  }
};

Login.propTypes = {
  spaceAuto: PropTypes.bool
};

export default props => (
  <BoxInject>
    <Login {...props} />
  </BoxInject>
);
