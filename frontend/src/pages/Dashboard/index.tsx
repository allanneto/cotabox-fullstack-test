import React, { useState, useEffect } from 'react';

import Chart from 'react-apexcharts';
import * as Styled from './styles';

import api from '../../services/api';

interface User {
  id: string;
  first_name: string;
  last_name: string;
  participation: number;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participation, setParticipation] = useState('');
  const [series, setSeries] = useState<number[]>([]);
  const [options, setOptions] = useState({});

  const loadUsers = async () => {
    const response = await api.get<User[]>('/users');

    const values: number[] = [];
    const userLabels: string[] = [];

    response.data.map(user => {
      userLabels.push(`${user.first_name} ${user.last_name}`);
      values.push(user.participation);
    });

    setSeries(values);
    setOptions({
      labels: userLabels,
    });

    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const sendForm = async () => {
    if (!firstName || !lastName || !participation) {
      return alert('Validation Fails');
    }

    if (participation === '0') {
      return alert('Participation needs to be greater then 0');
    }
    try {
      await api.post('/users', {
        first_name: firstName,
        last_name: lastName,
        participation,
      });

      setFirstName('');
      setLastName('');
      setParticipation('');

      loadUsers();
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Input
          placeholder="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <Styled.Input
          placeholder="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
        <Styled.Input
          placeholder="Participation"
          value={participation}
          onChange={event => setParticipation(event.target.value)}
        />
        <Styled.SubmitButton onClick={sendForm}>SEND</Styled.SubmitButton>
      </Styled.Header>
      <Styled.Content>
        <Styled.Title>DATA</Styled.Title>
        <Styled.SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Styled.SubTitle>
        <Styled.DataBox>
          <Styled.Table>
            <Styled.Item>
              <li />
              <li>First Name</li>
              <li>Last Name</li>
              <li>Participation</li>
            </Styled.Item>
            {users.length === 0 ? (
              <Styled.Item>
                <li />
                <li />
                <li />
                <li />
              </Styled.Item>
            ) : (
              users.map((user, index) => {
                return (
                  <Styled.Item>
                    <li key={user.id}>{index + 1}</li>
                    <li>{user.first_name}</li>
                    <li>{user.last_name}</li>
                    <li>{user.participation}</li>
                  </Styled.Item>
                );
              })
            )}
          </Styled.Table>
          <Chart options={options} series={series} type="donut" width="380" />
        </Styled.DataBox>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Dashboard;
