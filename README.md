# react-datepicker
简易滚动日期选择器。

![图片](./sss.png)

### 提醒 Warning

> 1. 初始化时可用自定义state开控制是否显示
> 2. 请在react项目中使用，本项目依赖react

### 使用范围 Divce Scope

> 目前暂适配手机端

> Only in mobile devices

### 使用方法 Usage

```javascript
import Datepicker from 'react-datepicker-s';

<Datepicker theme={theme} open={true} getDate={(date)=>console.log(date)}>
</Datepicker>

```

### 自定义方法 Customize


属性(props) | 类型(type) | 案例(demo)
---|---|---
theme | object | {background:'#ffffff',color:'#000000'}
open | boolean | true (default is false)
getDate | function | (date)=>console.log(date) 

