import React from 'react';
import { Card, Collapse } from "antd";
import { Container, CoachesWrapper, CoachesBoxLeft, CoachesBoxRight } from "./CoachesPage.styled";
import { MainHeading, CardCoach } from '../../../components';
import data from '../../../dummy/coaches';


function Coaches(props: any): JSX.Element {
  const { Meta } = Card;
  const { Panel } = Collapse;

  function callback(key: any) {
    // console.log(key);
  }

  return (
  <Container>
    <MainHeading
      title={"Our Coaches"}
    />

    <CoachesWrapper>
      <CoachesBoxLeft>
        <Collapse defaultActiveKey={['1']} onChange={callback} style={{border: 'none', backgroundColor: 'white'}}>
          <Panel header="Category" key="1" style={{border: 'none'}}>
            <p>All categories</p>
            <p>Legal</p>
            <p>Writing</p>
          </Panel>
          <Panel header="Location" key="2" style={{border: 'none'}}>
            <p>Search locations</p>
          </Panel>
        </Collapse>
      </CoachesBoxLeft>
      <CoachesBoxRight>
        {data.map((item, key) => 
          <CardCoach
            key={key}
            data={item}
          />
        )}
      </CoachesBoxRight>
    </CoachesWrapper>


  </Container>
  )
}

export default Coaches;