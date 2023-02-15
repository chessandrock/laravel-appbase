<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <meta name="theme-color" content="#ffffff" />
    <meta name="author" content="Rodrigo Fuentealba Cartes" />
    <meta name="description" content="" />
    <meta name="keywords" content="keywords" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1,requiresActiveX=true" />
    <meta http-equiv="imagetoolbar" content="false" />
    <meta http-equiv="x-dns-prefetch-control" content="off" />
    @viteReactRefresh
    @vite('resources/js/app.js')
</head>

<body class='antialiased'>
    <!--[if lt IE 9]>
        <p class="outdated-browser-warning">
            You are using an <strong>outdated</strong> browser.
            Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.
        </p>
    <[endif]-->
    <div id="root"></div>
</body>

</html>
