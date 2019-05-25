import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 创建一个React组件
 * @param {String} name 名称
 * @param {Number} age 年龄
 * 
 * 形参都是只读对象，与vue的props相同，不可修改
 */
function Hello ({name, age}) {
    return <div>Hello Components -- {name} -- {age}</div>
}

// 定义一个对象，用于给组件传参
const cat = {
    name: 'mimi',
    age: 2
}

/**
 * ReactDOM 把dom渲染到页面上
 * @param {vnode} vnode react创建的虚拟dom
 * @param {node} node html的dom节点
 */
ReactDOM.render(<div><Hello name={cat.name} age={cat.age}/></div>, document.querySelector('#app'))