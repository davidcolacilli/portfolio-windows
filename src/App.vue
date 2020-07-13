<template>
    <div class="container">
      <nav>
        <header>
          <router-link to="/">
            <h1>David Colacilli</h1>
            <p>UX designer / UI Developer</p>
          </router-link>
        </header>
        <section>
          <router-link to="/about">
            <h3>About</h3>
          </router-link>
        </section>
        <section>
          <h3>Work</h3>
          <ul>
            <li>
              <router-link to="/ux">User Experience</router-link>
            </li>
            <li>
              <router-link to="/design">Logo / Brand / Graphic Design</router-link>
            </li>
            <li>
              <router-link to="/dev">Web UI Development</router-link>
            </li>
          </ul>
        </section>
        <section>
          <h3>Contact</h3>
          <ul>
            <li>davidcolacilli@gmail.com</li>
            <li>
              <a href="https://www.linkedin.com/in/david-colacilli-2390854b/">LinkedIn</a>
            </li>
          </ul>
        </section>
      </nav>
      <router-view/>
    </div>
  
</template>
<style>
html {
  background: no-repeat url('./assets/yosemite-unsplash.jpeg');
  background-size: cover;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: Lato, Arial, Helvetica, sans-serif;
  height: 100%;
  margin: 0;
}
.container {
  display: flex;
  min-height: 100%;
  display: flex;
  flex-direction: row;
}
nav {
  background: rgba(255,255,255,.9);
  min-width: 320px;
  padding: 2rem;
  color: #223578;
}
header {
  margin-bottom: 2rem;
}
article {
  background: white;
  flex-grow: 1;
}
section {
  margin: 0 0 1rem;
}
.content-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.content {
  padding: 2rem 3rem;
  max-width: 600px;
  color: #223578;
  background: rgba(255,255,255,1);
  height: calc(100% - 4rem);
}
h1 {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
  margin: 0;
  font-size: 2.2rem;
}
h1 + p {
  margin-top: 0;
  font-size: 1.1rem;
  /* text-transform: uppercase; */
}
h2 {
  margin: 1rem 0;
}
h3 {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
  text-transform: uppercase;
  font-size: 1.1rem;
  margin: 0 0 .2rem 0 ;
}
ul {
  font-size: .9rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 0 0 .2rem .5rem;
  padding: 0;
}
li a {
  display: block;
}
a {
  text-decoration: none;
}
a:visited {
  color: #223578;
}
a:hover {
  color: #4b60ac;
}
/*    #nav {
      padding: 2rem;
    }

    #nav a {
      font-weight: bold;
      color: #2c3e50;
      padding: 1rem;
      margin: 0 .5rem;
      text-decoration: none;
    }

    #nav a.router-link-exact-active {
      color: #42b983;
          border-bottom: 2px solid #42b983;
    }

.container {
  margin: 1rem;
}


h1, h3 {
  color: #ff9f51;
  text-shadow: 0px 0px 1rem rgba(0,0,0,0.8);
}
h3 {
  margin: 40px 0 0;
}
ul, p {
  color: #e3c0a3
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
      display: inline-block;
  margin: 0 0 .5rem;
}
a {
  color: #5ea7ef;
}

@media (min-width: 769px) {
  html {
    background-size: cover;
  }
  .container {
        max-width: 42.5rem;
    margin: 6rem;
  }
}*/
</style>
