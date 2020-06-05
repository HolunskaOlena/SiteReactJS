import React, { Component } from 'react'
import CarouselBox from '../components/CarouselBox';
import { Carousel, Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck className="m-4">
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            According to StackOverflow, the number of software developers in Europe in 2016 was 4,7 million, which in 2018 reached 5,5 million. Germany has the largest number of software developers - around 901K.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            According to StackOverflow, the number of software developers in Europe in 2016 was 4,7 million, which in 2018 reached 5,5 million. Germany has the largest number of software developers - around 901K.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            According to StackOverflow, the number of software developers in Europe in 2016 was 4,7 million, which in 2018 reached 5,5 million. Germany has the largest number of software developers - around 901K.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        )
    }
}
