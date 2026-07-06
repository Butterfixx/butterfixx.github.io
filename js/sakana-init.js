/**
 * 初始化 CDN 版 Sakana 小鱼挂件
 * @param {Object} customOpt - 自定义覆盖配置（可选）
 */
function initSakanaWidget(customOpt = {}) {
  // 1. 创建挂件容器并插入页面
  let sakanaWrap = document.getElementById('sakana-box');
  // 不存在容器则新建
  if (!sakanaWrap) {
    sakanaWrap = document.createElement('div');
    sakanaWrap.id = 'sakana-box';
    sakanaWrap.className = 'sakana-box';
    document.body.appendChild(sakanaWrap);
  }

  // 2. 默认基础配置
  const baseOptions = {
    el: '.sakana-box',
    scale: 0.5,
    canSwitchCharacter: true,
    inertia: 0.01,
    decay: 0.97,
    r: 0,
    y: 0,
    translateY: 0,
  };

  // 合并默认配置 + 外部传入自定义配置
  const finalOptions = Object.assign({}, baseOptions, customOpt);

  // 3. 等待 Sakana CDN 脚本加载完成再初始化
  if (window.Sakana) {
    Sakana.init(finalOptions);
  } else {
    // CDN 未加载完成，监听加载后执行
    window.addEventListener('load', () => {
      Sakana.init(finalOptions);
    });
  }
}