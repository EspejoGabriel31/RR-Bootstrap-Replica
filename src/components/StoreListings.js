import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function StoreListings(){
    return (
        <div style={{margin:"auto"}}>
            <h2 style={{textAlign:"center"}}>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", flexDirection: "row"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign:"left"}}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" roundedCircle />
                        </Col>
                        <Col style={{textAlign:"left"}}>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png" roundedCircle />
                        </Col>
                        <Col md="6" >
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/100x/www.instacart.com/assets/domains/warehouse/logo/58/bc25fc5b-fb60-4c10-a871-ce427c1d7e78.png" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
        
    )
}