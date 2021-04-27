import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";


const SearchBar = ({searchProduct}) => {


    return (
    <Container>
        <Row>
            <Col>
                <InputGroup size={"md"} className="mb-3">
                    <FormControl
                    onChange={searchProduct}
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button 
                    onClick={(e) => searchProduct(e) }
                    // variant="warning"
                    style={{
                        backgroundColor: "#00233A",
                        backgroundImage: "url('https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=160')",
                        backgroundBlendMode: "exclusion"
                    }}
                    >Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    </Container>
)}


export default SearchBar;
