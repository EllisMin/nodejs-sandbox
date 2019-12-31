exports.getLogin = (req, res, next) => {
  // 3rd package available to extract cookie
  // const isLoggedIn = req.get("Cookie").split("=")[1]; // set to true

  console.log(req.session.isLoggedIn);
  
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  // this data gets lost after response is finished
  // req.isLoggedIn = true;

  
  /**
   * Sending cookie options
   *  - "loggedIn=true; Expires=...": set when cookie expires
   *  - "loggedIn=true; Max-Age=10": cookie stays for 10 seconds
   *  - "loggedIn=true; Domain=...": where to send the cookie
   *  - "loggedIn=true; Secure": sets cookie only if the page is served by HTTPS
   *  - "loggedIn=true; HttpOnly": sets cookie only for HTTP; 
   *                  ; accessible from client side of JS.
   *                  ; prevents form cross-site scripting attack;
   *                  ; others can't read this cookie value
   */
  // res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly");

  req.session.isLoggedIn = true; 
  res.redirect("/");
};

/**
 * Cookies gets stored in the browser
 * 
 * It's possible to send cookie to other pages;
 * i.e. Google can track you without you being on their server
 *      tracked info won't store in their server but it's on browser
 * 
 * Cookies can be shown in Application -> Cookies tab or Network -> page's header
 *      expiration: session or 1969/../.. which expires on closing browser
 * 
 * Used to identify the user in the session
 */
