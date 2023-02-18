import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import BoardMember from './BoardMember';
import CaseyImg from '../images/Casey_Bates.d4d528d3.jpg';
import DevinImg from '../images/devin.jpg';
import DannyImg from '../images/DanWalshHeadShot.jpeg';
import DavisImg from '../images/Davis.jpg';
import EthanImg from '../images/bronco-sec-ethan.png';
import TiffanyImg from '../images/Tiffany.png';
import VarunImg from '../images/varun.jpg';

import '../styles/Board.css';

export default function Board() {
  return (
    <Element name="board">
      <div id="board-wrapper">
        <h1>BroncoSec Board</h1>
        <div id="board-grid-wrapper">
          <Container>
            <Row>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={DannyImg} title="President" name="Daniel Walsh">
                  Hello, my name is Danny Walsh, and I’m excited to be BroncoSec President this year! I am a junior Web Design & Engineering major from Georgetown, Massachusetts. When I’m not at my computer, I’m probably playing hockey for the SCU club ice hockey team, cooking for my friends, or playing guitar. I’m especially interested in front-end development, learning good UI techniques, and solving difficult coding challenges. I’m looking forward to seeing so many of you at our BroncoSec events and sharing our interest in cyber security. If you have any questions, feel free to reach out!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={DevinImg} title="BroncoCTF Coordinator" name="Devin Bhatt">
                  Hi, I’m Devin. I’m a junior Computer Science from the Bay Area. For my second year on the BroncoCTF board, I’ve taken on the role of BroncoCTF coordinator. Most of my work at BroncoSec involves planning for BroncoCTF, writing challenges, and setting up the infrastructure for you to (hopefully not) break :wink:. I love to learn new things (especially when it comes to security and infrastructure), and I love to help others learn as well. I hope that BroncoCTF is not just a fun event, but a learning opportunity for all of its attendees!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={DavisImg} title="External CTF Coordinator" name="Davis Robertson">
                  Hello! I’m Davis and I’m excited to be BroncoSec’s external CTF coordinator this year! I am a junior computer science (security emphasis) and philosophy major from New York. I’ve been interested in computer science since I was a kid and have really enjoyed being a part of BroncoSec at SCU. When I’m not writing papers or working on CS projects there’s a good chance you can find me playing or watching basketball. Please reach out if you have any questions or for any other reason, I’m looking forward to connecting with the BroncoSec community!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={VarunImg} title="Public Relations" name="Varun Mangla">
                  Hello everyone! I’m Varun, a sophomore Computer Science and Engineering student from Los Altos, CA. While I only started coding during the winter quarter of my first year at SCU, I’ve always been fascinated with technology. I’m eager to join BroncoSec as its Public Relations manager this year, as participating in the club helped me develop a budding interest in cybersecurity. Through this role, I intend to introduce other students to BroncoSec and the ever-growing field of cybersecurity. Outside of computer science, some of my interests are music, games, and hanging out with my friends. Please let me know if you have any questions or suggestions, and I’m looking forward to seeing everyone at our weekly club meetings!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={TiffanyImg} title="Underclassmen Representative" name="Tiffany Nguyen">
                  My name is Tiffany Nguyen, and I am a freshman majoring in Computer Science and Engineering from San Jose, California. I am passionate about learning about all the fun and interesting ways computer science can be applied across various fields like cybersecurity, and I hope to be able to help plan fun activities that get others excited about security.
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={EthanImg} title="Underclassmen Representative" name="Ethan Sychangco">
                  Hello, my name is Ethan Sychangco! I am one of your BroncoSec underclassman representatives for the 2022-2023 school year! I am a first-year majoring in Computer Science and Engineering, and I am local to the Bay Area. I find interest in all things technology, gaming, and cybersecurity, and I want to bring that excitement to the BroncoSec club. When I am not laser-focused on developing a project, I am probably spending time with family, enjoying game nights with friends, or watching random YouTube videos to take a break from my busy days. I want to make sure all BroncoSec members have their voices heard, and that we can support each other’s passions for cybersecurity. You can reach out to me at any time!
                </BoardMember>
              </Col>
              <Col sm={4}>
                {/* Padding */}
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={CaseyImg} title="Graduate Relations" name="Casey Bates">
                  Hi All! I’m Casey, a Computer Science and Engineering Master’s student from San Jose, CA. I’m passionate about Cybersecurity, and I especially enjoy solving tough challenges during capture the flag competitions. I also love learning more about other topics like computer networks, IoT, and cloud computing. Outside of school, I’ve been able to combine my interests in computers and baseball by working as a Software Engineer for the Philadelphia Phillies. Please feel free to reach out if you have questions, suggestions, or even just want to chat. I hope to see you all at BroncoSec events this year!
                </BoardMember>
              </Col>
              <Col sm={2}>
                {/* Padding */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Element>
  );
}
