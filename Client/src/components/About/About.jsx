import React from "react"
import styles from "./About.module.css"
export default function About(props) {
    return (
      <div className={styles.container}>
        <h1>Les Presento Mi Primer APP</h1>
        <p>
          En ella vuelco mis conocimientos aprendidos en Henry. Seguramente me falta mucho por aprender, pero si de algo estoy segura es que "EL ARTE DESAFÍA A LA TECNOLOGÍA Y LA TECNOLOGÍA INSPIRA AL ARTE". Deseo disfruten de mi pequeño proyecto.
        </p>
        <img
          src="https://codigofuente.io/wp-content/uploads/2018/09/programador-al-nacer-no-llora-dice-hola-mundo.png"
          alt="Not found"
        />
        <h3>Mi Nombre es: Maria Rosa Fuhr</h3>
      </div>
    );
}