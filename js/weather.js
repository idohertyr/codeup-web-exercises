'use strict';

$(document).ready(function () {

    function makeRequest(lat, lon) {
        $.get('http://api.openweathermap.org/data/2.5/forecast', {
            APPID: '8b0f9d02c19265e4e2bfcacdb82d3ffb',
            lat: lat,
            lon: lon,
            units: 'imperial'
        }).done(function (data) {
            var forecast = data.list;
            var daysArray = [];
            forecast.forEach(function (item, index) {
                if (index % 8 === 0 && index <= 16) {
                    daysArray.push(item);
                }
            });
            updateWeather(daysArray);
        });
    }

    function updateWeather(days) {
        $('#weather').empty();
        days.forEach(function (day) {
            var div = ('<div class="col-4">' +
                '<div class="card"' +
                '<div class="card-body">' +
                '<div class="row">' +
                '<div class="col-6 temp">' +
                '<h6>' + 'TEMPERATURE' + '</h6>' +
                '<h1>' + (Math.round(day.main.temp_max)) + '°' + '/' + (Math.round(day.main.temp_min)) + '°' + '</h1>' +
                '<span>' + '<img src="http://openweathermap.org/img/w/' + day.weather[0].icon + '.png">' + '</span>' +
                '</div>' +
                '<div class="col-6 temp mb-4">' +
                '<h6 class="mt-3">' + 'DESC.' + '</h6>' +
                '<h6 class="pb-2">' + day.weather[0].description.toUpperCase() + '</h6>' +
                '<h6>' + 'HUMIDITY' + '</h6>' +
                '<h6 class="pb-2">' + day.main.humidity + '</h6>' +
                '<h6>' + 'WIND' + '</h6>' +
                '<h6 class="pb-2">' + day.wind.speed +  '</h6>' +
                '<h6>' + 'PRESSURE' + '</h6>' +
                '<h6>' + day.main.pressure + '</h6>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>');

            $('#weather:last').append(div);
        });
    }

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: {
                lat: 29.426791,
                lng: -98.48602
            }
        });

        var marker = new google.maps.Marker({
            position: map.center,
            draggable: true,
            map: map
        });

        return marker;
    }

    makeRequest(29.426791, -98.48602);
    var gMarker = initMap();

    gMarker.addListener('dragend', function () {
        var lat = gMarker.getPosition().lat();
        var lng = gMarker.getPosition().lng();
        makeRequest(lat, lng);
    })

});