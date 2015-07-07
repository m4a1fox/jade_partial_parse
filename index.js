/**
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

/**
 * @author Maxim Bogdanov <sin666m4a1fox@gmail.com>
 */

var jade = require('jade');

module.exports = function (template_path, data) {
    var template = require('fs').readFileSync(template_path, 'utf8');
    var jadeFn = jade.compile(template, {
        filename: template_path,
        pretty: true
    });
    return jadeFn(data);
};

