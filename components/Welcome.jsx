import React from 'react';
import { Button } from 'reactstrap';


const Welcome = () => (
  <div className="hero my-5" data-testid="hero">

    <h1 className="text-center" data-testid="hero-title">
      Mi ez?
    </h1>
    <br/>

    <p className="text-justify" data-testid="hero-lead">
      A <strong>kocka.xyz</strong> platform oktatási szolgáltatás, amely általános iskolások számára kínál segítséget a vizsgákra való felkészülésben. 
      <br/><br/>
      Habár a tehetséggondozásra kiemelt figyelem irányul, a <strong>felzárkóztatás</strong>ra kevésbé figyel a közoktatás.
      <br/><br/>
      Intezív felkészítőink és platformunk elsősorban a <strong>kötelező képességvizsga</strong> tematikájára összpontosítanak.
      <br/><br/>
      <Button
        className="nav-link call-to-action-button "
        href="/api/auth/login"
        testId="navbar-login-desktop-main">
        Csatlakozz!
      </Button>
    </p>


  </div>
);

export default Welcome;
