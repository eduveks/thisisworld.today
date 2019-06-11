
if (!_out.isClosed()) {
    _out.print(
        "### SERVER ERROR ###"
    )
    /*
    // Is insecure but the code below will print errors with more details...
    _out.print(
        'SERVER ERROR # ' +
        _error['file']
        +':'+
        _error['line']
        +' # '+
        _error['message']
    )
     */
}
