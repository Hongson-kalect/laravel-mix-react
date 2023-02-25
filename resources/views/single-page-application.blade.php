<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel 8 & ReactJs - blog trương thanh hùng</title>
    <!-- Styles -->
    <link href="{{ asset('css/application.css') }}" rel="stylesheet">
</head>
<body>
<div id="application"></div>
<p>hello</p>
<script src="{{ asset('js/application.js') }}"></script>
</body>
</html>