## react-app-demo
1、利用create react app搭建的react-demo
2、this指向，箭头函数[理解React中es6方法创建组件的this](http://www.cnblogs.com/mingjiezhang/p/5816461.html)
> 2.1 可以在class声明中的constructor()函数中，使用
     ```
     this.handleClick = this.handleClick.bind(this);
     ```
     2.2 bind方法
     ```
     <div onClick={this.handleClick.bind(this)}>
          You {text} this. Click to toggle.
     </div>
     ```
     2.3 箭头函数
     ```
     <div onClick={() => this.handleClick()}>
           You {text} this. Click to toggle.
     </div>
     ```