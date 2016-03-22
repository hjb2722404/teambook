!function(){"use strict";angular.module("teambookWww",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngFileUpload","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function a(a,e,s){function o(a){s.apiHost;return{userId:1,userName:"小雅",userDec:"一段话介绍一下自己吧",userLevel:6,userIsVip:!0,userZhiwei:"设计部 UI设计师",userLogo:"./assets/images/user-logo.png",userCompany:"南京旭强信息有限科技公司",userEmail:"123@123.com",userSex:"女"}}this.getUserInfos=o}a.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("userinfos",a)}(),function(){"use strict";function a(){function a(a,e){function s(a){o.userInfos=e.getUserInfos(a),"女"==o.userInfos.userSex&&(o.female=!0)}var o=this,n=a.search().userId;o.female=!1,o.userInfos=[],s(n),o.isShowCard=!1}a.$inject=["$location","userinfos"];var e={restrict:"E",templateUrl:"app/main/userInfo/user_info.html",scope:{},controller:a,controllerAs:"vm",bindToController:!0,replace:!0};return e}angular.module("teambookWww").directive("userInfo",a)}(),function(){"use strict";function a(a,e,s){function o(a,e,s,o){var n={"size ":9,info:"share",data:[{shareId:3,shareTitle:"3如何对自己的工作进行排序方法",shareLitpic:"./assets/images/video-litpic.png",shareTags:"标签,标签2,标签3",shareViews:300,shareUserName:"刘娜",shareUserLogo:"./assets/images/user1-small.png",shareCompanyName:"南京旭强信息科技有限",shareType:"video"},{shareId:6,shareTitle:"6如何对自己的工作进行排序",shareLitpic:"./assets/images/video-litpic.png",shareTags:"标签1,标签2,标签3",shareViews:300,shareUserName:"刘娜",shareUserLogo:"./assets/images/user2-small.png",shareCompanyName:"南京旭强信息科技有限公司",shareType:"video"},{shareId:2,shareTitle:"2如何对自己的工作进行排序",shareLitpic:"./assets/images/doc-litpic.png",shareTags:"标签1,标签2,标签3",shareViews:300,shareUserName:"刘娜",shareUserLogo:"./assets/images/user-small.png",shareCompanyName:"南京旭强信息科技有限公司",shareType:"doc"},{shareId:1,shareTitle:"1如何对自己的工作进行排序",shareLitpic:"./assets/images/video-litpic.png",shareTags:"标签1,标签2,标签3",shareViews:300,shareUserName:"刘娜",shareUserLogo:"./assets/images/user3-small.png",shareCompanyName:"南京旭强信息科技有限公司",shareType:"video"},{shareId:5,shareTitle:"5如何对自己的工作进行排序",shareLitpic:"./assets/images/doc-litpic.png",shareTags:"标签1,标签2,标签3",shareViews:300,shareUserName:"刘娜",shareUserLogo:"./assets/images/user4-small.png",shareCompanyName:"南京旭强信息科技有限公司",shareType:"doc"},{shareId:4,shareTitle:"4如何对自己的工作进行排序",shareLitpic:"./assets/images/video-litpic.png",shareTags:"标签1,标签2,标签3",shareViews:300,shareUserName:"刘娜",shareUserLogo:"./assets/images/user5-small.png",shareCompanyName:"南京旭强信息科技有限公司",shareType:"video"},{shareId:8,shareTitle:"8如何对自己的工作进行排序",shareLitpic:"./assets/images/doc-litpic.png",shareTags:"标签1,标签2,标签3",shareViews:300,shareUserName:"刘娜",shareUserLogo:"./assets/images/user6-small.png",shareCompanyName:"南京旭强信息科技有限公司",shareType:"doc"},{shareId:7,shareTitle:"7如何对自己的工作进行排序",shareLitpic:"./assets/images/video-litpic.png",shareTags:"标签1,标签2,标签3",shareViews:300,shareUserName:"刘娜",shareUserLogo:"./assets/images/user7-small.png",shareCompanyName:"南京旭强信息科技有限公司",shareType:"video"}]};return n.data}this.getCompanyShares=o}a.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companyshares",a)}(),function(){"use strict";function a(){function a(a,e){function s(a){o.companyShares=e.getCompanyShares(a),angular.forEach(o.companyShares,function(a,e){var s=a.shareTitle,o=[],n=a.shareCompanyName;s.length>13?a.shareShotTitle=a.shareTitle.substr(0,13)+"...":a.shareShotTitle=a.shareTitle,n.length>8?a.shareCompanyNameShot=a.shareCompanyName.substr(0,8)+"...":a.shareCompanyNameShot=a.shareCompanyName,o=a.shareTags.split(","),a.shareTagsArr=[],a.shareTagsArr[0]=o[0],a.shareTagsArr[1]=o[1]})}var o=this,n=a.search().companyId;o.companyShares=[],o.shareTags=[],s(n)}a.$inject=["$location","companyshares"];var e={restrict:"E",templateUrl:"app/company/companyShares/company_shares.html",scope:{},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("teambookWww").directive("companyShares",a)}(),function(){"use strict";function a(a,e,s){function o(a){s.apiHost;return{companyId:1,companyName:"南京旭强信息科技有限公司",companyDec:"这里是公司简介",companyLevel:10,companyIsVip:!0,companyTel:"021-999999",companyLogo:"./assets/images/company-logo.png"}}this.getCompanyInfos=o}a.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companyinfos",a)}(),function(){"use strict";function a(){function a(a,e){function s(a){o.companyInfos=e.getCompanyInfos(a)}var o=this,n=a.search().companyId;o.companyInfos=[],s(n),o.isShowCard=!1}a.$inject=["$location","companyinfos"];var e={restrict:"E",templateUrl:"app/company/companyInfo/company_info.html",scope:{},controller:a,controllerAs:"vm",bindToController:!0,replace:!0};return e}angular.module("teambookWww").directive("companyInfo",a)}(),function(){"use strict";function a(a,e,s){function o(a){var e={size:3,info:"goodmembers",data:[{userLogo:"./assets/images/user2.png",userName:"用户一",userZhiwei:"技术部 研发总监",weekShare:6,weekLearn:13},{userLogo:"./assets/images/user4.png",userName:"用户二",userZhiwei:"技术部 研发总监",weekShare:6,weekLearn:13},{userLogo:"./assets/images/user5.png",userName:"用户三",userZhiwei:"技术部 研发总监",weekShare:6,weekLearn:13}]};return e.data}this.getCompanyGoodMembers=o}a.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companygoodmembers",a)}(),function(){"use strict";function a(){function a(a,e){function s(a){o.companyGoodMembers=e.getCompanyGoodMembers(a)}var o=this,n=a.search().companyId;o.companyGoodMembers=[],s(n)}a.$inject=["$location","companygoodmembers"];var e={restrict:"E",templateUrl:"app/company/companyGoodMembers/company_goodmembers.html",scope:{},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("teambookWww").directive("companyGoodMembers",a)}(),function(){"use strict";function a(a,e,s){function o(o){function n(a){return a.data}function t(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}var i=s.apiHost;return a.get(i+"/aip/follows?type=company&id="+o).then(n)["catch"](t)}this.getCompanyFollows=o}a.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companyfollows",a)}(),function(){"use strict";function a(){function a(a,e){function s(a){o.companyFollows=e.getCompanyFollows(a)}var o=this,n=a.search().companyId;o.companyFollows=[],s(n)}a.$inject=["$location","companyfollows"];var e={restrict:"E",templateUrl:"app/company/companyFollows/company_follows.html",scope:{},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("teambookWww").directive("companyFollows",a)}(),function(){"use strict";function a(a,e,s){function o(a){return{follows:40,shares:28,fans:36}}this.getCompanyData=o}a.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companydata",a)}(),function(){"use strict";function a(){function a(a,e){function s(a){o.companyData=e.getCompanyData(a)}var o=this,n=a.search().companyId;o.companyData=[],s(n)}a.$inject=["$location","companydata"];var e={restrict:"E",templateUrl:"app/company/companyData/company_data.html",scope:{},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("teambookWww").directive("companyData",a)}(),function(){"use strict";function a(a,e,s){function o(o){function n(a){return a.data}function t(a){e.error("XHR Failed for getCompanyFans.\n"+angular.toJson(a.data,!0))}var i=s.apiHost;return a.get(i+"/aip/fans?type=company&id="+o).then(n)["catch"](t)}this.getCompanyFans=o}a.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companyfans",a)}(),function(){"use strict";function a(){function a(a,e){function s(a){o.companyFans=e.getCompanyFans(a)}var o=this,n=a.search().companyId;o.companyFans=[],s(n)}a.$inject=["$location","companyfans"];var e={restrict:"E",templateUrl:"app/company/companyFans/company_fans.html",scope:{},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("teambookWww").directive("companyFans",a)}(),function(){"use strict";function a(){function a(a,e){function s(a){o.companyCurVisitors=e.getCompanyCurVisitors(a)}var o=this,n=a.search().companyId;o.companyCurVisitors=[],s(n)}a.$inject=["$location","companycurvisitors"];var e={restrict:"E",templateUrl:"app/company/companyCurVisitors/company_visitors.html",scope:{},controller:a,controllerAs:"vm",bindToController:!0,replace:!0};return e}angular.module("teambookWww").directive("companyCurVisitors",a)}(),function(){"use strict";function a(a,e,s){function o(a){var e={size:6,info:"visitor",data:[{userName:"用户一",visitTime:"3月17日",userLogo:"./assets/images/user2.png"},{userName:"用户二",visitTime:"3月17日",userLogo:"./assets/images/user3.png"},{userName:"用户三",visitTime:"3月17日",userLogo:"./assets/images/user4.png"},{userName:"用户四",visitTime:"3月17日",userLogo:"./assets/images/user5.png"},{userName:"用户五",visitTime:"3月17日",userLogo:"./assets/images/user.png"},{userName:"用户六",visitTime:"3月17日",userLogo:"./assets/images/user1.png"}]};return e.data}this.getCompanyCurVisitors=o}a.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companycurvisitors",a)}(),function(){"use strict";function a(){function a(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=a}angular.module("teambookWww").service("webDevTec",a)}(),function(){"use strict";function a(a,e){function s(a,e){getSign(function(a){})}var o={upload:s};return o}a.$inject=["$http","teambookConfig"],angular.module("teambookWww").service("uploader",a)}(),function(){"use strict";function a(){function a(a){}a.$inject=["uploader"];var e={restrict:"E",templateUrl:"app/components/uploader/uploader.html",scope:{type:"=",single:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("teambookWww").directive("uploader",a)}(),function(){"use strict";function a(a,e,s,o,n,t){function i(){function n(e){return 200==e.data.code?(s.put(f,e.data.data),e.data.data):(o.error("XHR Failed for get Sign.\n"+e.msg),a.reject(e))}function i(e){return o.error("XHR Failed for getSign.\n"+angular.toJson(e.data,!0)),a.reject(e)}var r=s.get(f);if(r&&r.sign)return{then:function(){}};var c=t.apiHost+"/api/qcloud/getSign";return e.get(c).then(n)["catch"](i)}function r(a,e){}function c(a){}function l(a,e){}function m(a,e){}function u(a,e){}function p(a,e){}function d(a,e){}function g(){}function v(e){return i().then(function(a){var s=h(e.name),o=t.cosapi_cgi_url+"/"+a.appId+"/"+a.bucketName+encodeURI(s)+"?sign="+encodeURIComponent(a.sign);return n.upload({url:o,data:{op:"upload",fileContent:e}})})["catch"](function(e){return a.reject(e)})}function h(a){var e=a.split("."),s=e[e.length-1];return(new Date).getTime()+parseInt(1e3*Math.random())+"."+s}var f="qcloud_cos",y={getAppSign:i,updateFolder:r,updateFile:c,deleteFolder:l,deleteFile:m,getFolderStat:u,getFileStat:p,createFolder:d,getFolderList:g,uploadFile:v};return y}a.$inject=["$q","$http","$cookies","$log","Upload","teambookConfig"],angular.module("teambookWww").service("qcloud",a)}(),function(){"use strict";function a(){function a(a,e,s){var o=this;o.$state=e,o.isHide=!0,o.relativeDate=a(o.creationDate).fromNow(),o.search=function(){alert("ok")}}a.$inject=["moment","$state","$scope"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e}angular.module("teambookWww").directive("acmeNavbar",a)}(),function(){"use strict";function a(a){function e(e,s,o,n){var t,i=a(s[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});s.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(a){i.type(a).pause()["delete"]()}),t=e.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(a){i.type(a.login).pause()["delete"]()})}),e.$on("$destroy",function(){t()})}function s(a,e){function s(){return o().then(function(){a.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(a){return n.contributors=a,n.contributors})}var n=this;n.contributors=[],s()}s.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:s,controllerAs:"vm"};return o}a.$inject=["malarkey"],angular.module("teambookWww").directive("acmeMalarkey",a)}(),function(){"use strict";function a(a,e){function s(s){function n(a){return a.data}function t(e){a.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return s||(s=30),e.get(o+"/contributors?per_page="+s).then(n)["catch"](t)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:o,getContributors:s};return n}a.$inject=["$log","$http"],angular.module("teambookWww").factory("githubContributor",a)}(),function(){"use strict";function a(a,e,s){function o(){t(),a(function(){i.classAnimation="rubberBand"},4e3)}function n(){s.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function t(){i.awesomeThings=e.getTec(),angular.forEach(i.awesomeThings,function(a){a.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1458021821394,i.showToastr=n,o()}a.$inject=["$timeout","webDevTec","toastr"],angular.module("teambookWww").controller("MainController",a)}(),function(){"use strict";function a(a,e,s,o){function n(n,t){function i(e){var s=e.data;return a.put(c,s),s}function r(a){return s.reject(a)}var l=o.apiHost+"/admin/user/login";return e.post(l,{userName:n,password:t}).then(i)["catch"](r)}function t(){a.remove(c)}function i(){return a.get(c)}function r(){}var c="user",l={login:n,logout:t,getUser:i,checkAuth:r};return l}a.$inject=["$cookies","$http","$q","teambookConfig"],angular.module("teambookWww").factory("user",a)}(),function(){"use strict";function a(a,e){a.logout(),e.path("/login")}a.$inject=["user","$location"],angular.module("teambookWww").controller("LogoutController",a)}(),function(){"use strict";function a(a,e,s,o,n){function t(){return s.login(l.username,l.password).then(r)["catch"](c)}function i(a){}function r(){"/login"==e.pre&&(e.pre="/home"),e.path(e.pre||"/home")}function c(a){switch(a.status){case 401:o.error("用户名或者密码错误");break;case 403:o.error("没有权限执行该操作");break;default:o.error("系统错误")}}var l=this;a.submit=function(){a.form.file.$valid&&a.file&&a.upload(a.file)},a.upload=function(a){n.uploadFile(a).then(function(a){console.log("Success "+a.config.data.fileContent.name+"uploaded. Response: "+a.data.data)},function(a){console.log("Error status: "+a.status)},function(a){var e=parseInt(100*a.loaded/a.total);console.log("progress: "+e+"% "+a.config.data.fileContent.name)})},l.login=t,l.upload=i}a.$inject=["$scope","$location","user","toastr","qcloud"],angular.module("teambookWww").controller("LoginController",a)}(),function(){"use strict";function a(a,e){function s(){a(function(){n.classAnimation="rubberBand"},4e3)}function o(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),n.classAnimation=""}var n=this;n.classAnimation="",n.creationDate=1458021821396,n.showToastr=o,s()}a.$inject=["$timeout","toastr"],angular.module("teambookWww").controller("CompanyController",a)}(),function(){"use strict";function a(a,e,s,o,n){a.pre=angular.copy(a.path())}a.$inject=["$location","$http","user","teambookConfig","toastr"],angular.module("teambookWww").run(a)}(),function(){"use strict";function a(a,e){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),a.state("company",{url:"/company",templateUrl:"app/company/company.html",controller:"CompanyController",controllerAs:"company"}),a.state("login",{url:"/login",templateUrl:"app/user/login.html",controller:"LoginController",controllerAs:"login"}),a.state("logout",{url:"/logout",controller:"LogoutController",controllerAs:"logout"}),e.otherwise("/")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("teambookWww").config(a)}(),function(){"use strict";angular.module("teambookWww").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function a(a,e,s){a.debugEnabled(!0),e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",e.defaults.transformRequest=function(a){var e=[];for(var s in a)e.push(encodeURIComponent(s)+"="+encodeURIComponent(a[s]));return e.join("&")},s.allowHtml=!0,s.timeOut=1e3,s.positionClass="toast-top-right",s.progressBar=!0}a.$inject=["$logProvider","$httpProvider","toastrConfig"],angular.module("teambookWww").config(a),angular.module("teambookWww").constant("teambookConfig",{apiHost:"http://api.supermary2.com",cosapi_cgi_url:"http://web.file.myqcloud.com/files/v1"})}(),angular.module("teambookWww").run(["$templateCache",function(a){a.put("app/company/company.html",'<div class="container-fluid"><div class="row"><acme-navbar creation-date="company.creationDate"></acme-navbar></div><div class="row"><div class="main"><company-info></company-info></div></div><div class="row"><div class="main"><div class="side-bar"><company-data></company-data><company-cur-visitors></company-cur-visitors><company-good-members></company-good-members></div><div class="content"><company-shares></company-shares></div></div></div></div>'),a.put("app/user/login.html",'<div class="container-fluid tb-body"><div class="row"><div class="main login-box"><div class="header"><span class="header-title">Teambook</span> <span class="header-subtitle">企业知识云</span></div><div class="row login-sub-box"><div class="col-sm-6 col-md-8"><img src="./assets/images/login-ad.jpg" alt=""></div><div class="col-sm-6 col-md-4"><form class="login-form"><h1 class="form-title">登陆</h1><p class="welcome">welcome Teambook</p><div class="form-group"><label for="InputUsername">账户</label> <input type="text" class="form-control" id="InputUsername" ng-model="login.username" placeholder="用户名"></div><div class="form-group"><label for="InputPassword">密码</label> <input type="password" class="form-control" id="InputPassword" ng-model="login.password" placeholder="密码"></div><div class="form-group"><div class="checkbox"><label><input type="checkbox"> 7天自动登陆</label></div><div class="forget-link"><a href="">忘记密码</a></div></div><div class="form-group"><a href="#" class="login-submit-btn" ng-click="login.login()"></a></div></form></div></div></div></div><div class="row"><div class="main"><div class="footer"><h5>XXX公司版权所有</h5></div></div></div></div>'),a.put("app/main/main.html",'<div class="container-fluid"><div class="row"><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="row"><div class="main"><user-info></user-info></div></div></div>'),a.put("app/company/companyCurVisitors/company_visitors.html",'<div class="visitors"><div class="v-title"><h4>最近访客</h4><hr></div><div class="v-list"><ul><li ng-repeat="v in vm.companyCurVisitors"><img class="v-user-logo" src="{{v.userLogo}}" alt=""><h5 class="v-user-name">{{v.userName}}</h5><h6 class="v-visit-time">{{v.visitTime}}</h6></li></ul></div><div class="clear-fix"></div></div>'),a.put("app/company/companyData/company_data.html",'<div class="data"><ul><li><a href="#">{{vm.companyData.follows}}<h4>关注</h4></a></li><li><a href="#">{{vm.companyData.fans}}<h4>粉丝</h4></a></li><li><a href="#">{{vm.companyData.shares}}<h4>分享</h4></a></li></ul><div class="clear-fix"></div></div>'),a.put("app/company/companyGoodMembers/company_goodmembers.html",'<div class="good-member"><div class="gm-title"><h4>分享达人<span><a href="#">更多</a></span></h4><hr></div><div class="gm-list"><ul><li ng-repeat="gm in vm.companyGoodMembers"><div class="gm-info"><img src="{{gm.userLogo}}" alt=""><h5>{{gm.userName}}</h5></div><div class="gm-data"><h6>本周共分享{{gm.weekShare}}条</h6><h6>本周供学习{{gm.weekLearn}}条</h6><h6>职位：{{gm.userZhiwei}}</h6></div></li></ul></div><div class="clear-fix"></div></div>'),a.put("app/company/companyInfo/company_info.html",'<div class="banner"><div class="company-logo-box"><img src="{{vm.companyInfos.companyLogo}}" alt="" class="company-logo" ng-mouseover="isShowCard = !isShowCard"><div class="identity"><img src="assets/images/vip.png" alt="" ng-show="{{vm.companyInfos.companyIsVip}}"> <img src="assets/images/no-vip.png" alt="" ng-show="!{{vm.companyInfos.companyIsVip}}"> <span class="level">Lv.10</span></div></div><div class="company-name"><h4>{{vm.companyInfos.companyName}}</h4></div><div class="company-dec"><p>{{vm.companyInfos.companyDec}}</p></div><div class="tools"><ul><li><a href="javascript:void(0)" ng-click="isShowCard = !isShowCard">企业名片</a></li><li ng-show="isHr"><a href="#">进入后台</a></li></ul></div><div class="card" ng-show="isShowCard" ng-mouseleave="isShowCard = !isShowCard"><div class="company-logo-box"><img src="{{vm.companyInfos.companyLogo}}" alt="" class="company-logo"><div class="identity"><img src="assets/images/vip.png" alt="" ng-show="{{vm.companyInfos.companyIsVip}}"> <img src="assets/images/no-vip.png" alt="" ng-show="!{{vm.companyInfos.companyIsVip}}"> <span class="level">Lv.10</span></div></div><div class="company-name-card"><h4>{{vm.companyInfos.companyName}}</h4></div><div class="company-dec-card"><p>{{vm.companyInfos.companyDec}}</p></div><div class="contact"><div class="row"><div class="col-md-6 weibo"><span><a href="#">关注新浪微博</a></span><img src="./assets/images/weibo.png" alt=""></div><div class="col-md-6 website"><img src="./assets/images/website.png" alt=""><span><a href="http://www.baidu.com/">阿里巴巴集团</a></span></div><div class="col-md-6 weixin"><span><a href="#">关注微信公众账号</a></span><img src="./assets/images/weixin.png" alt=""></div><div class="col-md-6 tel"><img src="./assets/images/tel.png" alt=""><span><a href="tel:{{vm.companyInfos.companyTel}}">{{vm.companyInfos.companyTel}}</a></span></div></div></div></div></div>'),a.put("app/company/companyShares/company_shares.html",'<div class="shares"><div class="s-tabs"><ul><li><a ng-class="{active:isNew == true}" href="javascript:void(0)" ng-click="isNew = true; isHot = false">最新分享</a></li><li><a ng-class="{active:isHot == true}" href="javascript:void(0)" ng-click="isHot = true; isNew = false">热门分享</a></li></ul><div class="clear-fix"></div></div><div class="s-cons"><div class="new-share" ng-show="isNew" ng-init="isNew =true;"><ul><li ng-repeat="shares in vm.companyShares | filter: query | orderBy:\'shareId\'"><div class="litpic"><img src="{{shares.shareLitpic}}" alt=""><div class="play-btn" ng-show="shares.shareType == \'video\'"></div></div><div class="s-title"><h5>{{shares.shareShotTitle}}</h5></div><div class="s-info"><div class="s-tag"><ul><li ng-repeat="tag in shares.shareTagsArr"><img src="./assets/images/tag.png" alt=""><span>{{tag}}</span></li></ul></div><div class="s-views"><img src="./assets/images/views.png" alt=""><span>{{shares.shareViews}}</span></div></div><div class="s-user"><img src="{{shares.shareUserLogo}}" alt=""><span class="s-user-name">{{shares.shareUserName}}</span><span class="s-user-company">{{shares.shareCompanyNameShot}}</span></div></li><div class="clear-fix"></div></ul><div class="clear-fix"></div></div><div class="hot-share" ng-show="isHot" ng-init="isHot = false"><ul><li ng-repeat="shares in vm.companyShares | filter: query | orderBy:\'shareUserName\'"><div class="litpic"><img src="{{shares.shareLitpic}}" alt=""><div class="play-btn" ng-show="shares.shareType == \'video\'"></div></div><div class="s-title"><h5>{{shares.shareShotTitle}}</h5></div><div class="s-info"><div class="s-tag"><ul><li ng-repeat="tag in shares.shareTagsArr"><img src="./assets/images/tag.png" alt=""><span>{{tag}}</span></li></ul></div><div class="s-views"><img src="./assets/images/views.png" alt=""><span>{{shares.shareViews}}</span></div></div><div class="s-user"><img src="{{shares.shareUserLogo}}" alt=""><span class="s-user-name">{{shares.shareUserName}}</span><span class="s-user-company">{{shares.shareCompanyNameShot}}</span></div></li><div class="clear-fix"></div></ul><div class="clear-fix"></div></div><div class="clear-fix"></div></div><div class="clear-fix"></div></div>'),a.put("app/components/uploader/uploader.html",'<div class="inline"><button>上传</button></div>'),a.put("app/components/navbar/navbar.html",'<div class="main"><nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="/"><span><img src="assets/images/logo.png" alt=""></span> Teambook</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ng-class="{active:vm.$state.current.name == \'home\'}"><a ng-href="#/">我的主页</a></li><li ng-class="{active:vm.$state.current.name == \'company\'}"><a ng-href="#/company">我的企业</a></li><li ng-class="{active:vm.$state.current.name == \'college\'}"><a ng-href="#/college">企业大学</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text setting-btn"><li><img src="assets/images/setting.png" alt="" ng-click="vm.isHide = !vm.isHide"></li></ul><ul class="setting-menu" ng-hide="vm.isHide"><li><a href="#">使用帮助</a></li><li><a href="#">退出登录</a></li></ul><div class="search input-group"><form action="#" class="searchForm"><div class="form-inline"><select name="type" id="" class="form-control search-type"><option value="people">找人</option><option value="company">找公司</option><option value="lesson">找资源</option></select><input type="text" placeholder="请输入关键词" class="form-control search-input"> <span class="search-btn" ng-click="vm.search()"><img src="assets/images/search.png" alt=""></span></div></form></div></div></div></nav></div>'),a.put("app/main/userInfo/user_info.html",'<div class="banner"><div class="user-logo-box"><img src="{{vm.userInfos.userLogo}}" alt="" class="user-logo" ng-mouseover="isShowCard = !isShowCard"><div class="identity"><img src="assets/images/vip.png" alt="" ng-show="{{vm.userInfos.userIsVip}}"> <img src="assets/images/no-vip.png" alt="" ng-show="!{{vm.userInfos.userIsVip}}"> <span class="level">Lv.{{vm.userInfos.userLevel}}</span></div></div><div class="user-name"><h4>{{vm.userInfos.userName}}</h4></div><div class="user-dec"><p>{{vm.userInfos.userDec}}</p></div><div class="tools"><ul><li><a href="javascript:void(0)" ng-click="isShowCard = !isShowCard">个人名片</a></li><li><a href="#">编辑资料</a></li></ul></div><div class="card" ng-show="isShowCard" ng-mouseleave="isShowCard = !isShowCard"><div class="user-logo-box"><img src="{{vm.userInfos.userLogo}}" alt="" class="user-logo"><div class="identity"><img src="assets/images/vip.png" alt="" ng-show="{{vm.userInfos.userIsVip}}"> <img src="assets/images/no-vip.png" alt="" ng-show="!{{vm.userInfos.userIsVip}}"> <span class="level">Lv.{{vm.userInfos.userLevel}}</span></div></div><div class="user-name-card"><h4>{{vm.userInfos.userName}}</h4></div><div class="user-dec-card"><p>{{vm.userInfos.userDec}}</p></div><div class="contact"><div class="row"><div class="col-md-6 sex"><span><a href="#">{{vm.userInfos.userSex}}</a></span><img src="./assets/images/nv.png" alt="" ng-show="vm.female"><img src="./assets/images/nan.png" alt="" ng-show="!vm.female"></div><div class="col-md-6 website"><img src="./assets/images/website.png" alt=""><span><a href="#">{{vm.userInfos.userCompany}}</a></span></div><div class="col-md-6 email"><span><a href="#">{{vm.userInfos.userEmail}}</a></span><img src="./assets/images/youjian.png" alt=""></div><div class="col-md-6 zhiwei"><img src="./assets/images/zhiwei.png" alt=""><span><a href="#">{{vm.userInfos.userZhiwei}}</a></span></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-5e100f783b.js.map
