import React, { Component } from 'react';
import '../style/LinksPage.scss';
import { Link } from 'react-router-dom';
import Button from './Button';
import LinkListConnector from '../containers/LinkListConnector';

const NewLinkButton = () => (
  <Link to="/submit"><Button className="add">Add Link</Button></Link>
);

const LinksPage = () => (
  <div className="LinksPage">
    <div className="LinksActions">
      <NewLinkButton />
    </div>
    <LinkListConnector />
  </div>
);

export default LinksPage;
