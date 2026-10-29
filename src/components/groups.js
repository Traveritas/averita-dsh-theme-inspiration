/**
 * 设置面板的分组：面板里的小标题，不是设置导航的分区（DSH 的导航是平铺的）。
 *
 * - order 决定组的先后；组内顺序由各 settings.js 的 row.order 决定。
 * - 空组不渲染：没有对应设置行的组不会出现在面板里。
 * - 行没有 group 时落在面板最末（重置那种插件级操作）。
 */
export default [
  { id: 'brand', label: '品牌', order: 10 },
  { id: 'background', label: '背景', order: 20 },
  { id: 'deco', label: '装饰', order: 30 },
];