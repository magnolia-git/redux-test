import React, { useState, useEffect } from 'react';
import { Media, Col, Row } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import '../index.css';

function RenderTeam({team}){

  return (
    <div>
      {/*  Media is used instead of Card */}
      <Media tag="li">
        <Media left middle>
          <Media object style={{borderRadius: '50%'}} src={baseUrl + team.image} alt={team.name} />
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

        <Col xs="6" key={team.id}>
          <RenderTeam team={team} />
        </Col>

    );
  });

  return (
    <div>
      <div>
        <h1 id="title">Merit America Bank Team Members</h1>
        <hr />
      </div>

        <Media list>
        {team}
        </Media>

    </div>
  );
}

export default Team;
