import React, { Component } from 'react';
import Link from './Link';

const LinkList = ({links}) => {
  const sortedLinks = Object.keys(links || {})
    .map(id => Object.assign({}, links[id]))
    .sort((a,b) => b.submitted - a.submitted);

  const rows = sortedLinks.map(link => <Link link={link} key={link.id}/>);

  return (
    <div className="LinkList">
      {rows}
    </div>
  );
}

export default LinkList;
