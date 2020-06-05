import React, { Component } from 'react'
import { Container, Row, Col, Media } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container style={{marginTop: '80px'}}>
                <Row>
                    <Col md="9">
                        <Media className="m-2">
                            <img
                                width={150}
                                height={150}
                                className="mr-5"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIrILnDC_mM0JdMTipb_asxPUolgeo6_pzCXCdR8ZwJ5dAhvEw&usqp=CAU"
                            />
                            <Media.Body>
                                <h3>Blog post</h3>
                                <p>
                                    React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router[10] are respective examples of such libraries.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md="9">
                        <Media className="m-2">
                            <img
                                width={150}
                                height={150}
                                className="mr-5"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIrILnDC_mM0JdMTipb_asxPUolgeo6_pzCXCdR8ZwJ5dAhvEw&usqp=CAU"
                            />
                            <Media.Body>
                                <h3>Blog post</h3>
                                <p>
                                    React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router[10] are respective examples of such libraries.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md="9">
                        <Media className="m-2">
                            <img
                                width={150}
                                height={150}
                                className="mr-5"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIrILnDC_mM0JdMTipb_asxPUolgeo6_pzCXCdR8ZwJ5dAhvEw&usqp=CAU"
                            />
                            <Media.Body>
                                <h3>Blog post</h3>
                                <p>
                                    React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router[10] are respective examples of such libraries.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>

                    <Col md="9">
                        <Media className="m-2">
                            <img
                                width={150}
                                height={150}
                                className="mr-5"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIrILnDC_mM0JdMTipb_asxPUolgeo6_pzCXCdR8ZwJ5dAhvEw&usqp=CAU"
                            />
                            <Media.Body>
                                <h3>Blog post</h3>
                                <p>
                                    React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router[10] are respective examples of such libraries.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </Container>
        )
    }
}
