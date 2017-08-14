var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
    title('Rodrigram');
    var main = document.getElementById('main-container');

    var pictures = [
        {
            user: {
                username: 'rodrigo',
                avatar: 'http://www.freeiconspng.com/uploads/face-avatar-png-14.png'
        },
            url: 'https://www.injustice.com/img/share.jpg',
            likes: 51,
            liked: true,
            createdAt: new Date()
        },
        {
            user: {
                username: 'rodrigo',
                avatar: 'http://www.freeiconspng.com/uploads/face-avatar-png-14.png'
            },
            url: 'https://www.injustice.com/img/share.jpg',
            likes: 1024,
            liked: true,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ];

    empty(main).appendChild(template(pictures));
});