const winston  = require('winston');
const {Loggly} = require('..');

winston.add(new Loggly({
    token: "72ba7555-ba9d-4f90-bc62-20ac39afebfe",
    subdomain: "mylabenv",
    tags: ["winston-V3-bulk"],
    isBulk: true,
    json: true
}));

var source = {
  foo: 1,
  bar: 2,
  buzz: {
      sheep: 'jumped',
      times: 10
  }
};

winston.log('info', '');
winston.log('info', null);

try {
  var a = 10, b = 0;
  a = a / b;
  throw new Error("Something unexpected has occurred.", a);

} catch (e) {
  winston.error(e);
}
winston.log('info', 'cry me a river :(');
winston.log('info', source);

 setInterval(function () {
   sendMultipleLogs();
 }, 5 * 1000);

 function sendMultipleLogs() {
   for (i = 0; i < 100; i++) {
       //winston.log('info', source);
       winston.log('info', 'cry me a river :(');
       winston.log('info', source);
   }
 }

for (i = 0; i < 20; i++) {
    winston.log('info', "Hello World from Node.js!", i);
}
