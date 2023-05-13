import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';



function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const [highlightedUserId, setHighlightedUserId] = useState(null);

  const handleMouseEnter = (userId) => {
    setHighlightedUserId(userId);
  };

  const handleMouseLeave = () => {
    setHighlightedUserId(null);
  };

  return (
    <div>
      <Container >
        <div className="row">
          {users.map(user => (
            <div className="col-md-4 mb-4"  key={user.id}>
              <Card
                onMouseEnter={() => handleMouseEnter(user.id)}
                onMouseLeave={handleMouseLeave}
                border={highlightedUserId === user.id ? "primary" : "light"}
                className={highlightedUserId === user.id ? "selected-card" : ""}
              >
                <Card.Body>
                  <Card.Title><b><i>{user.name}</i></b></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">ID: {user.id}</Card.Subtitle>
                  <Card.Text>{user.email}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;




