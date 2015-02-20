var _PORT = 7575;

var io = require('socket.io').listen(_PORT, { log: false }),
_ = require('underscore'),
_users = {};


// start server connections
io.sockets.on('connection', function (socket) { 
    var _currUser = null;

    socket.on('init', function(data){
        socket['chatName'] = data.name;
        socket['userUrlPos'] = data.UrlPos;
        _currUser = data.name;
        _users[data.name] = socket;
        broadcast('online_count', {onlineL:_.size(_users)});
    });
    
    socket.on('disconnect' , function(io){
        if(_currUser !== null){
            delete _users[_currUser];
        }
        broadcast('online_count', {onlineL:_.size(_users)} );
    });
    
    socket.on('message_post', function(data){
        broadcast('message_recieve', data);
    });

/*
 * broadcast function ->
 * emit to all users that are logged in.
 */
    function broadcast(name, data){
        var key, _socket;
        for(key in _users)
        {
            _socket = _users[key];
            _socket.emit(name, data);
        }
    }   

});