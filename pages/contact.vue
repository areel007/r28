<template>
  <div class="relative contact">
    <div class="map z-40 relative">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7211973369035!2d3.4086732147702024!3d6.4298516953479785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad04038320b%3A0xee858ecdb3942197!2s54%20Adeola%20Odeku%20St%2C%20Victoria%20Island%20101007%2C%20Lagos!5e0!3m2!1sen!2sng!4v1645549774188!5m2!1sen!2sng" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="py-10 bg-mist">
      <h1 class="text-center text-24 font-bold capitalize text-brown-r28 mb-5 md:mb-10" style="font-family: 'Noto Serif', serif">Contact us</h1>
      <div class="container mid-container">
        <div class="left">
          <form action="https://formsubmit.co/info@r28.ng" method="POST">
            <input type="text" placeholder="your name" class="name" name="name" required>
            <input type="email" placeholder="your email address" class="email" name="email" required>
            <input type="text" placeholder="company" class="company" name="company" required>
            <input type="text" placeholder="phone number" class="phone-number" name="phone number" required>
            <textarea id="" placeholder="your message" class="message" name="message" required></textarea>
            <button class="btn" type="submit">Send message</button>
          </form>
        </div>
        <div class="right">
          <h4>You can find us here</h4>
          <p>1 Oremeji Street, Off Obanle Aro Ave, Ilupeju, Lagos, 100252</p>
          <ul>
            <li><em><strong>E</strong></em>: info@r28.ng</li>
            <li><em><strong>T</strong></em>: +234 (0) 908 7991 029</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  layout: 'contact-layout'
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 70vh;
  position: relative;
}
iframe {
  width: 100%;
  height: 100%;
}
.mid-container {
  width: 85%;
  max-width: 1700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin: 0 auto;
}
.left {
  justify-self: flex-end;
}

.left form {
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
.left form input {
  padding: 10px;
  outline: none;
  border: 1px solid whitesmoke;
}
.left form textarea {
  padding: 10px;
  outline: none;
  border: 1px solid whitesmoke;
  height: 100px;
}
::placeholder {
  text-transform: capitalize;
}
.name {
  grid-area: 1/1/2/-1;
}
.email {
  grid-area: 2/1/3/-1;
}
.message {
  grid-area: 4/1/5/-1;
  resize: none;
}
.btn {
  padding: 10px;
  grid-area: 5/2/6/-1;
  border: 1px solid transparent;
  outline: none;
  color: #e9e1ce;
  background: #482122;
}
.right {
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right h4 {
  color: #482122;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.right p {
  font-size: 14px;
  color: #3d3d3c;
  line-height: 200%;
}
.right ul {
  /*margin-left: 20px;*/
}
.right ul li {
  line-height: 150%;
  color: #3d3d3c;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .mid-container {
    grid-template-columns: 1fr;
  }
  .left {
    justify-self: flex-start;
  }
  .left {
    width: 100%;
  }
  .left form {
    max-width: 100%;
  }
  .left form input {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
  form {
    grid-template-columns: 1fr;
  }
  .name {
    grid-column: 1/-1;
  }
}

@media screen and (max-width: 300px) {
  .btn {
    grid-column: 1/-1;
  }
}
</style>
