### Axios

>安装使用
``` js
import axios from 'axios'
import promise from 'es6-promise'

// main.js
Vue.prototype.axios = axios
// axios兼容ie9
promise.polyfill()
```

>get封装
``` js
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
    .then(response => {
      if (response.status === 200) {
        resolve(response.data)
      } else {
        reject(response.data.message)
      }
    })
    .catch(error => {
      reject(error)
    })
  })
}
// main.js
import { get} from './http'
Vue.prototype.$get = get
```

>post封装
``` js
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        if (response.status === 200) {
          resolve(response.data)
        } else {
          reject(response.data.message)
        }
      },
      error => {
        reject(error)
      }
    )
  })
}
// main.js
import { post} from './http'
Vue.prototype.$post = post
```

>文件上传
``` js
//创建form对象
let param = new FormData(); 
//通过append向form对象添加数据
param.append('file',file,file.name);
//添加form表单中其他数据
param.append('chunk','0');
//FormData私有类对象，访问不到，可以通过get判断值是否传进去
console.log(param.get('file')); 
//添加请求头
let config = {
  headers:{'Content-Type':'multipart/form-data'}
}; 
axios.post(url,param,config)
.then(response=>{
  console.log(response.data);
})
```

>设置请求头
``` js
//get请求
axios.get(
  urlString, 
  {
    headers: {
      'Authorization': 'Bearer ' + token,
      "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId,
      ...
    },
    params: {
      param1: string,
      param2: string
    }
  }
)
.then(res => fn)
.catch(e => fn)

// post请求
axios.post(
  urlString, 
  {
      data: data,
      ...
  },
  {
    headers: {
        'Authorization': 'Bearer ' + token,
        "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId,
        ...
    }
  }
)
.then(res => fn)
.catch(e => fn
```