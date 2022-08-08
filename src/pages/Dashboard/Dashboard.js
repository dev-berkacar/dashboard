import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { users } from "../../variables/general";
import "./Dashboard.css";

export default function Dashboard(props) {
  const headerItems = [];
  const firstItem = users[0];
  Object.keys(firstItem).forEach((element) => headerItems.push(element));
  const [fullName, setFullName] = useState("");
  const [operationNumber, setOperationNumber] = useState();
  const [list, updateList] = useState(users);
  const [dropdownValue, setDropdownValue] = useState("");
  const [dropdownText, setDropdownText] = useState("Filter Type");

  const deleteItem = (index) => {
    updateList((prevState) => {
      let items = [...prevState];
      items.splice(index, 1);
      return items;
    });
  };

  useEffect(() => {
    if (dropdownValue === "0") {
      setDropdownText("Id");
    } else if (dropdownValue === "1") {
      setDropdownText("isUser");
    } else if (dropdownValue === "2") {
      setDropdownText("fullName");
    } else if (dropdownValue === "3") {
      setDropdownText("operationName");
    }
  }, [dropdownValue]);

  const addNewUser = () => {
    updateList((prevState) => {
      let items = [...prevState];
      const newUser = {
        id: items.length + 1,
        isUser: true,
        fullName: fullName,
        operationNumber: operationNumber,
      };
      items.push(newUser);
      return items;
    });
  };

  function inputOnKeyUp() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[parseInt(dropdownValue)];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const handleSelectDropdown = (e) => {
    setDropdownValue(e);
  };

  return (
    <>
      <NavBar />
      <Container>
        <h3 className="add-new-user-title">Add New User</h3>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Control
            type="username"
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            placeholder="fullname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="number"
            name="operationNumber"
            onChange={(e) => setOperationNumber(e.target.value)}
            value={operationNumber}
            placeholder="operation number"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button onClick={() => addNewUser()} variant="primary" size="md">
            Add
          </Button>
        </div>
        <Row>
          <div className="d-flex flex-row justify-content-between">
            <h2 className="pt-4">Users</h2>
            <div className="d-flex">
              <DropdownButton
                onSelect={handleSelectDropdown}
                className="dropdown"
                id="dropdown-basic-button"
                title={dropdownText}
              >
                <Dropdown.Item eventKey="0">Id</Dropdown.Item>
                <Dropdown.Item eventKey="1">isUser</Dropdown.Item>
                <Dropdown.Item eventKey="2">fullName</Dropdown.Item>
                <Dropdown.Item eventKey="3">operationName</Dropdown.Item>
              </DropdownButton>
              <input
                className="input-margin"
                type="text"
                id="myInput"
                onKeyUp={() => inputOnKeyUp()}
                placeholder="filter"
              />
            </div>
          </div>

          <div className="p-2">
            <Table id="myTable" striped bordered hover>
              <thead>
                <tr>
                  {headerItems.map((item, key) => (
                    <th key={key}>{item}</th>
                  ))}
                  <div>Actions</div>
                </tr>
              </thead>
              <tbody>
                {list?.map((item, key) => (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.isUser ? "true" : "false"}</td>
                    <td>{item.fullName}</td>
                    <td>{item.operationNumber}</td>
                    <div>
                      <button
                        type="button"
                        onClick={() => deleteItem(key)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Row>
      </Container>
    </>
  );
}
