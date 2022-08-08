import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { admin, support } from "../../variables/general";
import "./LogInScreen.css";

export default function LogInScreen() {
  let navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showErrorAlert, setErrorAlert] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setErrorAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, [showErrorAlert]);

  const errorAlert = () => {
    if (showErrorAlert) {
      return (
        <Alert
          className="alert-pos"
          variant="danger"
          onClose={() => setErrorAlert(false)}
          dismissible
          transition
        >
          <Alert.Heading>Error!</Alert.Heading>
          <p>Username or password is incorrect! Try again.</p>
        </Alert>
      );
    }
  };

  const processLogin = () => {
    if (username === admin?.username && password === admin?.password) {
      navigate({
        pathname: "/dashboard",
      });
    } else if (username === support.username && username === support.password) {
      navigate({
        pathname: "/dashboard",
      });
    } else {
      setErrorAlert(true);
      errorAlert();
    }
  };
  return (
    <div className="sign-in-container">
      <div className="sign-in-card-container">
        <div>
          <h4 className="sign-in-login-text">Login</h4>
        </div>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button onClick={() => processLogin()} variant="primary" size="md">
            Login
          </Button>
        </div>
        {errorAlert()}
      </div>
    </div>
  );
}
