import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import BoardMember from './BoardMember';
import CaseyImg from '../images/Casey_Bates.d4d528d3.jpg';
import RaniaImg from '../images/Rania_Ansari.15a99aa1.jpg';
import JamesImg from '../images/James_Ossam.e836616d.jpg';
import JonathanImg from '../images/Jonathan_Ho.bb02a630.png';
import DevinImg from '../images/Devin_Bhatt.402af665.jpg';
import VrindaImg from '../images/Vrinda_Shorewala.f2786428.jpg';
import DannyImg from '../images/DanWalshHeadShot.jpeg';
import NehchalImg from '../images/NehchalHeadShot.jpeg';

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
                <BoardMember imageSrc={CaseyImg} title="President" name="Casey Bates">
                  Hi All! I’m Casey, and I am super excited to be the BroncoSec president this year! I am a Senior Computer Science major from San Jose, CA. Cybersecurity is my main passion, and I especially enjoy solving tough challenges during capture the flag competitions. I also love learning more about other topics like computer networks, IoT, and AI. When away from my computer, you can often find me working on 3D printing projects, playing beach volleyball outside of Malley, or at Schott Stadium, where I am a student manager for the baseball team. Please feel free to reach out if you have questions, suggestions, or even just want to chat. I hope to see you all at BroncoSec events this year!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={RaniaImg} title="Vice President" name="Rania Ansari">
                  Hello! My name is Rania Ansari, and I will be a Junior studying Computer Science from San Jose. I love playing soccer, trying new food, and meeting new people! I’m super excited to serve as the Vice President of BroncoSec; we’ve got many fun things planned! My goal is to motivate other students to join and discover the endless possibilities with BroncoSec, from fun challenges to informative workshops! If you ever have any questions about anything or just want to talk, please don’t hesitate to reach out to me!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={JamesImg} title="Internal CTF Coordinator" name="James Ossam">
                  Hi there! I’m James and I’m a senior computer science major from just outside Boston MA. I’ve been interested in cybersecurity since I was in high school, which is why I’m so excited to be your BroncoSec Internal CTF Coordinator! When I’m not on the computer, you can find me tossing a frisbee around, or hanging out with friends. I’m really looking forward to meeting everyone this year, so if you see me around, feel free to say hi!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={JonathanImg} title="External CTF Coordinator" name="Jonathan Ho">
                  Hi, I’m Jonathan, aka CSN3RD, from Cupertino, CA. I am a junior, majoring in Computer Science. Outside of school, I compete in a lot of programming, security, and puzzle competitions. Some notable achievements include winning 1st in SCU’s Hack for Humanity CTF, 1st in Harvard’s Puzzle Day (twice in a row), 3rd in Stanford’s Programming Contest, 5th in UC Berkeley’s bSUIT Coding Contest, and 6th in Akamai’s Affinity CTF. I look forward to organizing different CTF events throughout the year for us to test our skills, learn new ones, and compete with teams from other colleges. Feel free to message me if you have any questions or suggestions!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={DevinImg} title="Workshop Coordinator" name="Devin Bhatt">
                  Hi, I&apos;m Devin. I&apos;m a sophomore Computer Science and Engineering major from Mill Valley, CA. I&apos;ve been interested in computing for longer than I can remember (my dad had me playing with his computer when I was two years old!), and started attending BroncoSec events during my second week at SCU. What drew me to Computer Science (and Cybersecurity especially) was the thrill of finding interesting ways to make a computer do whatever you want it to, even if that means breaking things along the way. As the BroncoSec Workshop Coordinator this year, I hope to capture that magic in the form of fun and engaging challenges that provide a valuable learning experience.
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={VrindaImg} title="Public Relations" name="Vrinda Shorewala">
                  Hey hey! My name is Vrinda and I am a senior Computer Science major. When I&apos;m not busy trying to debug my code, you can catch me dancing away with my friends, baking in the kitchen, or binge-watching a new series! I am super interested in security and have tried to stay involved in many initiatives on campus and outside SCU (I’d be happy to share all the resources I’ve collected so far!) I am excited to be on the board of BroncoSec and I hope to introduce more students to the amazingly vast and dynamic field of security. So feel free to reach out to me if you have any questions, ideas, or just want to talk. I can&apos;t wait to meet you all!
                </BoardMember>
              </Col>
              <Col sm={2}>
                {/* Padding */}
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={DannyImg} title="Underclassmen Representative" name="Danny Walsh">
                  Hello, my name is Danny Walsh, and I’m excited to be one of two BroncoSec Underclassmen Reps. I am a sophomore Web Design & Engineering major from North Shore, Massachusetts. When I’m not at my computer, I’m probably playing hockey for the SCU club ice hockey team, cooking for my friends, or playing guitar. I’m especially interested in front-end development, learning good UI techniques, and solving difficult coding challenges. I’m looking forward to getting other underclassmen excited about cybersecurity and growing BroncoSec. I look forward to seeing everyone at our workshops, speaker events, and Capture the Flag events. If you have any questions, feel free to reach out!
                </BoardMember>
              </Col>
              <Col sm={4} className="board-member-col">
                <BoardMember imageSrc={NehchalImg} title="Underclassmen Representative" name="Nehchal Thind">
                  Hi!!! My name is Nehchal, and I’m a freshman from Danville, CA. I have been interested in computer science for as long as I can remember and am so excited to be this year’s underclassmen representative! Some things I love are traveling, working out, cooking, meeting new people, finding new music, and many other things! My goal for this year is to get everyone as excited about cyber security as I am and to share my love of the field with you all! I can’t wait to meet everyone at our upcoming meetings this year, and please feel free to reach out to me if you have any questions or just want to say hey!
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
