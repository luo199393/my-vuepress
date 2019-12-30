### 组件通信

>父组件 》 子组件
``` js {15,29}
// Parent.jsx
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'yang'
    };
  }
  render() {
    return (
      <div>
        <Child name={name} />
      </div>
    );
  }
}
export default Parent;

// Child.jsx
import React,{Component} from "react"

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    };
  }
  render() {
    return (
      <p>{this.name}</p>
    )
  }
}
export default Child;
```

>子组件 》 父组件
``` js
// Child.jsx
import React,{Component} from "react"

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "yang"
    };
  }
  render() {
    return (
      <p onClick={this.props.onData(this.name)}>{{this.name}}</p>
    )
  }
}
export default Child;

// Parent.jsx
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  onData(name) {
    this.setState({
      name: name
    });
  }
  render() {
    return (
      <div>
        <Child onData={this.onData} />
      </div>
    );
  }
}
export default Parent;
```

>多层嵌套组件通信:context
``` js
// one.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class oneItem extends Component {
  // 子组件声明自己要使用context
  static contextTypes = {
    color: PropTypes.string,
  }
  render() {
    return (
      <p>{this.context.color}</p>
    );
  }
}
export default oneItem;

// two.jsx
class twoItem extends Component {
    // 父组件声明自己支持context
    static childContextTypes = {
      color: PropTypes.string,
    }
    // 提供一个函数,用来返回相应的context对象
    getChildContext() {
      return {
        color: 'red',
      };
    }
    render() {
      return (
        <p>test</p>
      );
    }
}
export default twoItem;
```  

参考: [React中组件通信的几种方式](https://juejin.im/post/5a2cbc57f265da431523d6de#heading-6)