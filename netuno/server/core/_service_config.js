
/**
 *  When service need public access...
 */
/*
if (_service.path == 'samples/my-service') {
    _service.allow();
}
*/

/**
 * Firebase Listeners
 */
if (_service.path.startsWith('firebase/listener/')
    && _config['_firebase:listener_secret'] == _req['secret']) {
    _service.allow();
}

/**
 * Cron Jobs
 */
if (_service.path.startsWith('jobs/')
    && _config['_cron:jobs']
        .find('name', _service.path.substring('jobs/'.length))
        ['params']
        .has('secret', _req['secret'])) {
    _service.allow();
}
