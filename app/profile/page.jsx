'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import { ddbDocClient } from "../../config/ddbDocClient.js";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

function Profile() {
  const { user, isLoading } = useUser();
  let data = [];
  const [tableData, setTableData] = useState([]);

  //   scanning the dynamodb table
  const scanTable = async () => {
    try {
      const term = user.email
      data = await ddbDocClient.send(new ScanCommand({ 
        TableName: "kocka_users",
        FilterExpression: '#cat = :cat',
        ExpressionAttributeNames: {
            '#cat': 'id',
        },
        ExpressionAttributeValues: {
            ':cat': term,
        },

      }));
      setTableData(data.Items);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    scanTable();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          
          <Row className="align-items-center profile-header mb-5 text-center text-md-left" data-testid="profile">
            <Col md>
              <h2 data-testid="profile-name">{user.name}</h2>
              {/* {tableData.map((item) => (
                
                <p className="lead text-muted" data-testid="profile-email">
                    {item.class}
                </p>
              ))} */}
              <p className="lead text-muted" data-testid="profile-email">
                {user.email}
              </p>
            </Col>
          </Row>
          {/* <Row data-testid="profile-json">
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          </Row>  */}
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});