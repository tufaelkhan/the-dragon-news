import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4 mb-3'>Login with</h2>
            <Button variant="outline-primary" className='mb-3'><FaGoogle /> Login in with Google</Button>
            <Button variant="outline-secondary"> <FaGithub></FaGithub>Login in with Github</Button>
            <div>
                <h3 className='mt-3 mb-3'>Find us on</h3>
                <ListGroup>
      <ListGroup.Item className='ml-3'> <FaFacebook /> Facebook</ListGroup.Item>
      <ListGroup.Item className='ml-3'><FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item className='ml-3'><FaInstagram /> Instagram</ListGroup.Item>
    </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
        <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;