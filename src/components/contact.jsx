export default function Contact() {
  return (
    <section className="contact-bg">
      {/* your section JSX */}
    </section>
  );
}
    /* Custom styles for the modal */
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.4);
      padding-top: 60px;
    }
    .modal-content {
      background-color: #fefefe;
      margin: 5% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 500px;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  </style>
</head>
<body class="bg-gray-100">

  <!-- Trigger/Open The Modal -->
  <button id="myBtn" class="bg-coffee text-white py-2 px-4 rounded hover:bg-coffee-dark">Contact Us</button>

  <!-- The Modal -->
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2 class="text-center text-xl font-semibold mb-4">Contact Us</h2>
      <form id="contactForm" class="space-y-4">
        <input type="text" id="name" name="name" placeholder="Name" required class="w-full p-2 border rounded">
        <input type="email" id="email" name="email" placeholder="Email" required class="w-full p-2 border rounded">
        <input type="tel" id="phone" name="phone" placeholder="Phone" required class="w-full p-2 border rounded">
        <textarea id="message" name="message" placeholder="Message" required class="w-full p-2 border rounded" rows="4"></textarea>
        <button type="submit" class="w-full bg-coffee text-white py-2 rounded hover:bg-coffee-dark">Submit</button>
      </form>
    </div>
  </div>

  <script>
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Handle form submission
    document.getElementById("contactForm").onsubmit = function(event) {
      event.preventDefault();
      alert("Form submitted!");
      modal.style.display = "none";
    }
  </script>

</body>
</html>

/* Google Map Embed */
<section class="map">
  <iframe
    width="600"
    height="450"
    style="border:0;"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="https://maps.app.goo.gl/iZG3q2WiHjhj2tzN7">
  </iframe>
</section>
