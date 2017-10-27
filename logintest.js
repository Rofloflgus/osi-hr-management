var ActiveDirectory = require('activedirectory2');
var config = {
    url: 'ldap://mayne.osl.com',
    baseDN: 'dc=osl,dc=com',
    username: 'OSL_LDAP@osl.com',
    password: ',HI|:D=lJzfM\'Pz'
    };
var ad = new ActiveDirectory(config);

var username = 'swills@osl.com';


// Find user by a sAMAccountName
ad.findUser(username, function(err, user) {
    if (err) {
        console.log('ERROR: ' +JSON.stringify(err));
        return;
    }

    if (! user) console.log('User: ' + sAMAccountName + ' not found.');
    else console.log(JSON.stringify(user));
});