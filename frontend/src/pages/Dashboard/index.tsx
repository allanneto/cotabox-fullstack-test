import React from 'react';

import * as Styled from './styles';

const Dashboard: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Input placeholder="First Name" />
        <Styled.Input placeholder="Last Name" />
        <Styled.Input placeholder="Participation" />
        <Styled.SubmitButton>SEND</Styled.SubmitButton>
      </Styled.Header>
      <Styled.Content>
        <Styled.Title>DATA</Styled.Title>
        <Styled.SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Styled.SubTitle>
        <Styled.DataBox>
          <Styled.Table>
            <Styled.Item>
              <li> </li>
              <li>First Name</li>
              <li>Last Name</li>
              <li>Participation</li>
            </Styled.Item>
            <Styled.Item>
              <li>1</li>
              <li>Marcos</li>
              <li>Moraes</li>
              <li>10</li>
            </Styled.Item>
          </Styled.Table>
        </Styled.DataBox>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Dashboard;
