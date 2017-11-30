import React, { Component } from 'react';
import '../style/Button.scss';

const mergedClassName = (className) => ['Button', className].join(' ');

const Button = (props) => <button {...props} className={mergedClassName(props.className)} >{props.children}</button>;

export default Button;