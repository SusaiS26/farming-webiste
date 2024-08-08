import React from "react";
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import piglog1 from './pigphotos/piglog1.jpeg';
import Card from 'react-bootstrap/Card';
import pigs1 from '../src/pigphotos/largeyashi.jpg';
import pigs2 from '../src/pigphotos/landrise.jpg';
import pigs3 from '../src/pigphotos/durak.jpg';
import pigs4 from '../src/pigphotos/Midlewhite.jpg';
import pigs5 from '../src/pigphotos/hampshire-breed.jpg';
import pigs6 from '../src/pigphotos/Berkshire.jpeg';
import pigs7 from '../src/pigphotos/ghungroo.jpeg';
import Cardvalue from "./Cardvalue";
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footerpage from './Footerpage';






function Homepage({ cart }) {
    return (

        <div className="fluid-container style-container">
            <Header />
            <div className="row">
                <div className="col-12 carousel-padding">
                    <Carousel className="carousel-width" interval={3000000}>
                        <Carousel.Item>
                            <img src={pigs1} alt="First slide" className='d-block w-100 custom-height' />
                            <Carousel.Caption>
                                {/* <h2 className="pigyorkshire">பெரிய வெள்ளை யார்க்ஷயர் பன்றி(Large white Yorkshire)</h2>
                                <p className="pigyorkshire">இது இந்தியாவில் பயன்படுத்தப்படும் பன்றியின் மிகவும் பொதுவான இனமாகும்.
                                    இது அதிக பால் உற்பத்தி மற்றும் குறைந்த கொழுப்பு உள்ளடக்கம் இறைச்சி உற்பத்திக்காக
                                    அறியப்படுகிறது.
                                </p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={pigs2} alt="First slide" className='d-block w-100 custom-height' />
                            <Carousel.Caption>
                                <h3 className="textlargewhtwo">லேண்ட்ரேஸ் பன்றி(Landrace)</h3>
                                <p className="textlargewhtwo1">இந்த இனத்தின் பிறப்பிடம் டென்மார்க் ஆகும்,
                                    இது உலகில் மிக உயர்ந்த தரமான பன்றி இறைச்சியை உற்பத்தி
                                    செய்வதற்காக வளர்க்கப்பட்டு உணவளிக்கப்படுகிறது.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={pigs3} alt="First slide" className='d-block w-100 custom-height' />
                            <Carousel.Caption>
                                <h3>துரோக் or டூராக் பன்றி(Duroc)</h3>
                                <p className='pigtypecs'>
                                    இந்த இனம் ஒரு பந்தய குதிரையின் பெயரால் பெயரிடப்பட்டது,
                                    மேலும் அவருக்கு நெப்போலியனின் உதவியாளர் ஜெனரல் கிறிஸ்டோஃப் டுரோக் பெயரிடப்பட்டது.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={pigs4} alt="First slide" className='d-block w-100 custom-height' />
                            <Carousel.Caption className="carouselmiddlewhite">
                                <h3>மையம் வெள்ளை யார்க்ஷயர்(Middle White Yorkshire)</h3>
                                <p className='pigtypecs'>
                                    இந்த இனம் இந்தியாவின் சில குறிப்பிட்ட பகுதிகளில் பயன்படுத்தப்படுகிறது.
                                    இது ஆரம்ப முதிர்ச்சியடைந்த இனமாகும். இவை யார்க்ஷயரை விட குறைவான செழிப்பான இனமாகும்.
                                    இது வெள்ளை நிற கோட் நிறத்தைக் கொண்டுள்ளது.

                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            <div className="row">
                <div className="col-12">
                    <section className="card-style d-flex align-items-center">
                        <div className="card-inner-text col-12">
                            <h3>Farming time</h3>
                            <p>Morning 6 AM to Evenig 6 PM We open any time once you will call we stay there only </p>

                        </div>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row d-flex flex-wrap justify-content-between card-margin">
                        <div className="small-cards col-sm-12 col-md-4  mb-3">
                            <Card >
                                <Card.Img variant="top" src={pigs1} />
                                <Card.Body>
                                    <Card.Title>Large White Yorkshire</Card.Title>
                                    <Card.Text>
                                        It is a small-sized animal. In India, it is the most widely reared breed of pig.
                                        It is renowned for producing large amounts of milk as well as meat with minimal fat content.
                                        The body is white with patches of black.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="small-cards col-sm-12 col-md-4  mb-3">
                            <Card >
                                <Card.Img variant="top" className="middlewhiteimage" src={pigs4} />
                                <Card.Body>
                                    <Card.Title>Middle White </Card.Title>
                                    <Card.Text>
                                        The Middle White is a British breed.
                                        It originated in Yorkshire,
                                        and derived from the Large White and the now-extinct Small White.
                                        Known for its distinctive snub-nosed profile,referred to as the "London porker."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="small-cards col-sm-12 col-md-4  mb-3">
                            <Card >
                                <Card.Img variant="top" src={pigs5} />
                                <Card.Body>
                                    <Card.Title>Hampshire</Card.Title>
                                    <Card.Text>
                                        Hampshire, breed of pig developed in the United States from the Wessex Saddleback and other varieties first imported from England around 1825.
                                        fine-coated Hampshire is black with a white saddle.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="small-cards col-sm-12 col-md-4  mb-3">
                            <Card >
                                <Card.Img variant="top" src={pigs6} />
                                <Card.Body>
                                    <Card.Title>Berkshire pig</Card.Title>
                                    <Card.Text>
                                        The Berkshire is a British breed of pig. It originated in the English county of Berkshire,
                                        for which it is named. It is normally black,with some white on the snout, on the lower legs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="small-cards col-sm-12 col-md-4  mb-3">
                            <Card >
                                <Card.Img variant="top" src={pigs2} />
                                <Card.Body>
                                    <Card.Title>Landrace pig</Card.Title>
                                    <Card.Text>
                                        The Landrace pig is a highly regarded breed known for its excellent meat quality and prolific breeding.
                                        Originating from Denmark, the Landrace has been selectively bred for its long body and lean muscle.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="small-cards col-sm-12 col-md-4 ghugrooimage mb-3">
                            <Card >
                                <Card.Img variant="top" className="ghugroopig" src={pigs7} />
                                <Card.Body>
                                    <Card.Title>Ghungroo</Card.Title>
                                    <Card.Text>
                                        Ghungroo (GR) is a native pig breed which is mainly reared by the tribes of Duars' Valley and allied zone in India. Higher prolificacy,
                                        faster growth rate.
                                        The breed is well-adapted to local conditions.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="small-cards col-sm-12 col-md-4 mb-3">
                            <Card >
                                <Card.Img variant="top" src={pigs3} />
                                <Card.Body>
                                    <Card.Title>Duroc</Card.Title>
                                    <Card.Text>
                                        The breed, one of several red pig strains which developed around 1800 in New England, originated in Africa.
                                        One theory is that the pigs were imported from the Guinea coast of Africa at the time of the slave trade.
                                        Another suggestion is that the red color came from the Berkshire pig from Britain
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
            <Footerpage />

        </div>
    )
}
export default Homepage;