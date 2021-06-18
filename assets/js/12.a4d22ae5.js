(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{376:function(n,t,e){"use strict";e.r(t);var a=e(44),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_1、命令模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、命令模式"}},[n._v("#")]),n._v(" 1、命令模式")]),n._v(" "),e("h2",{attrs:{id:"_1-1-命令模式实现菜单程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-命令模式实现菜单程序"}},[n._v("#")]),n._v(" 1.1 命令模式实现菜单程序")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\t<body>\n        <button id=\"botton1\">点击按钮1</button>\n        <button id=\"botton2\">点击按钮2</button>\n        <button id=\"botton3\">点击按钮3</button>\n    </body>\n    <script>\n        var button1 = document.getElementById('botton1');\n        var button2 = document.getElementById('botton2');\n        var button3 = document.getElementById('botton3');\n    </srcipt>\n")])])]),e("p",[n._v("定义"),e("code",[n._v("setCommand")]),n._v("函数，负责往按钮上添加命令；")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var setCommand = function(button,command) {\n\tbutton.onclick = function() {\n\t\tcommand.execute();\n\t}\n}\n")])])]),e("p",[n._v("按钮后面的行为被封装在下面的两个对象中：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var MenBar = {\n\trefresh:function() {\n\t\t// 刷新菜单的操作\n\t}\n};\nvar SubMenu = {\n\tadd:function() {\n\t\t// 添加菜单的操作\n\t},\n\tdel:function() {\n\t\t// 删除菜单的操作\n\t}\n}\n")])])]),e("p",[n._v("在让button变得有用起来之前，我们先要把这些行为都封装在命令类中：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 刷新\nvar RefreshMenuBarCommand = function(receiver) {\n\tthis.receiver = receiver;\n};\nRefreshMenuBarCommand.prototype.execute = function() {\n\tthis.receiver.refresh();\n};\n// 添加\nvar AddMenuCommand = function (receiver) {\n\tthis.receiver = receiver;\n};\nAddMenuCommand.prototype.execute = function() {\n\tthis.receiver.add();\n};\n// 删除\nvar DelMenuCommand = function(receiver) {\n\tthis.receiver = receiver;\n};\nDelMenuCommand.prototype.execute = funciton() {\n\tthis.receiver.del();\n};\n")])])]),e("p",[n._v("最后把命令接收者传入到command对象中，并且把command对象安装到"),e("code",[n._v("button")]),n._v("上面：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var refreshMenuBarCommand = new RefreshMenuBarCommand(MenBar);\nvar addMenuCommand = new AddMenuCommand(SubMenu);\nvar delMenuCommand = new DelMenuCommand(SubMenu);\nsetCommand(button1,refreshMenuBarCommand);\nsetCommand(button2,addMenuCommand);\nsetCommand(button3,delMenuCommand);\n")])])]),e("h2",{attrs:{id:"_1-2-javascript中的命令模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-javascript中的命令模式"}},[n._v("#")]),n._v(" 1.2 Javascript中的命令模式")]),n._v(" "),e("p",[n._v("命令模式的由来，其实就是回调函数的一个面向对象的替代品。\n利用JavaScript实现命令模式的：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var bindClick = function (button,func) {\n\tbutton.onclick = func;\n};\nvar MenBar = {\n\trefresh = function () {\n\t\tconsole.log('刷新页面！');\n\t}\n};\nvar SubMenu = {\n\tadd : function () {\n\t\tconsole.log('添加菜单！')\n\t},\n\tdel :funciton () {\n\t\tconsole.log('删除菜单')\n\t}\n};\nbindClick(button1,MenBar.refresh);\nbindClick(button2,SubMenu.add);\nbindClick(button3,SubMenu.del);\n")])])]),e("p",[n._v("在面向对象设计中，命令模式的接收者被当成"),e("code",[n._v("command")]),n._v("对象的属性保存起来，同时约定执行命令的操作调用"),e("code",[n._v("command.execute")]),n._v("方法。在使用闭包的命令模式实现中，接收者被封闭在闭包产生的环境中，执行命令更加简单，仅仅执行回调函数即可；")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var setCommand = function (button,func) {\n\tbutton.onclick = function () {\n\t\tfunc()\n\t}\n};\nvar MenuBar = {\n\trefresh = function () {\n\t\tconsole.log('刷新页面！');\n\t}\n};\nvar RefreshMenuBarCommand = function (receiver) {\n\treturn function () {\n\t\treceiver.refresh();\n\t}\n};\nvar refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);\nsetCommand(button1,refreshMenuBarCommand);\n")])])]),e("p",[n._v("当然，如果想要更明确地表达当前正在使用命令模式，或者出了执行命令之外，将来还有可能还要提供撤销命令等操作。那么最好还是把执行函数改成调用"),e("code",[n._v("execute")]),n._v("方法：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("var RefreshMenuBarCommand = function (receiver) {\n\treuturn {\n\t\texecute : function () {\n\t\t\treceiver.refresh();\n\t\t}\n\t}\n};\nvar setCommand = function (button ,command) {\n\tbutton.onclick = function () {\n\t\tcommand.execute();\n\t}\n};\nvar refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);\nsetCommand(button1,refreshMenuBarCommand);\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);