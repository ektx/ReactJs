import React from 'react';
import ReactDOM from 'react-dom';

// 引用组件
import Hello from '@/components/hello'

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
ReactDOM.render(
    // 调用组件
    <Hello {...cat}/>, 
    // 渲染页面
    document.querySelector('#app')
)