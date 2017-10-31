export default `

<!DOCTYPE HTML>
<html>
  <head>
    <!-- Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset=utf-8/>

    <!-- Title -->
    <title>Test</title>
    
    <style>
    {{CSS}}
    </style>
  </head>
  <body>
    <div class='app'>
      {{HTML}}
    </div>
    <script>window.__ids = {{IDS}}</script>
    <script src='static/vendor.js'></script>
    <script src='static/routes.js'></script>
  </body>
</html>
`