import { Component } from "react";

import arrayOfFantasyBooks from '../data/fantasy.json'

import {Container, Row, Col,} from 'react-bootstrap'

class LatestReleases extends Component {
    render(){
        return(
            <Container className="bg-dark">
                <Row >
                    <Col >
                    {arrayOfFantasyBooks.map((book , index) => {
                        return(
                        <img className="my-2 mx-2" key={`Book-${index}`} width={200} height={200} src={book.img} alt={book.title} />
                    )} )}  
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LatestReleases