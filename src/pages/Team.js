import React, { useState, useEffect } from 'react';
import { Media, Col, Row } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import '../index.css';

function RenderTeam({team}){

  return (
    <div className="col">
      <Media>
        <Media left middle>
          <img style={{borderRadius: '50%', width: '200px'}} src={baseUrl + team.image} alt={team.name} />
        </Media>
        <Media body className="ml-5">
          <Media heading>{team.name}</Media>
          <p>{team.role}</p>
          <p>{team.description}</p>
        </Media>
      </Media>
    </div>
  );
}

function Team(props) {

  const team = props.team.team.map((team) => {
    return (
      <div key={team.id}>
        <RenderTeam team={team} />
      </div>
    );
  });

  return (
    <div className="container">
      <div>
        <h1 id="title">Merit America Bank Team Members</h1>
        <hr />
      </div>
      <Media list>
        <Row lg="2" md="1">
          {team}
        </Row>
      </Media>
    </div>
  );
}

export default Team;
