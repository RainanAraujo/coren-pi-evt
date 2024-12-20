import React, { useState } from "react";
import {
  Container,
  Content,
  Header,
  LogoCoren,
  Button,
  SubscribeCard,
  Options,
  AboutTab,
  ParticipantsTab,
  LogoSemanaEnf,
  Footer,
  ParticipantsContent,
  ParticipantsItem,
  NurseBackground,
  ButtonCarrouselBack,
  ButtonCarrouselNext,
  Carousel,
  ArrowBackIcon,
  LeftContainer,
  RightContainer,
  FooterContent,
  ButtonIcon,
  InformationEvent,
  SocialNetwork,
  YoutubeVideo,
} from "./styles";
import { Link } from "react-router-dom";
import logoCoren from "../../assets/images/logoCoren.png";
import participant1 from "../../assets/images/participants/participant1.svg";
import participant2 from "../../assets/images/participants/participant2.svg";
import participant3 from "../../assets/images/participants/participant3.svg";
import participant4 from "../../assets/images/participants/participant4.svg";
import participant5 from "../../assets/images/participants/participant5.svg";
import participant6 from "../../assets/images/participants/participant6.svg";
import participant7 from "../../assets/images/participants/participant7.svg";
import participant8 from "../../assets/images/participants/participant8.svg";
import participant9 from "../../assets/images/participants/participant9.svg";
import logoSemanaEnf from "../../assets/images/logoSemanaEnf.svg";
import nurseBackground from "../../assets/images/nurseBackground.svg";
import { Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useWindowDimensions } from "../../services/utils";
export default function Home() {
  const { width, height } = useWindowDimensions();
  const [expandTextMobile, setExpandTextMobile] = useState(false);
  return (
    <Container>
      <NurseBackground src={nurseBackground} />
      <Content>
        <Header>
          <LogoCoren src={logoCoren} />
          <Link to="/dashboard">
            <Button>ENTRAR</Button>
          </Link>
        </Header>
        <InformationEvent>
          <LogoSemanaEnf src={logoSemanaEnf} />

          <p>
            O Conselho Regional de Enfermagem do Piauí - COREN – PI, apresenta
            sua Programação para a Semana de Enfermagem – 2021 (12 a 20 de
            maio). O evento tem como tema:{" "}
            <span>
              Enfermagem: Uma voz para liderar – Uma visão para o futuro dos
              cuidados de saúde.
            </span>{" "}
            {(width < 800) & !expandTextMobile ? (
              <a onClick={() => setExpandTextMobile(true)}>Ver mais</a>
            ) : (
              "Vale ressaltar que em 2020 o governo do Estado do Piauí sancionou a Lei nº 7.412 que institui e inclui no Calendário Oficial do Estado do Piauí a Semana de Enfermagem. A lei é uma grande conquista da categoria, representa o reconhecimento da importância da Enfermagem para a sociedade."
            )}
          </p>
        </InformationEvent>
        <SubscribeCard>
          <h1>Inscreva-se Já!</h1>
          <span>
            Nesta semana (12 a 20/5) disponibilizaremos um curso gratuito para
            você profissional de enfermagem, inscreva-se ja!
          </span>
          <Options>
            <Link to="/login">
              <Button to="/login">INSCREVER-SE</Button>
            </Link>
            <Link to="/programacao">
              <Button outline={true}>PROGRAMAÇÃO</Button>
            </Link>
          </Options>
        </SubscribeCard>
        <AboutTab>
          <YoutubeVideo
            src={`https://www.youtube.com/embed/ODFveiFnzBo`}
            frameBorder="0"
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            controls=0"
            allowFullScreen
            title="COREN-PI | SEMANA DA ENFERMAGEM"
          />
          <YoutubeVideo
            src={`https://www.youtube.com/embed/S19RrrYKcHQ`}
            frameBorder="0"
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            controls=0"
            allowFullScreen
            title="COREN-PI | SEMANA DA ENFERMAGEM"
          />
        </AboutTab>
        <ParticipantsTab>
          <h1>Uma equipe de profissionais renomados para você.</h1>
          <Carousel
            naturalSlideWidth={100}
            naturalSlideHeight={width > 800 ? 140 : 145}
            totalSlides={9}
            infinite={true}
            visibleSlides={width > 800 ? 3 : 1}
            isPlaying={true}
            interval={2000}
          >
            <Slider>
              <Slide index={0}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant1} />
                </ParticipantsContent>
              </Slide>
              <Slide index={1}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant2} />
                </ParticipantsContent>
              </Slide>
              <Slide index={2}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant3} />
                </ParticipantsContent>
              </Slide>
              <Slide index={3}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant4} />
                </ParticipantsContent>
              </Slide>
              <Slide index={4}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant5} />
                </ParticipantsContent>
              </Slide>
              <Slide index={5}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant6} />
                </ParticipantsContent>
              </Slide>
              <Slide index={6}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant7} />
                </ParticipantsContent>
              </Slide>
              <Slide index={7}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant8} />
                </ParticipantsContent>
              </Slide>
              <Slide index={8}>
                <ParticipantsContent>
                  <ParticipantsItem src={participant9} />
                </ParticipantsContent>
              </Slide>
            </Slider>
            <ButtonCarrouselBack>
              <ArrowBackIcon />
            </ButtonCarrouselBack>
            <ButtonCarrouselNext>
              <ArrowForwardIosIcon />
            </ButtonCarrouselNext>
          </Carousel>
        </ParticipantsTab>
      </Content>

      <Footer>
        <FooterContent>
          <LeftContainer>
            <LogoCoren src={logoCoren} />
            <SocialNetwork>
              <a
                onClick={() =>
                  window.open("https://www.instagram.com/corenpioficial/")
                }
              >
                <ButtonIcon>
                  <InstagramIcon className="icon" />
                </ButtonIcon>
              </a>
              <a
                onClick={() => window.open("https://www.facebook.com/corenpi")}
              >
                <ButtonIcon>
                  <FacebookIcon className="icon" />
                </ButtonIcon>
              </a>
            </SocialNetwork>
          </LeftContainer>
          <RightContainer>
            <span>
              Desenvolvido por:{" "}
              <a
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.instagram.com/keracomunicacao")
                }
              >
                Agência KERA
              </a>
            </span>
            <span>Copyright 2021 Conselho Regional de Enfermagem do Piauí</span>
          </RightContainer>
        </FooterContent>
      </Footer>
    </Container>
  );
}
