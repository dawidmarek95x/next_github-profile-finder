"use client";
import getUser from "@/lib/getUser";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
}

interface UserProfileCardProps {
  name: string;
}

const UserProfileCard = ({ name }: UserProfileCardProps) => {
  const [userData, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userFetchedData = getUser(name);
      const userData = await userFetchedData;
      setUser(userData);
    };

    fetchUserData();
  }, [name]);

  return (
    <Container className="pt-2">
      <Row className="justify-content-center">
        <Col sm={9} md={6} lg={4}>
          {userData && (
            <Card>
              <Card.Img variant="top" src={userData?.avatar_url} />
              <Card.Body>
                <Card.Title className="fw-semibold">
                  {userData?.name}
                </Card.Title>
                <Card.Text>{userData?.bio}</Card.Text>
                <div className="d-flex justify-content-center">
                  <a
                    href={userData?.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="dark" size="sm">
                      Visit Profile
                    </Button>
                  </a>
                </div>
              </Card.Body>
            </Card>
          )}
          {!userData && (
            <p className="mt-3 text-center">
              The GitHub user profile you are looking for does not exist!
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfileCard;
