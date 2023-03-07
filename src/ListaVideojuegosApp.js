import React from "react";

const grupoVideoJuegos = [
  {
    nombre: "Hogwarts Legacy",
    desarrollador: "Avalanche Software",
    fechaLanzamiento: "10 de febrero de 2023",
    img: "harryp.jpeg"
  },
  {
    nombre: "Super Smash Bros. Ultimate",
    desarrollador: "Nintendo Entertainment",
    fechaLanzamiento: "7 de diciembre de 2018",
    img: "smash.jpeg"
  },
  {
    nombre: "Fall Guys",
    desarrollador: "Mediatonic",
    fechaLanzamiento: "4 de agosto de 2020",
    img: "fallguys.jpeg"
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
          <img src={require(`./images/${videojuego.img}`).default} alt={videojuego.nombre} />
        </div>
      ))}
    </div>
  );
}

export default Listavideojuegos;