import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";


const SearchBar = () => {
    return (
    <Container>
        <Row>
            <Col>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="warning">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    </Container>
)}


export default SearchBar;
