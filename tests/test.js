(function () {
    'use strict';

    /* global test,equal,module,start,stop,window,$ */

    var obj;

    module('First Unit Test Module', {
        setup: function() {
            obj = {a:'OK', b:'KO'};
        }
    });

    test('test 1', function() {
        equal(obj.a, 'OK', 'Message');
        equal(obj.a+'KO', 'OKKO', 'Message');
    });

    test('test 2', function() {
        equal(obj.a+obj.b, 'OKKO', 'Fail');
    });

    module('Unit Testing The "dummy" Module');
    test('test OK', function() {
        equal(window.dummy.OK, true, 'Failed the dummy test');
        equal(window.dummy.KO, false, 'Failed the dummy test');
    });

    module('Asynchroneous Unit Test Module', {
        setup: function() {
            stop();

            // You can load a resource before loaching the test...
            $.get('test.json').success(function(data){
                obj = data;
                start();
            });

            // ... Or any asynchroneous task 
            // window.setTimeout(function() {
            //     obj = {a:'OK', b:'KO'};
            //     start();
            // }, 1000);

        }
    });

    test('test 1', function() {
        equal(obj.a, 'OK', 'Message');
        equal(obj.a+'KO', 'OKKO', 'Message');
    });

    test('test 2', function() {
        equal(obj.a+obj.b, 'OKKO', 'FAil');
    });

}());
