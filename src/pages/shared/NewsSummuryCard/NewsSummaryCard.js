import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({news}) => {
    console.log(news);
    const {_id, title, author, details, total_views, rating, image_url} = news;
    return (
        <div className='mb-5'>
             <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                        className='me-2'
                        roundedCircle
                        src={author?.img}
                        style={{height: '60px'}}
                        >

                        </Image>
                        <div>
                            <p>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                      {details.length > 200 ? <p>{details.slice(0,250) + '...'}<Link to={`/news/${_id}`}>  Read More</Link></p>
                      : 
                        <p>{details}</p>
                      }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className='d-flex align-items-center gap-2'>
                        <FaStar className='text-warning'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye>
                        <span>{total_views}</span>
                    </div>
                </Card.Footer>
            </Card>
            
        </div>
    );
};

export default NewsSummaryCard;