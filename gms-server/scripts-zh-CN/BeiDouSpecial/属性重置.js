/*
脚本：属性重置（仅重置所有属性）
作者：SpicyBurgerKing
日期：2024-10-31
备注：北斗开发组 - 三元表达式优化版
*/

function start() {
    cm.sendYesNo("你确定要重置所有属性吗？所有属性点将返还为AP。");
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    }

    if (mode == 1) {
        resetAllStats();
        cm.dispose();
    }
}

function resetAllStats() {
    const player = cm.getPlayer();
    const baseStat = 4; // 基础属性值

    // 计算各属性返还的AP（确保为整数）
    const apGain = {
        str: Math.max(0, Math.floor(player.getStr() - baseStat)),
        dex: Math.max(0, Math.floor(player.getDex() - baseStat)),
        int: Math.max(0, Math.floor(player.getInt() - baseStat)),
        luk: Math.max(0, Math.floor(player.getLuk() - baseStat))
    };

    // 计算总AP
    const totalAp = apGain.str + apGain.dex + apGain.int + apGain.luk;

    if (totalAp <= 0) {
        cm.sendOk("当前属性已经是基础值，无需重置。");
        return;
    }

    // 使用三元表达式优化属性重置
    player.assignStr(apGain.str > 0 ? -apGain.str : 0);
    player.assignDex(apGain.dex > 0 ? -apGain.dex : 0);
    player.assignInt(apGain.int > 0 ? -apGain.int : 0);
    player.assignLuk(apGain.luk > 0 ? -apGain.luk : 0);

    // 更新AP
    player.setRemainingAp(player.getRemainingAp() + totalAp);

    cm.sendOk(`所有属性已重置为4点，共返还了 #r${totalAp} AP#k。`);
}