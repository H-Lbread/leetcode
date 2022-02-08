### React 实现一个时钟

![avatar](/React实现一个时钟demo/clock.png)
#### 总结：

主要难点在于 左侧的小时钟

- 指针实现方式：通过绝对定位将指针移到中间，然后以下边中间的位置为圆心旋转即可。

- 通过定时器`setInterval`每隔一秒更新秒针的角度
```js
setInterval(() => {
        let secAngle = new Date().getSeconds() * 6
        let pointer = document.getElementsByClassName('pointer')[0]
        pointer.style.transform = `rotateZ(${secAngle}deg)`
    }, 1000)
```

- 12个小刻度线：没有less不可以使用for循环 但是这边可以用react实现。最后绝对定位即可

