var status;

function start() {
  levelStart();
}

function levelStart() {
  let text = "要去哪个商店呢？\r\n";
  text += "#L2#药品商店#l\r\n";
  text += "#L3#材料商店#l\r\n";
  text += "#L4#兑换商店#l\r\n";
  text += "#L6#卷轴商店#l\r\n";
  text += "#L5#高级卷轴商店#l\r\n";
  text += "#L7#枫叶商店#l\r\n";
  cm.sendSelectLevel(text);
}

function level2() {
  cm.openShopNPC(9999992);
  cm.dispose();
}

function level3() {
  cm.openShopNPC(9999993);
  cm.dispose();
}

function level4() {
  cm.openShopNPC(9999994);
  cm.dispose();
}
function level5() {
  cm.openShopNPC(9999995);
  cm.dispose();
}

function level6() {
  cm.openShopNPC(9999996);
  cm.dispose();
}

function level7() {
  cm.openShopNPC(9999997);
  cm.dispose();
}
