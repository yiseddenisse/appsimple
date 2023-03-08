import React from "react";
import pic1 from"./assets/images/harryp.jpeg"
import pic2 from"./assets/images/harryp.jpeg"
import pic3 from"./assets/images/harryp.jpeg"
import pic4 from"./assets/images/harryp.jpeg"


const grupoVideoJuegos = [
  {
    nombre: "Hogwarts Legacy",
    desarrollador: "Avalanche Software",
    fechaLanzamiento: "10 de febrero de 2023",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/cDHU28ds7cCvKAnVQo719gs0.png"
  },
  {
    nombre: "Super Smash Bros. Ultimate",
    desarrollador: "Nintendo Entertainment",
    fechaLanzamiento: "7 de diciembre de 2018",
    img: "https://www.nintendo.com/sg/switch/aaab/img/hero_sp.jpg"
  },
  {
    nombre: "Fall Guys",
    desarrollador: "Mediatonic",
    fechaLanzamiento: "4 de agosto de 2020",
    img: "https://cdn2.unrealengine.com/fallguys-keyart-evergreen-v1-3840x2160-3506fecb3424.png"
  }
];

function Listavideojuegos() {
  return (
    <div>
      {grupoVideoJuegos.map((videojuego) => (
        <div key={videojuego.nombre}>
          <h3>{videojuego.nombre}</h3>
          <p>Desarrollador: {videojuego.desarrollador}</p>
          <p>Fecha de lanzamiento: {videojuego.fechaLanzamiento}</p>
          <img src={videojuego.img} alt={videojuego.nombre} width={200}  />
        </div>
      ))}
    </div>
  );
}

export default Listavideojuegos;
