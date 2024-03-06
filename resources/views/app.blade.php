<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Vue Project</title>

    </head>

    <body id="app">
        
        <app></app>


        @vite('resources/js/app.js')
    </body>
</html>
