
_config['_lang'] = _config["_lang:default"]

if (_config['_env'] == 'development'
    && (_url.equals('/') || _url.equals('/Index.netuno'))) {
    _config['_login:user'] = "dev"
    _config['_login:pass'] = "dev"
    _config['_login:auto'] = _req['action'] != 'logout'
}


/**
 * DISABLE BROWSER CACHE
 */

if (_url.download.isDownloadable()) {
    if (_config['env'] == 'development' && _url.indexOf('/public/scripts/main.js') > 0) {
        _header.noCache();
    } else {
        _header.cache(2628000);
    }
}
