'use strict';

$(document).ready(function () {

    var people = [
        {
            name: 'Fred',
            favColor: 'red'
        },
        {
            name: 'Sally',
            favColor: 'blue'
        },
        {
            name: 'Tom',
            favColor: 'yellow'
        }
    ];

    $('#names-list').append('<ul></ul>');
    $('#add-names-btn').click(function () {
        $('#names-list').html = '';
        people.forEach(function (person) {
            $('#names-list ul').append('<li>' + person.name + '</li>');
        });
        $('li').each(function (index) {
            $(this).css('color', people[index].favColor);
        })
    });
});