/**
 * 创建单个悬浮按钮a标签（不再单独创建外层容器）
 * @param {string} link - 跳转链接（站内/外链均可）
 * @param {string} iconClass - FontAwesome图标class名称，如 fab fa-github
 * @param {string} tip - 鼠标悬浮显示的提示文字
 * @returns {HTMLAnchorElement} 返回a标签元素
 */
function createLeftFloatBtn(link, iconClass, tip) {
  // 创建a链接标签
  const a = document.createElement('a')
  // 设置跳转地址
  a.href = link
  // 新标签页打开链接
  a.target = '_blank'
  // 鼠标悬浮提示文本
  a.title = tip
  // 内部填充图标i标签
  a.innerHTML = `<i class="${iconClass}"></i>`

  return a
}

/**
 * 循环遍历按钮配置数组，批量生成多个悬浮按钮
 * @param {Array} list - 按钮配置数组，每一项包含 url、icon、title
 */
function initLeftBtns(list) {
  // 1. 只创建唯一的外层容器
  let container = document.querySelector('.float-left-btn')
  // 如果页面不存在容器，则新建一个挂载到body
  if (!container) {
    container = document.createElement('div')
    container.className = 'float-left-btn'
    document.body.appendChild(container)
  }

  // 2. 清空旧按钮，防止重复渲染
  container.innerHTML = ''

  // 3. 循环生成按钮并塞入同一个容器
  list.forEach(item => {
    const btn = createLeftFloatBtn(item.url, item.icon, item.title)
    container.appendChild(btn)
  })
}

// 统一初始化所有自定义悬浮按钮
function initBtnWidgets() {
  initLeftBtns([
    // Github
    //{url:'https://github.com/xxx', icon:'fab fa-github', title:'我的Github'},
    // B站
    //{url:'https://space.bilibili.com/xxx', icon:'fab fa-bilibili', title:'B站主页'},
    // 掘金
    //{url:'https://juejin.cn/user/xxx', icon:'fab fa-juejin', title:'掘金'},
    // 知乎
    //{url:'https://zhihu.com/people/xxx', icon:'fab fa-zhihu', title:'知乎'},
    // 微信
    //{url:'#', icon:'fab fa-weixin', title:'微信联系我'},
    // Gitee码云
    //{url:'https://gitee.com/xxx', icon:'fab fa-gitee', title:'Gitee'},
    // Vue技术栈
    //{url:'https://vuejs.org', icon:'fab fa-vuejs', title:'Vue官网'}
  ])
}