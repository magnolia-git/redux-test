import React, { useState, useEffect } from 'react';
import { Media, Col, Row } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import '../index.css';

function RenderTeam({team}){

  return (
    <Col style={{padding:'20px'}}>
      <Media>
        <Media left middle>
          <Media object style={{borderRadius: '50%'}} src={baseUrl + team.image} alt={team.name} />
        </Media>
        <Media body className="ml-5">
          <Media heading>{team.name}</Media>
          <p>{team.role}</p>
          <p>{team.description}</p>
        </Media>
      </Media>
    </Col>
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
        <Row xs="1" lg="2">
          {team}
        </Row>
      </Media>
    </div>
  );
}

export default Team;
