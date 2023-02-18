// unframed 
var blocked = `
    <link href="/css/enbed.css" rel="stylesheet" type="text/css"/>

  <style>
  
    body {
      transform: translate(-50%, -50%);
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
    }
      
    h1 { font-size: 25px;}
    .btn { width: 75%; font-weight: bold; font-size: 13px; margin: 5px;}
  
  </style>
  <h1>This embed was blocked by Unframed</h1> <br>
  <button class="btn btn-secondary" onclick="UnframedRedirect()">Go Back</button>
`
if (window.self != window.top) {
  if (!document.referrer.includes(self.location)) {
    document.querySelector("html").innerHTML = blocked
  }
}

function UnframedRedirect() {
  open(self.location)
}
