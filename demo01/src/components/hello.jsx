import React from 'react'

/**
 * 创建一个React组件
 * @param {String} name 名称
 * @param {Number} age 年龄
 * 
 * 形参都是只读对象，与vue的props相同，不可修改
 */
export default function Hello ({name, age}) {
    return <div>Hello Components -- {name} -- {age}</div>
}