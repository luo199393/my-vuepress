### render条件渲染

>if/else
``` js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '', 
      text2: '', 
      mode:'view'
    };
  }
  render () {
    if(this.state.mode === 'view') {
      return (
        <div>
          <p>Text: {this.state.text1}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Text: {this.state.text2}</p>
        </div>
      );
    }
  }
}
```

>元素变量
``` js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', 
      mode:'view'
    };
  }
  renderP() {
    if(this.state.mode != 'view') {
      return null;
    } else {
      return (
        <p>Text: {this.state.text}</p>
      );
    }
  }
  render () {
    return (
      <div>
        {this.renderP()}
      </div>
    );
  }
}
```

>三目运算
``` js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', 
      mode:'view'
    };
  }
  return (
    <div>
      {
        view ? null : 
        (
          <p>Text: {this.state.text}</p>
        )
      }
    </div>
  );
}
```