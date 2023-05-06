import styles from "./Form.module.css";
import { useState } from "react";
import { validate } from "./validation";
export default function Form(props) {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });
<<<<<<< HEAD
=======

  
  
>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validate({
        ...userData,
        [name]: value,
      })
<<<<<<< HEAD
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  
=======
      );
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      props.login(userData);
    };


>>>>>>> 08d158118ff4b319bbad4ebe463872884b72c213
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img
        src="https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/06/17/el-viejo-y-el-vater.jpeg"
        alt="Not found"
      />
      <br />
      <label htmlFor="">Nombre: </label>
      <input
        type="text"
        value={userData.userName}
        name="userName"
        onChange={handleChange}
        className={errors.userName && styles.warning}
      />
      {errors.userName ? (
        <p style={{ color: "red" }}>{errors.userName}</p>
      ) : null}
      <label htmlFor="">Password: </label>
      <input
        type="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
        className={errors.password && styles.warning}
      />
      {errors.password ? (
        <p style={{ color: "red" }}>{errors.password}</p>
      ) : null}
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
