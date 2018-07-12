'use strict';

$(document).ready(function () {

    // Make get request for weather info
    function makeRequest(lat, lon) {
        $.get('http://api.openweathermap.org/data/2.5/forecast', {
            APPID: '8b0f9d02c19265e4e2bfcacdb82d3ffb',
            lat: lat,
            lon: lon,
            units: 'imperial'
        }).done(function (data) {
            var forecast = data.list; // Weather info
            var city = data.city.name + ', ' + data.city.country; // City

            // Listener for click of dropdown button
            $('#menu').children().click(function () {
                if ($(this)[0].id == 1) {
                   selectDays(0);
               } else if ($(this)[0].id == 2) {
                   selectDays(8)
               } else if ($(this)[0].id == 3) {
                   selectDays(16)
               } else if ($(this)[0].id == 4) {
                   selectDays(24)
               } else if ($(this)[0].id == 5) {
                   selectDays(32)
               }
            });

            // Filter days displayed by dropdown selection
            var selectDays = function (step) {
                var daysArray = [];
                var dateArray = [];
                forecast.forEach(function (item, index) {
                    dateArray.push(formatDate(item.dt_txt));

                    if (index % 8 === 0 && index <= step) {
                        daysArray.push(getData(item));
                    }
                });
                // getMinMax(forecast);
                updateWeather(daysArray, city);
            };

            // Default 3 days
            selectDays(16);
        });
    }

    function getData(day) {
        var dayData = new Object({
            currentTemp: Math.round(day.main.temp),
            description: day.weather[0].description.toUpperCase(),
            date: formatDate(day.dt_txt),
            humidity: Math.round(day.main.humidity),
            windSpeed: Math.round(day.wind.speed),
            pressure: Math.round(day.main.pressure),
            minTemp: Math.round(day.main.temp_min),
            maxTemp: Math.round(day.main.temp_max)
        });
        return dayData;
    }

    // function getMinMax(days) {
    //     // Array of array for 5 days
    //     var eachDay = [];
    //
    //     // Filter out 5 days
    //     for (var i = 0; i <= days.length; i += 8) {
    //         eachDay.push(days.slice(i, i+8));
    //     }
    //     // eachDay.pop();
    //
    //     var temp = [];
    //     eachDay.forEach(function (day) {
    //         day.forEach(function (d) {
    //             temp.push(d.main.temp);
    //         })
    //     });
    // }

    // Update page with selected days and location
    function updateWeather(days, cName) {
        $('#weather').empty();
        days.forEach(function (day) {
            var weather = ('<div class="col">' +
                       '<div class="card"' +
                       '<div class="card-body">' +
                       '<div class="row mt-3">' +
                       '<div class="col content">' +
                       '<p>' + 'TEMPERATURE' + '</p>' +
                       '<h1 id="current-temp">' + day.currentTemp + '°' + '</h1>' +
                       // '<span>' + '<img src="http://openweathermap.org/img/w/' + day.weather[0].icon + '.png">' + '</span>' +
                       '<h5 class="pt-2">' + day.description + '</h5>' +
                       '<p class="pb-2">' + day.date + '</p>' +
                       '</div>' +
                       '<div class="col content">' +
                       '<p>' + 'HUMIDITY' + '</p>' +
                       '<h6 class="pb-2">' + day.humidity + '%' + '</h6>' +
                       '<p>' + 'WIND' + '</p>' +
                       '<h6 class="pb-2">' + day.windSpeed + ' mph' + '</h6>' +
                       '<p>' + 'PRESSURE' + '</p>' +
                       '<h6 class="pb-2">' + day.pressure + ' hPa' + '</h6>' +
                       '<p>' + 'MIN - MAX' + '</p>' +
                       '<h6>' + day.maxTemp + '°' + '/' + day.minTemp + '°' + '</h6>' +
                       '</div>' +
                       '</div>' +
                       '</div>' +
                       '</div>' +
                       '</div>');

            $('#weather:last').append(weather);
        });
        var name = ('<div class="col-12">' +
                    '<h1 class="text-center mt-5 mb-0">' + cName + '</h1>' +
                    '</div>');
        $('#weather:last').append(name);
    }

    // Format date
    function formatDate(date) {
        var regex = /(^[^\s]+)/g; // regex for formatting date
        return date.match(regex).toString().split('-').join('.');
    }

    // Google map
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 29.426791, lng: -98.48602},
            zoom: 8
        });

        // Initial marker
        var initMarker = new google.maps.Marker({
            position: map.center,
            draggable: true,
            map: map
        });

        // Initial marker listener
        var initMarkerListener = initMarker.addListener('dragend', function () {
            var lat = initMarker.getPosition().lat();
            var lng = initMarker.getPosition().lng();
            makeRequest(lat, lng);
        });

        // Create search bar
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });

        // Listener for search bar
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Remove initial marker and listener
            initMarker.setMap(null);
            google.maps.event.removeListener(initMarkerListener);

            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
                if (!place.geometry) {
                    return;
                }

                // New marker based on search
                var createMarker = function () {
                    var marker = new google.maps.Marker({
                        position: place.geometry.location,
                        draggable: true,
                        map: map
                    });

                    // Update weather info based on marker dragged position
                    marker.addListener('dragend', function () {
                        var lat = marker.getPosition().lat();
                        var lng = marker.getPosition().lng();
                        makeRequest(lat, lng);
                    });

                    // Update weather info based on search
                    var lat = marker.getPosition().lat();
                    var lng = marker.getPosition().lng();
                    makeRequest(lat, lng);
                };

                createMarker();

                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    }

    // Initial request, San Antonio
    makeRequest(29.426791, -98.48602);
    initMap();

});