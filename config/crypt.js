const config = {
  development: {
    cryptKey: 'IamAlittleTeapotShortandStump123',
    cipher: 'aes-256-ctr',
    hash: 'RSA-SHA1',
  },
  staging: {
    cryptKey: 'IamAlittleTeapotShortandStump123',
    cipher: 'aes-256-ctr',
    hash: 'RSA-SHA1',
  },
  production: {
  	cryptKey: 'IamAlittleTeapotShortandStump123',
    cipher: 'aes-256-ctr',
    hash: 'RSA-SHA1',
  }
};

module.exports = function(env) {
  var c = config[env];
  return c;
};
