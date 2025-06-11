import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutImage from '../Images/Wine3.png';
import teamImage from '../Images/Wine3.png';
import storeImage from '../Images/Wine3.png';
import aboutHeroImage from '../Images/table.jpg';
import Banner from "../components/Banner/Banner";

const AboutUs = () => {
    return (
        <div className="about-us-page">
            {/* Hero Banner */}
            <Banner
                title="About Us"
                subtitle="Our story since 1995"
                image={aboutHeroImage}
                overlayHeight="50%"
            />
            {/* Main Content */}
            <Container className="py-5">
                <Row className="align-items-center mb-5">
                    <Col md={6}>
                        <Image src={aboutImage} alt="Liquor store history" fluid rounded className="shadow" />
                    </Col>
                    <Col md={6} className="mt-4 mt-md-0">
                        <h2 className="section-title">From Humble Beginnings</h2>
                        <p>
                            Founded in a small storefront in downtown, Spirits & Co. began with a simple mission:
                            to bring the world's finest spirits to our local community. What started as a modest
                            family-owned shop has grown into the region's premier destination for liquor enthusiasts.
                        </p>
                        <p>
                            Our founder, James Wilson, a former bartender with a passion for mixology, wanted to
                            create a space where customers could discover new flavors and learn about the art of
                            distillation. Today, we continue his legacy with the same dedication to quality and
                            education.
                        </p>
                    </Col>
                </Row>

                <div className="divider my-5"></div>

                {/* Our Philosophy Section */}
                <section className="py-4">
                    <h2 className="text-center mb-5 section-title">Our Philosophy</h2>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <div className="philosophy-card p-4 h-100">
                                <div className="icon-box mb-3">
                                    <i className="fas fa-wine-glass-alt"></i>
                                </div>
                                <h3>Curated Selection</h3>
                                <p>
                                    We handpick every bottle in our store, focusing on quality, craftsmanship,
                                    and unique flavor profiles. From small-batch distilleries to renowned brands,
                                    we offer only the best.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <div className="philosophy-card p-4 h-100">
                                <div className="icon-box mb-3">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <h3>Education First</h3>
                                <p>
                                    We believe knowledge enhances enjoyment. Our staff undergoes regular training
                                    and we host tasting events to help customers discover new favorites and learn
                                    proper appreciation techniques.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <div className="philosophy-card p-4 h-100">
                                <div className="icon-box mb-3">
                                    <i className="fas fa-hand-holding-heart"></i>
                                </div>
                                <h3>Community Focus</h3>
                                <p>
                                    As a local business, we're committed to supporting our community. We partner
                                    with local distilleries, host charity events, and promote responsible drinking.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>

                <div className="divider my-5"></div>

                {/* Team Section */}
                <Row className="align-items-center my-5">
                    <Col md={6} className="order-md-2">
                        <Image src={teamImage} alt="Our expert team" fluid rounded className="shadow" />
                    </Col>
                    <Col md={6} className="order-md-1 mt-4 mt-md-0">
                        <h2 className="section-title">Meet Our Experts</h2>
                        <p>
                            Our team of spirits enthusiasts brings together decades of combined experience.
                            Each member undergoes rigorous training in product knowledge, tasting techniques,
                            and mixology.
                        </p>
                        <p>
                            Whether you're looking for the perfect single malt to complete your collection,
                            a budget-friendly option for your party, or advice on building a home bar, our
                            staff can guide you to the right choice.
                        </p>
                        <button className="btn btn-dark mt-3">View Our Team</button>
                    </Col>
                </Row>

                {/* Store Section */}
                <Row className="align-items-center my-5">
                    <Col md={6}>
                        <Image src={storeImage} alt="Our store interior" fluid rounded className="shadow" />
                    </Col>
                    <Col md={6} className="mt-4 mt-md-0">
                        <h2 className="section-title">Visit Us</h2>
                        <p>
                            Our flagship store in downtown features a tasting room, educational displays,
                            and carefully organized sections to help you explore different spirit categories.
                        </p>
                        <ul className="store-features">
                            <li><i className="fas fa-check"></i> Whiskey tasting bar with weekly featured flights</li>
                            <li><i className="fas fa-check"></i> Walk-in humidor for premium cigars</li>
                            <li><i className="fas fa-check"></i> Mixology station for cocktail demonstrations</li>
                            <li><i className="fas fa-check"></i> Private consultation room for special orders</li>
                        </ul>
                        <button className="btn btn-outline-dark mt-3">Get Directions</button>
                    </Col>
                </Row>

                {/* Testimonials */}
                <section className="testimonials py-5 my-4">
                    <h2 className="text-center mb-5 section-title">What Our Customers Say</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <div className="testimonial-card p-4 h-100">
                                <div className="rating mb-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="mb-4">
                                    "The staff's knowledge is incredible! They helped me find a rare Japanese whisky
                                    that became my all-time favorite."
                                </p>
                                <div className="customer">
                                    <strong>Michael T.</strong>
                                    <span>Whisky Enthusiast</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="testimonial-card p-4 h-100">
                                <div className="rating mb-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="mb-4">
                                    "As a bartender, I appreciate their curated selection and fair prices. Their
                                    recommendations never disappoint."
                                </p>
                                <div className="customer">
                                    <strong>Sarah K.</strong>
                                    <span>Professional Mixologist</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <div className="testimonial-card p-4 h-100">
                                <div className="rating mb-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <p className="mb-4">
                                    "Their wine selection is outstanding, and the staff helped me pick the perfect
                                    bottle for my anniversary dinner."
                                </p>
                                <div className="customer">
                                    <strong>David R.</strong>
                                    <span>Wine Collector</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    );
};

export default AboutUs;