var yo = require('yo-yo');
if(!window.Intl){
    window.Intl = require('intl');
    require('intl/locale-data/jsonp/en-US');
    require('intl/locale-data/jsonp/es-MX');
}
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
require('intl-relativeformat/dist/locale-data/es.js');
require('intl-relativeformat/dist/locale-data/en.js');
var rf = new IntlRelativeFormat('es');


module.exports = function pictureCard(pic){
    var el;
    function render(picture){
        return yo`
        <div class="card ${picture.liked ? 'liked' : ''}">
            <div class="card-image">
                <img class="activator" src="${picture.url}">
            </div>
            <div class="card-content">
                <a href="/user/${picture.user.username}" class="card-title">
                    <img src="${picture.user.avatar}" class="avatar" alt="">
                    <span class="username">${picture.user.username}</span>
                </a>
                <small class="right time">${rf.format(picture.createdAt)}</small>
                <p>
                    <a href="#" class="left" onclick=${like.bind(null, true)}><i class="fa fa-heart-o"></i></a>
                    <a href="#" class="left" onclick=${like.bind(null, false)}><i class="fa fa-heart"></i></a>
                    <span class="left likes">${picture.likes} me gusta</span>
                </p>
            </div>
        </div>`
    }
    function like(liked){
        pic.liked = liked;
        pic.likes += liked ? 1 : -1;
        var newEl = render(pic);
        yo.update(el, newEl);
        return false;
    }
    el = render(pic);
    return el;
};