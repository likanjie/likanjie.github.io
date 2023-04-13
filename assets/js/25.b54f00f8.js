(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{455:function(a,t,s){a.exports=s.p+"assets/img/20210514001.81e8df11.jpg"},456:function(a,t,s){a.exports=s.p+"assets/img/20210514002.f38ed3a1.png"},861:function(a,t,s){"use strict";s.r(t);var v=s(10),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"核心技术及源码剖析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心技术及源码剖析"}},[a._v("#")]),a._v(" 核心技术及源码剖析")]),a._v(" "),t("h2",{attrs:{id:"第-2-章-java-bio-编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第-2-章-java-bio-编程"}},[a._v("#")]),a._v(" 第 2  章  Java BIO 编程")]),a._v(" "),t("h3",{attrs:{id:"_2-1-i-o-模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-i-o-模型"}},[a._v("#")]),a._v(" 2.1 I/O  模型")]),a._v(" "),t("h4",{attrs:{id:"_2-1-1-i-o-模型基本说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-i-o-模型基本说明"}},[a._v("#")]),a._v(" 2.1.1 I/O  模型基本说明")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("I/O  模型简单的理解：就是用什么样的通道进行数据的发送和接收，很大程度上决定了程序通信的性能  2)  Java 共支持 3  种网络编程模型/IO 模式：BIO、NIO、AIO")])]),a._v(" "),t("li",[t("p",[a._v("Java BIO ： 同步并阻塞(传统阻塞型)，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器")])])]),a._v(" "),t("p",[a._v("端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销 【简单示意图】")]),a._v(" "),t("p",[t("img",{attrs:{src:s(455),alt:"图片"}})]),a._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[a._v("Java NIO ： 同步非阻塞，服务器实现模式为一个线程处理多个请求(连接)，即客户端发送的连接请求都会注  册到多路复用器上，多路复用器轮询到连接有 I/O 请求就进行处理 【简单示意图】")])]),a._v(" "),t("p",[t("img",{attrs:{src:s(456),alt:"图片"}})]),a._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[a._v("Java AIO(NIO.2)  ： 异步非阻塞，AIO 引入异步通道的概念，采用了  Proactor 模式，简化了程序编写，有效  的请求才启动线程，它的特点是先由操作系统完成后才通知服务端程序启动线程去处理，一般适用于连接数较  多且连接时间较长的应用")])]),a._v(" "),t("h3",{attrs:{id:"_2-1-bio、nio、aio-适用场景分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-bio、nio、aio-适用场景分析"}},[a._v("#")]),a._v(" 2.1       BIO、NIO、AIO 适用场景分析")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("BIO 方式适用于连接数目比较小且固定的架构，这种方式对服务器资源要求比较高，并发局限于应用中，JDK1.4以前的唯一选择，但程序简单易理解。")])]),a._v(" "),t("li",[t("p",[a._v("NIO 方式适用于连接数目多且连接比较短（轻操作）的架构，比如聊天服务器，弹幕系统，服务器间通讯等。编程比较复杂，JDK1.4 开始支持。")])]),a._v(" "),t("li",[t("p",[a._v("AIO 方式使用于连接数目多且连接比较长（重操作）的架构，比如相册服务器，充分调用 OS 参与并发操作， 编程比较复杂，JDK7 开始支持。")])])]),a._v(" "),t("h2",{attrs:{id:"_2-2-java-bio-基本介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-java-bio-基本介绍"}},[a._v("#")]),a._v(" 2.2       Java BIO 基本介绍")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Java *"),t("strong",[a._v("BIO*")]),a._v(" 就是传统的 "),t("strong",[a._v("java io")]),a._v(" 编程，其相关的类和接口在 java.io")])]),a._v(" "),t("li",[t("p",[a._v("BIO("),t("strong",[a._v("blocking I/O")]),a._v(") ： 同步阻塞，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销，可以通过线程池机制改善(实现多个客户连接服务器)。 【后有应用实例】")])]),a._v(" "),t("li",[t("p",[a._v("BIO 方式适用于连接数目比较小且固定的架构，这种方式对服务器资源要求比较高，并发局限于应用中，JDK1.4以前的唯一选择，程序简单易理解")])])])])}),[],!1,null,null,null);t.default=_.exports}}]);