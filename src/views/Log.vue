<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <div id="container">
    <menu>
      <ul>
        <h2>Přihlaste se</h2>
        <li id="input">
          <label for="email">E-mail</label>
          <input type="text" placeholder="Jméno" id="email" />
          <label for="pswrd">Heslo</label>
          <input type="password" placeholder="Heslo" id="pswrd" />
        </li>
        <li id="remember">
          <input type="checkbox" name="remember" />
          <label for="remember">Zapamatovat si mě</label>
        </li>
        <router-link to="/home">Přihlásit se</router-link>
      </ul>
      <div>
        <img src="../assets/tmap-icon.svg" alt="" />
      </div>
    </menu>
  </div>
</template>

<style scoped lang="scss">
#container {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  place-items: center;

  * {
    font-family: "Titillium Web", sans-serif;
  }

  menu {
    height: 80%;
    width: 70%;

    display: flex;

    border-radius: 15px;
    overflow: hidden;

    ul {
      height: 100%;
      width: 50%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: whitesmoke;

      h2 {
        width: 50%;
        margin-bottom: 8%;

        font-size: 1.8em;
        font-weight: 600;
        text-align: left;
      }

      li {
        width: 50%;
      }

      #input {
        display: flex;
        flex-direction: column;
        gap: 30px;

        input {
          height: 2.2rem;
          border: 1px solid rgb(196, 196, 196);
          border-radius: 8px;
          font-size: 1em;
          padding-left: 10px;
        }

        label {
          font-size: 0.8em;
          font-weight: 600;

          margin-bottom: -20px;
        }
      }

      #remember {
        margin: 3% 0;
        font-size: 0.8em;
      }

      a {
        height: 2.2rem;
        width: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 8px;
        font-size: 0.9em;

        background-color: #00416c;
        color: whitesmoke;
        text-decoration: none;
      }
    }

    div {
      height: 100%;
      width: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: rgba(128, 128, 128, 0.3);

      img {
        width: 100%;
        filter: drop-shadow(-1px 0px 28px rgba(0, 0, 0, 0.3));
      }
    }
  }
}
</style>
