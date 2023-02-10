window.__require=function t(e,n,o){function i(a,p){if(!n[a]){if(!e[a]){var s=a.split("/");if(s=s[s.length-1],!e[s]){var c="function"==typeof __require&&__require;if(!p&&c)return c(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){return i(e[a][1][t]||t)},l,l.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<o.length;a++)i(o[a]);return i}({AwardUI:[function(t,e,n){"use strict";cc._RF.push(e,"9f6b5OOVtlA/7+gEb6aWAOO","AwardUI");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(i=t[p])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a=t("../../Script/Common/Action3dManager"),p=t("../../Script/Common/GameFlow"),s=t("../../Script/Common/yyComponent"),c=t("../../Script/GameSpecial/GameEventType"),l=t("../../Script/GameSpecial/GlobalEnum"),u=cc._decorator,d=u.ccclass,h=u.property,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=null,e.goldLabel=null,e.gold=0,e.awarded=!1,e.btnContinueGame=null,e.btnContinueEnabled=!0,e}return i(e,t),Object.defineProperty(e.prototype,"uiType",{get:function(){return l.GlobalEnum.UI.awardUI},enumerable:!1,configurable:!0}),e.prototype.init=function(t){this.initGold(),this.onEvents(),void 0!==t&&this.setData(t)},e.prototype.setData=function(t){this.data=t,this.gold=50},e.prototype.reset=function(){this.resetGold()},e.prototype.show=function(t){this.reset(),this.node.active=!0,void 0!==t&&void 0!==t.data&&this.setData(t.data),this.emit(c.EventType.UIEvent.enter,l.GlobalEnum.UI.playerAssetBar)},e.prototype.exitPage=function(){this.enterWinUI()},e.prototype.initGold=function(){this.awarded=!1},e.prototype.resetGold=function(){this.awarded=!1},e.prototype.onBtnVideo=function(){var t=this;this.emit(c.EventType.AudioEvent.playClickBtn),this.emit(c.EventType.SDKEvent.showVideo,{success:function(){t.addGold(5*t.gold,t.getGoldByVideoFinish.bind(t))}})},e.prototype.getGoldByVideoFinish=function(){this.enterWinUI()},e.prototype.addGold=function(t,e){var n=this;this.emit(c.EventType.AudioEvent.playEffect,l.GlobalEnum.AudioClip.glod);var o=this.goldLabel.convertToWorldSpaceAR(cc.v2()),i=cc.find("Canvas");o.x-=.5*i.width,o.y-=.5*i.height,this.emit(c.EventType.UIEvent.playGoldAnim,{startPos:o,cb:function(){n.emit(c.EventType.PlayerDataEvent.updatePlayerData,{attribute:"gameData.asset.gold",value:t,mode:"+"}),n.awarded=!0,e&&e()},gold:t})},e.prototype.enterWinUI=function(){this.emit(c.EventType.UIEvent.exit,l.GlobalEnum.UI.playerAssetBar),this.emit(c.EventType.UIEvent.exit,l.GlobalEnum.UI.awardUI),this.emit(c.EventType.UIEvent.enter,l.GlobalEnum.UI.winUI)},e.prototype.initBtn=function(){var t=this,e=p.default.getConfig("success").weiyi;if(console.log(e),0==e.kaiguan||1==e.daochumode)this.setBtnContinueGameNormal(),setTimeout(function(){t._showBanner()},40);else{this.setBtnContinueGameBelowBanner();var n=e.chuxian-0;n<0&&(n=0),setTimeout(function(n){void 0===n&&(n=e.yidong-0),n<0&&(n=0),t._showBanner(),setTimeout(function(){t.moveUpBtnContinue()},1e3*n)},1e3*n)}},e.prototype.initBtnContinueGame=function(){this.btnContinueEnabled=!0},e.prototype.resetBtnContinueGame=function(){this.btnContinueEnabled=!0,a.default.getMng(a.ActionMngType.UI).stopAllActions(this.btnContinueGame)},e.prototype.computeNodeWidgetBottom=function(t,e){var n=cc.find("Canvas");return t.height*t.anchorY-.5*n.height+e},e.prototype.setBtnContinueGameBelowBanner=function(){this.btnContinueEnabled=!1,this.btnContinueGame.setPosition(0,this.computeNodeWidgetBottom(this.btnContinueGame,30))},e.prototype.setBtnContinueGameNormal=function(){this.btnContinueEnabled=!0,this.btnContinueGame.setPosition(0,this.computeNodeWidgetBottom(this.btnContinueGame,300))},e.prototype.moveUpBtnContinue=function(){var t=this.computeNodeWidgetBottom(this.btnContinueGame,300),e=a.default.moveTo(.8,0,t,0),n=a.default.callFun(this.onBtnContinueAnimFinish,this),o=a.default.sequence(e,n);a.default.getMng(a.ActionMngType.UI).runAction(this.btnContinueGame,o)},e.prototype.onBtnContinueAnimFinish=function(){this.btnContinueEnabled=!0},e.prototype._showBanner=function(){this.emit(c.EventType.SDKEvent.showBanner,{style:{horizontal:"middle"}})},e.prototype._hideBanner=function(){this.emit(c.EventType.SDKEvent.hideBanner)},e.prototype._removeBanner=function(){this.emit(c.EventType.SDKEvent.hideBanner)},e.prototype.onContinueGame=function(){this.btnContinueEnabled&&this.addGold(this.gold,this.enterWinUI.bind(this))},r([h(cc.Node)],e.prototype,"goldLabel",void 0),r([h(cc.Node)],e.prototype,"btnContinueGame",void 0),r([d],e)}(s.default);n.default=y,cc._RF.pop()},{"../../Script/Common/Action3dManager":void 0,"../../Script/Common/GameFlow":void 0,"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],LevelInfoUI:[function(t,e,n){"use strict";cc._RF.push(e,"4393ap5mKNKOIGdbWF8MM3a","LevelInfoUI");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(i=t[p])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),p=t("../../Script/GameSpecial/GlobalEnum"),s=t("../../Script/GameSpecial/GameEventType"),c=t("../../Script/Common/Action3dManager"),l=cc._decorator,u=l.ccclass,d=l.property,h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lv=0,e.curLevelLabel=null,e.nextLevelLabel=null,e.levelProgressBar=null,e.curGoldLabel=null,e.curGold=0,e.levelBar=null,e}return i(e,t),Object.defineProperty(e.prototype,"uiType",{get:function(){return p.GlobalEnum.UI.levelInfo},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.initCurGold(),this.initComponents(),this.initProgress(),this.onEvents()},e.prototype.onEvents=function(){},e.prototype.reset=function(){this.resetCurGold(),this.resetProgress()},e.prototype.show=function(t){this.node.active=!0,this.reset(),this.setData(t),this.showLvevlBar(),this.showBanner()},e.prototype.hide=function(){this.reset(),this.node.active=!1,this.hideBanner()},e.prototype.getData=function(){return{lv:this.lv,speGold:0,gold:this.curGold}},e.prototype.setData=function(t){this.lv=t.lv,this.curLevelLabel&&(this.curLevelLabel.string=t.lv.toString()),this.nextLevelLabel&&(this.nextLevelLabel.string=(t.lv+1).toString())},e.prototype.convertToString=function(t){return t<1100?t.toString():t<11e5?(.001*t).toFixed(1)+"K":(1e-6*t).toFixed(1)+"M"},e.prototype.initProgress=function(){this.levelProgressBar&&(this.levelProgressBar.progress=0)},e.prototype.resetProgress=function(){this.levelProgressBar&&(this.levelProgressBar.progress=0)},e.prototype.setProgress=function(t){this.levelProgressBar&&(this.levelProgressBar.progress=t)},e.prototype.initCurGold=function(){this.curGold=0,this.curGoldLabel.string=this.curGold.toString()},e.prototype.resetCurGold=function(){this.curGold=0,this.curGoldLabel.string=this.curGold.toString()},e.prototype.addCurGold=function(t){this.curGold+=t,this.curGoldLabel.string=this.curGold.toString()},e.prototype.onPlayerCollGold=function(){this.addCurGold(1)},e.prototype.onBtnConfigSetting=function(){this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.UIEvent.enter,p.GlobalEnum.UI.configSetting)},e.prototype.onBtnPause=function(){this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.UIEvent.enter,p.GlobalEnum.UI.pauseLevel)},e.prototype.onBtnReplay=function(){this.emit(s.EventType.DirectorEvent.replayCurLevel)},e.prototype.onBtnLobby=function(){this.emit(s.EventType.DirectorEvent.enterLobby)},e.prototype.onBtnWin=function(){this.emit(s.EventType.LevelEvent.testWin)},e.prototype.onBtnLose=function(){this.emit(s.EventType.LevelEvent.testLose)},e.prototype.showLvevlBar=function(){this.levelBar.opacity=255;var t=c.default.getMng(c.ActionMngType.UI);t.stopAllActions(this.levelBar);var e=c.default.fadeTo(3,0);t.runAction(this.levelBar,e)},e.prototype.showBanner=function(){var t=this;console.log("\u5f00\u59cb\u5c55\u793abanner"),setTimeout(function(){t._showBanner(),setTimeout(function(){t._hideBanner(),t.emit(s.EventType.SDKEvent.showBlockAd,{size:5,orientation:"landscape",style:{bottom:10}})},1500)},1e3)},e.prototype.hideBanner=function(){this.emit(s.EventType.SDKEvent.hideBlockAd)},e.prototype._showBanner=function(){this.emit(s.EventType.SDKEvent.showBanner,{style:{horizontal:"middle"}})},e.prototype._hideBanner=function(){this.emit(s.EventType.SDKEvent.hideBanner)},e.prototype._removeBanner=function(){this.emit(s.EventType.SDKEvent.hideBanner)},r([d(cc.Label)],e.prototype,"curLevelLabel",void 0),r([d(cc.Label)],e.prototype,"nextLevelLabel",void 0),r([d(cc.ProgressBar)],e.prototype,"levelProgressBar",void 0),r([d(cc.Label)],e.prototype,"curGoldLabel",void 0),r([d(cc.Node)],e.prototype,"levelBar",void 0),r([u],e)}(a.default);n.default=h,cc._RF.pop()},{"../../Script/Common/Action3dManager":void 0,"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],LoseUI:[function(t,e,n){"use strict";cc._RF.push(e,"c5b06QSdNBBNaeoHMnJq/v9","LoseUI");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(i=t[p])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),p=t("../../Script/GameSpecial/GlobalEnum"),s=t("../../Script/GameSpecial/GameEventType"),c=t("../../Script/Common/Action3dManager"),l=t("../../Script/Common/GameFlow"),u=t("../../Script/Common/PlayerData"),d=cc._decorator,h=d.ccclass,y=d.property,m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=null,e.btnContinueGame=null,e.btnContinueEnabled=!0,e.btnVideo=null,e.videoTog=null,e.player=null,e}return i(e,t),Object.defineProperty(e.prototype,"uiType",{get:function(){return p.GlobalEnum.UI.loseUI},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.initComponents(),this.initVideoTog()},e.prototype.reset=function(){this.resetVideoTog()},e.prototype.show=function(t){this.emit(s.EventType.AudioEvent.playEffect,p.GlobalEnum.AudioClip.lose),this.reset(),this.node.active=!0,void 0!==t&&void 0!==t.data&&this.setData(t.data),this.showPlayer()},e.prototype.setData=function(t){this.data=t},e.prototype.enterLevel=function(){this.emit(s.EventType.SDKEvent.hideBanner),this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.UIEvent.exit,this.uiType),this.emit(s.EventType.GameFlow.enterLevel)},e.prototype.onBtnVideo=function(){var t=this;this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.SDKEvent.showVideo,{success:function(){t.addLv(),t.enterLevel()}})},e.prototype.addLv=function(){var t=u.default.getData("gameData.curLevel");1!=t%2||u.default.getData("gameData.curBoss")!=(t+1)/2?this.addCurLevel():this.addCurBoss()},e.prototype.addCurLevel=function(){this.emit(s.EventType.PlayerDataEvent.updatePlayerData,{type:"gameData",attribute:"gameData.curLevel",value:1,mode:"+"})},e.prototype.addCurBoss=function(){this.emit(s.EventType.PlayerDataEvent.updatePlayerData,{type:"gameData",attribute:"gameData.curBoss",value:1,mode:"+"})},e.prototype.onBtnJump=function(){this.btnContinueEnabled&&this.onBtnVideo()},e.prototype.onBtnContinue=function(){this.btnContinueEnabled&&this.enterLevel()},e.prototype.onBtnLobby=function(){this.emit(s.EventType.SDKEvent.hideBanner),this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.UIEvent.exit,this.uiType),this.emit(s.EventType.DirectorEvent.enterLobby)},e.prototype.initBtn=function(){var t=this,e=l.default.getConfig("fail").weiyi;if(console.log(e),0==e.kaiguan||1==e.daochumode)this.setBtnContinueGameNormal(),setTimeout(function(){t._showBanner()},40);else{this.setBtnContinueGameBelowBanner();var n=e.chuxian-0;n<0&&(n=0),setTimeout(function(n){void 0===n&&(n=e.yidong-0),n<0&&(n=0),t._showBanner(),setTimeout(function(){t.moveUpBtnContinue()},1e3*n)},1e3*n)}},e.prototype.initBtnContinueGame=function(){this.btnContinueEnabled=!0},e.prototype.resetBtnContinueGame=function(){this.btnContinueEnabled=!0,c.default.getMng(c.ActionMngType.UI).stopAllActions(this.btnContinueGame)},e.prototype.computeNodeWidgetBottom=function(t,e){var n=cc.find("Canvas");return t.height*t.anchorY-.5*n.height+e},e.prototype.setBtnContinueGameBelowBanner=function(){this.btnContinueEnabled=!1,this.btnContinueGame.setPosition(-150,this.computeNodeWidgetBottom(this.btnContinueGame,30))},e.prototype.setBtnContinueGameNormal=function(){this.btnContinueEnabled=!0,this.btnContinueGame.setPosition(-150,this.computeNodeWidgetBottom(this.btnContinueGame,300))},e.prototype.moveUpBtnContinue=function(){var t=this.computeNodeWidgetBottom(this.btnContinueGame,300),e=c.default.moveTo(.8,-150,t,0),n=c.default.callFun(this.onBtnContinueAnimFinish,this),o=c.default.sequence(e,n);c.default.getMng(c.ActionMngType.UI).runAction(this.btnContinueGame,o)},e.prototype.onBtnContinueAnimFinish=function(){this.btnContinueEnabled=!0},e.prototype.initVideoTog=function(){this.videoTog.isChecked=!0,this.btnVideo.active=!0},e.prototype.resetVideoTog=function(){this.videoTog.isChecked=!0,this.btnVideo.active=!0},e.prototype.onTogVideo=function(){this.btnVideo.active=this.videoTog.isChecked,this.videoTog.isChecked||1==l.default.getGlobalConfig(p.GlobalEnum.GameFlowGlobalConfig.showVideoOnCancelVideoTog)&&this.onBtnVideo()},e.prototype._showBanner=function(){this.emit(s.EventType.SDKEvent.showBanner,{style:{horizontal:"middle"}})},e.prototype._hideBanner=function(){this.emit(s.EventType.SDKEvent.hideBanner)},e.prototype._removeBanner=function(){this.emit(s.EventType.SDKEvent.hideBanner)},e.prototype.showPlayer=function(){var t=u.default.getCurSkinId(),e=t.toString();t<10&&(e="0"+e);var n="juesepifu/"+e;this.player.setSkin(n)},r([y(cc.Node)],e.prototype,"btnContinueGame",void 0),r([y(cc.Node)],e.prototype,"btnVideo",void 0),r([y(cc.Toggle)],e.prototype,"videoTog",void 0),r([y(sp.Skeleton)],e.prototype,"player",void 0),r([h],e)}(a.default);n.default=m,cc._RF.pop()},{"../../Script/Common/Action3dManager":void 0,"../../Script/Common/GameFlow":void 0,"../../Script/Common/PlayerData":void 0,"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],PauseLevelUI:[function(t,e,n){"use strict";cc._RF.push(e,"b580e8N6V1Cj7m8FiIX97vL","PauseLevelUI");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(i=t[p])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),p=t("../../Script/GameSpecial/GameEventType"),s=t("../../Script/GameSpecial/GlobalEnum"),c=cc._decorator,l=c.ccclass,u=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(){this.initComponents(),this.node.active=!1},e.prototype.reset=function(){},e.prototype.show=function(){this.node.active||(this.emit(p.EventType.DirectorEvent.pauseLevel),this.emit(p.EventType.SDKEvent.showInsertByPauseLevel)),this.node.active=!0},e.prototype.hide=function(){this.node.active&&this.emit(p.EventType.DirectorEvent.resumeLevel),this.reset(),this.node.active=!1},e.prototype.onBtnLobby=function(){this.emit(p.EventType.AudioEvent.playClickBtn),this.emit(p.EventType.UIEvent.exit,s.GlobalEnum.UI.pauseLevel),this.emit(p.EventType.DirectorEvent.enterLobby)},e.prototype.onBtnResume=function(){this.emit(p.EventType.AudioEvent.playClickBtn),this.emit(p.EventType.UIEvent.exit,s.GlobalEnum.UI.pauseLevel)},e.prototype.onBtnReplay=function(){this.emit(p.EventType.AudioEvent.playClickBtn),this.emit(p.EventType.UIEvent.exit,s.GlobalEnum.UI.pauseLevel),this.emit(p.EventType.DirectorEvent.replayCurLevel)},e.prototype.onBtnMoreGame=function(){this.emit(p.EventType.AudioEvent.playClickBtn),this.emit(p.EventType.RecommendEvent.showLittlePage)},r([l],e)}(a.default));n.default=u,cc._RF.pop()},{"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],ResurgenceUI:[function(t,e,n){"use strict";cc._RF.push(e,"537ef5L6LZFSoQ2QezJLHX7","ResurgenceUI");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(i=t[p])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),p=t("../../Script/GameSpecial/GameEventType"),s=t("../../Script/GameSpecial/GlobalEnum"),c=cc._decorator,l=c.ccclass,u=c.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnCancel=null,e.curScore=null,e.maxScore=null,e.timer=null,e.t=0,e}return i(e,t),e.prototype.init=function(){this.initComponents(),this.initTimer(),this.hideBtnCancel()},e.prototype.reset=function(){this.resetTimer(),this.hideBtnCancel(),this.unschedule(this.showBtnCancel)},e.prototype.hideBtnCancel=function(){this.btnCancel.active=!1},e.prototype.showBtnCancel=function(){this.btnCancel.active=!0},e.prototype.initTimer=function(){},e.prototype.resetTimer=function(){this.t=10,this.timer.string=this.t.toString(),this.stopTimer()},e.prototype.updateTimer=function(){this.t-=1,this.t<=0&&(this.t=0,this.waitingTimeOver()),this.timer.string=this.t.toString()},e.prototype.waitingTimeOver=function(){this.stopTimer(),this.cancelFuHuo()},e.prototype.startTimer=function(){this.schedule(this.updateTimer,1)},e.prototype.stopTimer=function(){this.unschedule(this.updateTimer)},e.prototype.show=function(){this.node.active=!0,this.reset(),this.scheduleOnce(this.showBtnCancel,2),this.startTimer()},e.prototype.onBtnFuHuo=function(){this.stopTimer(),this.emit(p.EventType.AudioEvent.playClickBtn),this.emit(p.EventType.SDKEvent.showVideo,{success:this.fuHuo.bind(this),fail:this.startTimer.bind(this),quit:this.startTimer.bind(this)})},e.prototype.onBtnCancel=function(){this.emit(p.EventType.AudioEvent.playClickBtn),this.cancelFuHuo()},e.prototype.cancelFuHuo=function(){this.emit(p.EventType.UIEvent.exit,s.GlobalEnum.UI.resurgence),this.emit(p.EventType.LevelEvent.cancelResurgence)},e.prototype.fuHuo=function(){this.emit(p.EventType.UIEvent.exit,s.GlobalEnum.UI.resurgence),this.emit(p.EventType.LevelEvent.resurgence)},r([u(cc.Node)],e.prototype,"btnCancel",void 0),r([u(cc.Label)],e.prototype,"curScore",void 0),r([u(cc.Label)],e.prototype,"maxScore",void 0),r([u(cc.Label)],e.prototype,"timer",void 0),r([l],e)}(a.default);n.default=d,cc._RF.pop()},{"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0}],WinAnim:[function(t,e,n){"use strict";cc._RF.push(e,"2c9f1wU97FCOJH/XExKCKoF","WinAnim");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(i=t[p])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a=t("../../Script/Common/GlobalPool"),p=t("../../Script/Common/Action3dManager"),s=cc._decorator,c=s.ccclass,l=s.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.prefab=null,e.imgs=[],e.minScale=.5,e.maxScale=2,e.minAngle=0,e.maxAngle=180,e.minSkew=0,e.maxSkew=5,e.duration=1,e.minSpd=1500,e.maxSpd=2500,e.gravity=-3e3,e.count=100,e.particles=[],e.index=0,e.finishCallFun=null,e}return i(e,t),e.prototype.addItem=function(){this.index++,this.index>=this.imgs.length&&(this.index=0);var t=a.default.get(this.prefab.name);t.getComponent(cc.Sprite).spriteFrame=this.imgs[this.index];var e=this.randomScope(this.minScale,this.maxScale),n=this.randomScope(this.minAngle,this.maxAngle);t.setScale(e),t.angle=n;var o=this.duration,i=p.default.scaleTo(o,this.randomScope(this.minScale,this.maxScale),this.randomScope(this.minScale,this.maxScale),1),r=p.default.rotateTo2d(o,this.randomScope(this.minAngle,this.maxAngle)),s=p.default.spawn(i,r);p.default.getMng(p.ActionMngType.UI).runAction(t,s);var c=cc.v2(),l=this.minSpd+Math.random()*(this.maxSpd-this.minSpd),u=3.14*(.5*Math.random()+.25);c.x=l*Math.cos(u),c.y=l*Math.sin(u),this.particles.push(new d(t,c,this.gravity)),t.setPosition(0,0),this.node.addChild(t)},e.prototype.randomScope=function(t,e){return t+Math.random()*(e-t)},e.prototype.play=function(t){t&&(this.finishCallFun=t);var e=this.count;a.default.createPool(this.prefab.name,this.prefab),a.default.preCreate(this.prefab.name,e);for(var n=0;n<this.count;++n)this.addItem();this.schedule(this.step,.016)},e.prototype.step=function(){for(var t=this.particles.length-1;t>=0;--t)this.particles[t].update(.016),this.particles[t].finished&&(a.default.put(this.particles[t].node),this.particles.splice(t,1));0==this.particles.length&&this.onFinish()},e.prototype.onFinish=function(){if(this.unscheduleAllCallbacks(),this.finishCallFun){var t=this.finishCallFun;this.finishCallFun=null,t()}},r([l(cc.Prefab)],e.prototype,"prefab",void 0),r([l([cc.SpriteFrame])],e.prototype,"imgs",void 0),r([l(cc.Integer)],e.prototype,"minScale",void 0),r([l(cc.Integer)],e.prototype,"maxScale",void 0),r([l(cc.Integer)],e.prototype,"minAngle",void 0),r([l(cc.Integer)],e.prototype,"maxAngle",void 0),r([l(cc.Integer)],e.prototype,"minSkew",void 0),r([l(cc.Integer)],e.prototype,"maxSkew",void 0),r([l(cc.Integer)],e.prototype,"duration",void 0),r([l(cc.Integer)],e.prototype,"minSpd",void 0),r([l(cc.Integer)],e.prototype,"maxSpd",void 0),r([l(cc.Integer)],e.prototype,"gravity",void 0),r([l(cc.Integer)],e.prototype,"count",void 0),r([c],e)}(cc.Component);n.default=u;var d=function(){function t(t,e,n){this.node=t,this.spd=e,this.gravity=n}return t.prototype.update=function(t){this.spd.y+=this.gravity*t,this.node.setPosition(this.node.x+this.spd.x*t,this.node.y+this.spd.y*t)},Object.defineProperty(t.prototype,"finished",{get:function(){return this.node.y<-667},enumerable:!1,configurable:!0}),t}();cc._RF.pop()},{"../../Script/Common/Action3dManager":void 0,"../../Script/Common/GlobalPool":void 0}],WinUI:[function(t,e,n){"use strict";cc._RF.push(e,"d8843No3IJGf4jWUiXUAgX3","WinUI");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var p=t.length-1;p>=0;p--)(i=t[p])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a};Object.defineProperty(n,"__esModule",{value:!0});var a=t("../../Script/Common/yyComponent"),p=t("../../Script/GameSpecial/GlobalEnum"),s=t("../../Script/GameSpecial/GameEventType"),c=t("../../Script/Common/Action3dManager"),l=t("../../Script/Common/GameFlow"),u=t("../../Script/Common/PlayerData"),d=t("./WinAnim"),h=cc._decorator,y=h.ccclass,m=h.property,v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=null,e.goldLabel=null,e.gold=0,e.awarded=!1,e.btnContinueGame=null,e.btnContinueEnabled=!0,e.btnVideo=null,e.videoTog=null,e.player=null,e.winAnima=null,e}return i(e,t),Object.defineProperty(e.prototype,"uiType",{get:function(){return p.GlobalEnum.UI.winUI},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.initGold(),this.initComponents(),this.initVideoTog()},e.prototype.reset=function(){this.resetGold(),this.resetVideoTog()},e.prototype.show=function(t){var e=this;this.emit(s.EventType.AudioEvent.playEffect,p.GlobalEnum.AudioClip.win),this.reset(),this.node.active=!0,void 0!==t&&void 0!==t.data&&this.setData(t.data),this.showPlayer(),this.emit(s.EventType.UIEvent.enter,p.GlobalEnum.UI.playerAssetBar),setTimeout(function(){e.playWinAnima()},1e3)},e.prototype.setData=function(t){this.data=t,this.gold=50},e.prototype.initGold=function(){this.awarded=!1},e.prototype.resetGold=function(){this.awarded=!1},e.prototype.onBtnNext=function(){this.btnContinueEnabled&&(this.emit(s.EventType.SDKEvent.hideBanner),this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.UIEvent.exit,this.uiType),this.emit(s.EventType.GameFlow.enterLevel))},e.prototype.onBtnLobby=function(){this.emit(s.EventType.SDKEvent.hideBanner),this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.UIEvent.exit,this.uiType),this.emit(s.EventType.DirectorEvent.enterLobby)},e.prototype.onBtnShop=function(){this.btnContinueEnabled&&(this.emit(s.EventType.SDKEvent.hideBanner),this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.UIEvent.exit,this.uiType),this.emit(s.EventType.DirectorEvent.enterLobby,{enterNextUI:"shop"}))},e.prototype.onContinueGame=function(){this.btnContinueEnabled&&this.addGold(this.gold,this.onBtnNext.bind(this))},e.prototype.onBtnVideo=function(){var t=this;this.emit(s.EventType.AudioEvent.playClickBtn),this.emit(s.EventType.SDKEvent.showVideo,{success:function(){t.addGold(5*t.gold,t.onBtnNext.bind(t))}})},e.prototype.addGold=function(t,e){var n=this;this.emit(s.EventType.AudioEvent.playEffect,p.GlobalEnum.AudioClip.glod);var o=this.goldLabel.convertToWorldSpaceAR(cc.v2()),i=cc.find("Canvas");o.x-=.5*i.width,o.y-=.5*i.height,this.emit(s.EventType.UIEvent.playGoldAnim,{startPos:o,cb:function(){n.emit(s.EventType.PlayerDataEvent.updatePlayerData,{attribute:"gameData.asset.gold",value:t,mode:"+"}),n.awarded=!0,e&&e()},gold:t})},e.prototype.initBtn=function(){var t=this,e=l.default.getConfig("success").weiyi;if(console.log(e),0==e.kaiguan||1==e.daochumode)this.setBtnContinueGameNormal(),setTimeout(function(){t._showBanner()},40);else{this.setBtnContinueGameBelowBanner();var n=e.chuxian-0;n<0&&(n=0),setTimeout(function(n){void 0===n&&(n=e.yidong-0),n<0&&(n=0),t._showBanner(),setTimeout(function(){t.moveUpBtnContinue()},1e3*n)},1e3*n)}},e.prototype.initBtnContinueGame=function(){this.btnContinueEnabled=!0},e.prototype.resetBtnContinueGame=function(){this.btnContinueEnabled=!0,c.default.getMng(c.ActionMngType.UI).stopAllActions(this.btnContinueGame)},e.prototype.computeNodeWidgetBottom=function(t,e){var n=cc.find("Canvas");return t.height*t.anchorY-.5*n.height+e},e.prototype.setBtnContinueGameBelowBanner=function(){this.btnContinueEnabled=!1,this.btnContinueGame.setPosition(-150,this.computeNodeWidgetBottom(this.btnContinueGame,30))},e.prototype.setBtnContinueGameNormal=function(){this.btnContinueEnabled=!0,this.btnContinueGame.setPosition(-150,this.computeNodeWidgetBottom(this.btnContinueGame,300))},e.prototype.moveUpBtnContinue=function(){var t=this.computeNodeWidgetBottom(this.btnContinueGame,300),e=c.default.moveTo(.8,-150,t,0),n=c.default.callFun(this.onBtnContinueAnimFinish,this),o=c.default.sequence(e,n);c.default.getMng(c.ActionMngType.UI).runAction(this.btnContinueGame,o)},e.prototype.onBtnContinueAnimFinish=function(){this.btnContinueEnabled=!0},e.prototype.initVideoTog=function(){this.videoTog.isChecked=!0,this.btnVideo.active=!0},e.prototype.resetVideoTog=function(){this.videoTog.isChecked=!0,this.btnVideo.active=!0},e.prototype.onTogVideo=function(){this.btnVideo.active=this.videoTog.isChecked,this.videoTog.isChecked||1==l.default.getGlobalConfig(p.GlobalEnum.GameFlowGlobalConfig.showVideoOnCancelVideoTog)&&this.onBtnVideo()},e.prototype._showBanner=function(){this.emit(s.EventType.SDKEvent.showBanner,{style:{horizontal:"middle"}})},e.prototype._hideBanner=function(){this.emit(s.EventType.SDKEvent.hideBanner)},e.prototype._removeBanner=function(){this.emit(s.EventType.SDKEvent.hideBanner)},e.prototype.showPlayer=function(){var t=u.default.getCurSkinId(),e=t.toString();t<10&&(e="0"+e);var n="juesepifu/"+e;this.player.setSkin(n)},e.prototype.playWinAnima=function(){this.winAnima.play()},r([m(cc.Node)],e.prototype,"goldLabel",void 0),r([m(cc.Node)],e.prototype,"btnContinueGame",void 0),r([m(cc.Node)],e.prototype,"btnVideo",void 0),r([m(cc.Toggle)],e.prototype,"videoTog",void 0),r([m(sp.Skeleton)],e.prototype,"player",void 0),r([m(d.default)],e.prototype,"winAnima",void 0),r([y],e)}(a.default);n.default=v,cc._RF.pop()},{"../../Script/Common/Action3dManager":void 0,"../../Script/Common/GameFlow":void 0,"../../Script/Common/PlayerData":void 0,"../../Script/Common/yyComponent":void 0,"../../Script/GameSpecial/GameEventType":void 0,"../../Script/GameSpecial/GlobalEnum":void 0,"./WinAnim":"WinAnim"}]},{},["AwardUI","LevelInfoUI","LoseUI","PauseLevelUI","ResurgenceUI","WinAnim","WinUI"]);