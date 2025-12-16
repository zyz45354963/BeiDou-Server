//时间之石
const RESULT_ITEM = 4021010;
//皮亚奴斯模型
const ITEM1 = 4000175;
//帕普拉特斯之发
const ITEM2 = 4031901;
//扎昆宝石
const ITEM3 = 4032133;
//时间碎片
const ITEM4 = 4020009;
//辛疤狮王
const ITEM5 = 4001242;
//暴力熊
const ITEM6 = 4001241;

function start() {
  levelStart();
}


function levelStart() {
  let text = "用以下物品可兑换  #i" + RESULT_ITEM + "# #r#t" + RESULT_ITEM + "##k 一个\r\n\r\n";
  text += "#L1#5个 #r#t" + ITEM1 + "##k\r\n";
  text += "#L2#3个 #r#t" + ITEM2 + "##k\r\n";
  text += "#L3#2个 #r#t" + ITEM3 + "##k\r\n";
  text += "#L5#2个 #r#t" + ITEM5 + "##k\r\n";
  text += "#L6#2个 #r#t" + ITEM6 + "##k\r\n";
  text += "#L4#50个 #r#t" + ITEM4 + "##k\r\n";
  cm.sendSelectLevel(text);
}

function level1() {
  changeItem(ITEM1, 5);
}

function level2() {
  changeItem(ITEM2, 3);
}

function level3() {
  changeItem(ITEM3, 2);
}
function level4() {
  changeItem(ITEM4, 50);
}
function level5() {
  changeItem(ITEM5, 2);
}
function level6() {
  changeItem(ITEM6, 2);
}
//兑换方法
function changeItem(item, proportion) {
  let itemQuantity = cm.getItemQuantity(item);
  if (itemQuantity < proportion) {
    cm.sendOk("物品不足");
    cm.dispose();
    return
  }
  if (!cm.canHold(item, 1)) {
    cm.sendOk("背包空间不足");
    cm.dispose();
    return
  }
  cm.gainItem(item, 0 - proportion);
  cm.gainItem(RESULT_ITEM, 1);
  cm.sendOk("兑换成功");
  cm.dispose();
}
