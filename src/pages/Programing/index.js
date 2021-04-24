import React from "react";

import { Container, DayContainer, Divider } from "./styles";
import { getAllLivesData } from "../../services/firestore";

const [liveList, setLiveList] = useState([]);

React.useEffect(() => {
  getAllLivesData()
    .then((list) => {
      setLiveList(list);
    })
    .catch((err) => console.log(err));
}, []);

export default function Programing() {
  return (
    <Container>
      <h1 className="title">Programação</h1>

      <DayContainer>
        <div className="day">
          <h1>12</h1>
        </div>
        <div className="information">
          <h1>{"Titulo" + " | " + "description"}</h1>
          <h3 className="speakers">Palestrantes</h3>
          <h3>{"data"}</h3>
          <h3>
            {"Horário de início: " +
              "hour" +
              " | Duração: " +
              "duration" +
              " horas"}
          </h3>
        </div>
      </DayContainer>
      <Divider />
    </Container>
  );
}