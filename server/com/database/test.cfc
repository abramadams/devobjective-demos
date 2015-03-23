component accessors = "true"
output = "false" {

    /* properties */
    property name = "ID" type = "string";
    property name = "name" type = "string";
    property name = "description" type = "string";

    public any function load() {
        var cachedObject = cacheGet('test');
        if (!isNull(cachedObject)) {
            writeLog('from cache');

            var properties = getMetadata(cachedObject).properties;
            for (var i = 1; i lte arrayLen(properties); i++) {
                var prop = properties[i];
                func = cachedObject["get" & prop.name];
                // this[ prop.name ] = func(); //doesn't ever return anyting, so resorting to evaluate()...
                this[prop.name] = variables[prop.name] = evaluate("cachedObject.get#prop.name#()");
            }

            return this;
        }
        setID(1);
        setName('test name');
        setDescription('this is a description');

        cachePut('test', this, createTimeSpan(0, 0, 0, 5));
        writeLog('not from cache');
        return this;
    }
}
