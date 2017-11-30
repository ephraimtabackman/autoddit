import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Submitted.scss';
import moment from 'moment';

const DATE_FORMAT = 'MMM D, YYYY HH:MM';
const formatDate = timestamp => moment.unix(timestamp).format(DATE_FORMAT);

const Submitted = ({entity: {username, submitted}}) => (
  <div className="Submitted">Submitted on {formatDate(submitted)} by <span className="Username">{username}</span></div>
);

export default Submitted;