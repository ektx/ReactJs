import React from 'react';
import ReactDOM from 'react-dom';

/** 
 * 1.创建虚拟DOM
 * @param {tring} arg1 表示元素的名称
 * @param {object} opts 当前dom的元素属性
 * @param {object} node 子节点
 * @param {object} ...rest 其它子节点
 */
// const myh1 = React.createElement('h1', {id: 'myh1', title: 'this is a h1'}, '这里一个h1')

const mydiv = <h1>React Demo</h1>


/**
 * ReactDOM 把dom渲染到页面上
 * @param {vnode} vnode react创建的虚拟dom
 * @param {node} node html的dom节点
 */
ReactDOM.render(mydiv, document.querySelector('#app'))