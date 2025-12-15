/*
脚本：新人福利礼包
作者：SpicyBurgerKing
日期：2024-10-31
备注：北斗开发组
 */

var status;
var textMsg;
//Start
function start() 
{
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) 
{
	if (CheckStatus(mode))
	{
	    if (status == 0)
	    {
			//第一层对话
			var strGetText = cm.getCharacterExtendValue("新号福利");
			if ( strGetText == "已领取" )
			{
				cm.sendOk("您已经领取了新手奖励了。每个角色#r限领一次。#k");
				cm.dispose();
			}
			else
			{
				cm.sendAcceptDecline("您确定要领取新手礼包吗？一个角色#r限领一次。#k");	
			}
	    }
		else if (status == 1 )
		{
            // 第二层对话
            cm.saveOrUpdateCharacterExtendValue("新号福利", "已领取");
//            cm.gainItem(4310000, 20); // 发放礼包物品绝对音感
            cm.gainItem(2430033, 100);

            // 增加 3000 血量上限
//            var player = cm.getPlayer();
//            var currentMaxHp = player.getMaxHp();
//            player.updateMaxHp(currentMaxHp + 3000); // 增加 3000 点
//            cm.sendOk("恭喜您获得新手奖励，并额外获得 #r3000 点血量上限#k！祝您游戏愉快！");

            cm.dispose();
		}
		else
		{
			//最后一层对话完继续循环至此，推出结束
			cm.dispose();
		}
	}
			
}

function CheckStatus(mode)
{
	if (mode == -1)
	{
		cm.dispose();
		return false;
	}
	
	if (mode == 1)
	{
		status++;
	}
	else
	{
		status--;
	}
	
	if (status == -1)
	{
		cm.dispose();
		return false;
	}	
	return true;
}