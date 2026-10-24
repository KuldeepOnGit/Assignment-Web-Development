# Assignment 1 – What happens between typing a URL and seeing the page?

When I type a URL into the browser and press Enter, the browser first checks its cache and then asks a DNS server to translate the domain name into an IP address.

The browser then establishes a connection with the server. For an HTTPS website, a TLS handshake is performed to create a secure and encrypted connection.

After that, the browser sends an HTTP request to the server. The server processes the request and sends back an HTTP response containing the requested HTML page.

The browser receives the HTML and parses it to create the DOM (Document Object Model). It also downloads other required resources such as CSS, JavaScript, images, and fonts.

The browser processes the CSS to create the CSSOM and combines it with the DOM to create the render tree. Then it calculates the layout of the page, paints the content on the screen, and runs JavaScript that may update the page.

Finally, the browser displays the web page that we see on the screen.