/* --- Global --- */
import React from 'react';
import PropTypes from 'prop-types';
import { withEthers } from 'ethers-react-system';
import { Span } from '@horizin/design-system-atoms';
import { Component } from '@horizin/ui-compose';

/* ---  Component --- */
const EnableEthereum = props => {
  const ethers = withEthers();
  const enabled = false;

  return (
    <>
      {!enabled.dispatched && !enabled.ready && (
        <span onClick={() => ethers.enableRequest()}>
          {Component(props.componentIsDisconnected, {
            label: props.disconnectedLabel,
            ...props.sxDisconnected
          })}
        </span>
      )}
      {enabled.dispatched && !enabled.ready
        ? Component(props.componentIsLoading, {
            label: props.loadingLabel,
            ...props.sxLoading
          })
        : null}
      {enabled.ready &&
        (props.children ||
          Component(props.componentIsConnected, {
            label: props.connectedLabel,
            ...props.sxConnected
          }))}
    </>
  );
};

/* ---  Sub-Component --- */
const Tag = ({ label, ...props }) => <Span {...props}>{label}</Span>;

/* ---  Configuration --- */
EnableEthereum.defaultProps = {
  disconnectedLabel: 'Enable',
  loadingLabel: 'Loading',
  connectedLabel: 'Enabled',
  componentIsDisconnected: Tag,
  componentIsLoading: Tag,
  componentIsConnected: Tag,
  sxDisconnected: {
    pointer: true,
    tag: true
  },
  sxLoading: {
    pointer: true,
    tag: true
  },
  sxConnected: {
    pointer: true,
    tag: true
  }
};

EnableEthereum.propTypes = {
  disconnectedLabel: PropTypes.string,
  loadingLabel: PropTypes.string,
  connectedLabel: PropTypes.string,
  sxDisconnected: PropTypes.object,
  sxLoading: PropTypes.object,
  sxConnected: PropTypes.object,
  componentIsDisconnected: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType
  ]),
  componentIsLoading: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType
  ]),
  componentIsConnected: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType
  ])
};

export default EnableEthereum;
