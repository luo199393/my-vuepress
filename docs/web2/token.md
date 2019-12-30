### 加密算法

>[base64加密](https://github.com/dankogai/js-base64)
``` js
<script src="base64.js"></script>
// 或者

yarn add js-base64
let Base64 = require('js-base64').Base64;
// 或者
import { Base64 } from 'js-base64';

Base64.encode('dankogai');  // ZGFua29nYWk=
Base64.encode('小飼弾');    // 5bCP6aO85by+
Base64.encodeURI('小飼弾'); // 5bCP6aO85by-

Base64.decode('ZGFua29nYWk=');  // dankogai
Base64.decode('5bCP6aO85by+');  // 小飼弾
// note .decodeURI() is unnecessary since it accepts both flavors
Base64.decode('5bCP6aO85by-');  // 小飼弾
```

>[MD5加密](https://github.com/blueimp/JavaScript-MD5)
``` js
<script src="js/md5.min.js"></script>
var hash = md5("value"); // "2063c1608d6e0baf80249c42e2be5804"

// 或者
yarn add blueimp-md5

let md5 = require('blueimp-md5');

var hash = md5("value"); // "2063c1608d6e0baf80249c42e2be5804"
var hash = md5("value", "key"); // "01433efd5f16327ea4b31144572c67f6"
```

>[sha1加密](https://github.com/emn178/js-sha1)
``` js
yarn add js-sha1

let sha1 = require('js-sha1');

sha1('Message to hash');
var hash = sha1.create();
hash.update('Message to hash');
hash.hex();
```