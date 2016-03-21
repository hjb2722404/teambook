!function(){"use strict";angular.module("teambookWww",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngFileUpload","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function o(o,n,a){function t(o){a.apiHost;return{userId:1,userName:"小雅",userDec:"一段话介绍一下自己吧",userLevel:6,userIsVip:!0,userZhiwei:"设计部 UI设计师",userLogo:"./assets/images/user-logo.png",userCompany:"南京旭强信息有限科技公司",userEmail:"123@123.com",userSex:"女"}}this.getUserInfos=t}o.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("userinfos",o)}(),function(){"use strict";function o(){function o(o,n){function a(o){t.userInfos=n.getUserInfos(o),"女"==t.userInfos.userSex&&(t.female=!0)}var t=this,e=o.search().userId;t.female=!1,t.userInfos=[],a(e),t.isShowCard=!1}o.$inject=["$location","userinfos"];var n={restrict:"E",templateUrl:"app/main/userInfo/user_info.html",scope:{},controller:o,controllerAs:"vm",bindToController:!0,replace:!0};return n}angular.module("teambookWww").directive("userInfo",o)}(),function(){"use strict";function o(o,n,a){function t(t,e,s,r){function i(o){return o.data}function c(o){n.error("XHR Failed for getContributors.\n"+angular.toJson(o.data,!0))}s||(s=8),e||(e=1),r||(r="lasttime,asc");var l=a.apiHost;return o.get(l+"/aip/shares?type=company&id="+t+"&page="+e+"&size="+s+"&sort="+r).then(i)["catch"](c)}this.getCompanyShares=t}o.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companyshares",o)}(),function(){"use strict";function o(){function o(o,n){function a(o){t.companyShares=n.getCompanyShares(o),angular.forEach(t.companyShares,function(o){o.rank=Math.random()})}var t=this,e=o.search().companyId;t.companyShares=[],a(e)}o.$inject=["$location","companyshares"];var n={restrict:"E",templateUrl:"app/company/companyShares/company_shares.html",scope:{},controller:o,controllerAs:"vm",bindToController:!0};return n}angular.module("teambookWww").directive("companyShares",o)}(),function(){"use strict";function o(o,n,a){function t(o){a.apiHost;return{companyId:1,companyName:"南京旭强信息科技有限公司",companyDec:"这里是公司简介",companyLevel:10,companyIsVip:!0,companyTel:"021-999999",companyLogo:"./assets/images/company-logo.png"}}this.getCompanyInfos=t}o.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companyinfos",o)}(),function(){"use strict";function o(){function o(o,n){function a(o){t.companyInfos=n.getCompanyInfos(o)}var t=this,e=o.search().companyId;t.companyInfos=[],a(e),t.isShowCard=!1}o.$inject=["$location","companyinfos"];var n={restrict:"E",templateUrl:"app/company/companyInfo/company_info.html",scope:{},controller:o,controllerAs:"vm",bindToController:!0,replace:!0};return n}angular.module("teambookWww").directive("companyInfo",o)}(),function(){"use strict";function o(o,n,a){function t(t){function e(o){return o.data}function s(o){n.error("XHR Failed for getCompanyGoodMembers.\n"+angular.toJson(o.data,!0))}var r=a.apiHost;return o.get(r+"/aip/members?id="+t+"&sort=level").then(e)["catch"](s)}this.getCompanyGoodMembers=t}o.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companygoodmembers",o)}(),function(){"use strict";function o(){function o(o,n){function a(o){t.companyGoodMembers=n.getCompanyGoodMembers(o)}var t=this,e=o.search().companyId;t.companyGoodMembers=[],a(e)}o.$inject=["$location","companygoodmembers"];var n={restrict:"E",templateUrl:"app/company/companyGoodMembers/company_goodmembers.html",scope:{},controller:o,controllerAs:"vm",bindToController:!0};return n}angular.module("teambookWww").directive("companyGoodMembers",o)}(),function(){"use strict";function o(o,n,a){function t(t){function e(o){return o.data}function s(o){n.error("XHR Failed for getContributors.\n"+angular.toJson(o.data,!0))}var r=a.apiHost;return o.get(r+"/aip/follows?type=company&id="+t).then(e)["catch"](s)}this.getCompanyFollows=t}o.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companyfollows",o)}(),function(){"use strict";function o(){function o(o,n){function a(o){t.companyFollows=n.getCompanyFollows(o)}var t=this,e=o.search().companyId;t.companyFollows=[],a(e)}o.$inject=["$location","companyfollows"];var n={restrict:"E",templateUrl:"app/company/companyFollows/company_follows.html",scope:{},controller:o,controllerAs:"vm",bindToController:!0};return n}angular.module("teambookWww").directive("companyFollows",o)}(),function(){"use strict";function o(o,n,a){function t(t){function e(o){return o.data}function s(o){n.error("XHR Failed for getCompanyFans.\n"+angular.toJson(o.data,!0))}var r=a.apiHost;return o.get(r+"/aip/fans?type=company&id="+t).then(e)["catch"](s)}this.getCompanyFans=t}o.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companyfans",o)}(),function(){"use strict";function o(){function o(o,n){function a(o){t.companyFans=n.getCompanyFans(o)}var t=this,e=o.search().companyId;t.companyFans=[],a(e)}o.$inject=["$location","companyfans"];var n={restrict:"E",templateUrl:"app/company/companyFans/company_fans.html",scope:{},controller:o,controllerAs:"vm",bindToController:!0};return n}angular.module("teambookWww").directive("companyFans",o)}(),function(){"use strict";function o(){function o(o,n){function a(o){t.companyCurVistors=n.getCompanyCurVistors(o)}var t=this,e=o.search().companyId;t.companyCurVistors=[],a(e)}o.$inject=["$location","companycurvistors"];var n={restrict:"E",templateUrl:"app/company/companyCurVisitors/company_visitors.html",scope:{},controller:o,controllerAs:"vm",bindToController:!0,replace:!0};return n}angular.module("teambookWww").directive("companyCurVisitors",o)}(),function(){"use strict";function o(o,n,a){function t(t){function e(o){return o.data}function s(o){n.error("XHR Failed for getCompanyCurVistors.\n"+angular.toJson(o.data,!0))}var r=a.apiHost;return o.get(r+"/aip/Vistors?type=company&id="+t).then(e)["catch"](s)}this.getCompanyCurVistors=t}o.$inject=["$http","$log","teambookConfig"],angular.module("teambookWww").service("companycurvistors",o)}(),function(){"use strict";function o(){function o(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=o}angular.module("teambookWww").service("webDevTec",o)}(),function(){"use strict";function o(o,n){function a(o,n){getSign(function(o){})}var t={upload:a};return t}o.$inject=["$http","teambookConfig"],angular.module("teambookWww").service("uploader",o)}(),function(){"use strict";function o(){function o(o){}o.$inject=["uploader"];var n={restrict:"E",templateUrl:"app/components/uploader/uploader.html",scope:{type:"=",single:"="},controller:o,controllerAs:"vm",bindToController:!0};return n}angular.module("teambookWww").directive("uploader",o)}(),function(){"use strict";function o(o,n,a,t,e,s){function r(){function e(n){return 200==n.data.code?(a.put(h,n.data.data),n.data.data):(t.error("XHR Failed for get Sign.\n"+n.msg),o.reject(n))}function r(n){return t.error("XHR Failed for getSign.\n"+angular.toJson(n.data,!0)),o.reject(n)}var i=a.get(h);if(i&&i.sign)return{then:function(){}};var c=s.apiHost+"/api/qcloud/getSign";return n.get(c).then(e)["catch"](r)}function i(o,n){}function c(o){}function l(o,n){}function u(o,n){}function m(o,n){}function p(o,n){}function d(o,n){}function g(){}function f(n){return r().then(function(o){var a=v(n.name),t=s.cosapi_cgi_url+"/"+o.appId+"/"+o.bucketName+encodeURI(a)+"?sign="+encodeURIComponent(o.sign);return e.upload({url:t,data:{op:"upload",fileContent:n}})})["catch"](function(n){return o.reject(n)})}function v(o){var n=o.split("."),a=n[n.length-1];return(new Date).getTime()+parseInt(1e3*Math.random())+"."+a}var h="qcloud_cos",b={getAppSign:r,updateFolder:i,updateFile:c,deleteFolder:l,deleteFile:u,getFolderStat:m,getFileStat:p,createFolder:d,getFolderList:g,uploadFile:f};return b}o.$inject=["$q","$http","$cookies","$log","Upload","teambookConfig"],angular.module("teambookWww").service("qcloud",o)}(),function(){"use strict";function o(){function o(o,n,a){var t=this;t.$state=n,t.isHide=!0,t.relativeDate=o(t.creationDate).fromNow(),t.search=function(){alert("ok")}}o.$inject=["moment","$state","$scope"];var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:o,controllerAs:"vm",bindToController:!0};return n}angular.module("teambookWww").directive("acmeNavbar",o)}(),function(){"use strict";function o(o){function n(n,a,t,e){var s,r=o(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(o){r.type(o).pause()["delete"]()}),s=n.$watch("vm.contributors",function(){angular.forEach(e.contributors,function(o){r.type(o.login).pause()["delete"]()})}),n.$on("$destroy",function(){s()})}function a(o,n){function a(){return t().then(function(){o.info("Activated Contributors View")})}function t(){return n.getContributors(10).then(function(o){return e.contributors=o,e.contributors})}var e=this;e.contributors=[],a()}a.$inject=["$log","githubContributor"];var t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:a,controllerAs:"vm"};return t}o.$inject=["malarkey"],angular.module("teambookWww").directive("acmeMalarkey",o)}(),function(){"use strict";function o(o,n){function a(a){function e(o){return o.data}function s(n){o.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return a||(a=30),n.get(t+"/contributors?per_page="+a).then(e)["catch"](s)}var t="https://api.github.com/repos/Swiip/generator-gulp-angular",e={apiHost:t,getContributors:a};return e}o.$inject=["$log","$http"],angular.module("teambookWww").factory("githubContributor",o)}(),function(){"use strict";function o(o,n,a,t){function e(e,s){function r(n){var a=n.data;return o.put(c,a),a}function i(o){return a.reject(o)}var l=t.apiHost+"/admin/user/login";return n.post(l,{userName:e,password:s}).then(r)["catch"](i)}function s(){o.remove(c)}function r(){return o.get(c)}function i(){}var c="user",l={login:e,logout:s,getUser:r,checkAuth:i};return l}o.$inject=["$cookies","$http","$q","teambookConfig"],angular.module("teambookWww").factory("user",o)}(),function(){"use strict";function o(o,n){o.logout(),n.path("/login")}o.$inject=["user","$location"],angular.module("teambookWww").controller("LogoutController",o)}(),function(){"use strict";function o(o,n,a,t,e){function s(){return a.login(l.username,l.password).then(i)["catch"](c)}function r(o){}function i(){"/login"==n.pre&&(n.pre="/home"),n.path(n.pre||"/home")}function c(o){switch(o.status){case 401:t.error("用户名或者密码错误");break;case 403:t.error("没有权限执行该操作");break;default:t.error("系统错误")}}var l=this;o.submit=function(){o.form.file.$valid&&o.file&&o.upload(o.file)},o.upload=function(o){e.uploadFile(o).then(function(o){console.log("Success "+o.config.data.fileContent.name+"uploaded. Response: "+o.data.data)},function(o){console.log("Error status: "+o.status)},function(o){var n=parseInt(100*o.loaded/o.total);console.log("progress: "+n+"% "+o.config.data.fileContent.name)})},l.login=s,l.upload=r}o.$inject=["$scope","$location","user","toastr","qcloud"],angular.module("teambookWww").controller("LoginController",o)}(),function(){"use strict";function o(o,n,a){function t(){s(),o(function(){r.classAnimation="rubberBand"},4e3)}function e(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function s(){r.awesomeThings=n.getTec(),angular.forEach(r.awesomeThings,function(o){o.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1458021821394,r.showToastr=e,t()}o.$inject=["$timeout","webDevTec","toastr"],angular.module("teambookWww").controller("MainController",o)}(),function(){"use strict";function o(o,n){function a(){o(function(){e.classAnimation="rubberBand"},4e3)}function t(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),e.classAnimation=""}var e=this;e.classAnimation="",e.creationDate=1458021821396,e.showToastr=t,a()}o.$inject=["$timeout","toastr"],angular.module("teambookWww").controller("CompanyController",o)}(),function(){"use strict";function o(o,n,a,t,e){o.pre=angular.copy(o.path()),angular.isUndefined(a.getUser())&&o.path("/login")}o.$inject=["$location","$http","user","teambookConfig","toastr"],angular.module("teambookWww").run(o)}(),function(){"use strict";function o(o,n){o.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),o.state("company",{url:"/company",templateUrl:"app/company/company.html",controller:"CompanyController",controllerAs:"company"}),o.state("login",{url:"/login",templateUrl:"app/user/login.html",controller:"LoginController",controllerAs:"login"}),o.state("logout",{url:"/logout",controller:"LogoutController",controllerAs:"logout"}),n.otherwise("/")}o.$inject=["$stateProvider","$urlRouterProvider"],angular.module("teambookWww").config(o)}(),function(){"use strict";angular.module("teambookWww").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function o(o,n,a){o.debugEnabled(!0),n.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",n.defaults.transformRequest=function(o){var n=[];for(var a in o)n.push(encodeURIComponent(a)+"="+encodeURIComponent(o[a]));return n.join("&")},a.allowHtml=!0,a.timeOut=1e3,a.positionClass="toast-top-right",a.progressBar=!0}o.$inject=["$logProvider","$httpProvider","toastrConfig"],angular.module("teambookWww").config(o),angular.module("teambookWww").constant("teambookConfig",{apiHost:"http://api.supermary2.com",cosapi_cgi_url:"http://web.file.myqcloud.com/files/v1"})}(),angular.module("teambookWww").run(["$templateCache",function(o){o.put("app/company/company.html",'<div class="container-fluid"><div class="row"><acme-navbar creation-date="company.creationDate"></acme-navbar></div><div class="row"><div class="main"><company-info></company-info></div></div></div>'),o.put("app/user/login.html",'<div class="container-fluid tb-body"><div class="row"><div class="main login-box"><div class="header"><span class="header-title">Teambook</span> <span class="header-subtitle">企业知识云</span></div><div class="row login-sub-box"><div class="col-sm-6 col-md-8"><img src="./assets/images/login-ad.jpg" alt=""></div><div class="col-sm-6 col-md-4"><form class="login-form"><h1 class="form-title">登陆</h1><p class="welcome">welcome Teambook</p><div class="form-group"><label for="InputUsername">账户</label> <input type="text" class="form-control" id="InputUsername" ng-model="login.username" placeholder="用户名"></div><div class="form-group"><label for="InputPassword">密码</label> <input type="password" class="form-control" id="InputPassword" ng-model="login.password" placeholder="密码"></div><div class="form-group"><div class="checkbox"><label><input type="checkbox"> 7天自动登陆</label></div><div class="forget-link"><a href="">忘记密码</a></div></div><div class="form-group"><a href="#" class="login-submit-btn" ng-click="login.login()"></a></div></form></div></div></div></div><div class="row"><div class="main"><div class="footer"><h5>XXX公司版权所有</h5></div></div></div></div>'),o.put("app/main/main.html",'<div class="container-fluid"><div class="row"><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="row"><div class="main"><user-info></user-info></div></div></div>'),o.put("app/company/companyInfo/company_info.html",'<div class="banner"><div class="company-logo-box"><img src="{{vm.companyInfos.companyLogo}}" alt="" class="company-logo" ng-mouseover="isShowCard = !isShowCard"><div class="identity"><img src="assets/images/vip.png" alt="" ng-show="{{vm.companyInfos.companyIsVip}}"> <img src="assets/images/no-vip.png" alt="" ng-show="!{{vm.companyInfos.companyIsVip}}"> <span class="level">Lv.10</span></div></div><div class="company-name"><h4>{{vm.companyInfos.companyName}}</h4></div><div class="company-dec"><p>{{vm.companyInfos.companyDec}}</p></div><div class="tools"><ul><li><a href="javascript:void(0)" ng-click="isShowCard = !isShowCard">企业名片</a></li><li ng-show="isHr"><a href="#">进入后台</a></li></ul></div><div class="card" ng-show="isShowCard" ng-mouseleave="isShowCard = !isShowCard"><div class="company-logo-box"><img src="{{vm.companyInfos.companyLogo}}" alt="" class="company-logo"><div class="identity"><img src="assets/images/vip.png" alt="" ng-show="{{vm.companyInfos.companyIsVip}}"> <img src="assets/images/no-vip.png" alt="" ng-show="!{{vm.companyInfos.companyIsVip}}"> <span class="level">Lv.10</span></div></div><div class="company-name-card"><h4>{{vm.companyInfos.companyName}}</h4></div><div class="company-dec-card"><p>{{vm.companyInfos.companyDec}}</p></div><div class="contact"><div class="row"><div class="col-md-6 weibo"><span><a href="#">关注新浪微博</a></span><img src="./assets/images/weibo.png" alt=""></div><div class="col-md-6 website"><img src="./assets/images/website.png" alt=""><span><a href="http://www.baidu.com/">阿里巴巴集团</a></span></div><div class="col-md-6 weixin"><span><a href="#">关注微信公众账号</a></span><img src="./assets/images/weixin.png" alt=""></div><div class="col-md-6 tel"><img src="./assets/images/tel.png" alt=""><span><a href="tel:{{vm.companyInfos.companyTel}}">{{vm.companyInfos.companyTel}}</a></span></div></div></div></div></div>'),o.put("app/components/navbar/navbar.html",'<div class="main"><nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="/"><span><img src="assets/images/logo.png" alt=""></span> Teambook</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li ng-class="{active:vm.$state.current.name == \'home\'}"><a ng-href="#/">我的主页</a></li><li ng-class="{active:vm.$state.current.name == \'company\'}"><a ng-href="#/company">我的企业</a></li><li ng-class="{active:vm.$state.current.name == \'college\'}"><a ng-href="#/college">企业大学</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text setting-btn"><li><img src="assets/images/setting.png" alt="" ng-click="vm.isHide = !vm.isHide"></li></ul><ul class="setting-menu" ng-hide="vm.isHide"><li><a href="#">使用帮助</a></li><li><a href="#">退出登录</a></li></ul><div class="search input-group"><form action="#" class="searchForm"><div class="form-inline"><select name="type" id="" class="form-control search-type"><option value="people">找人</option><option value="company">找公司</option><option value="lesson">找资源</option></select><input type="text" placeholder="请输入关键词" class="form-control search-input"> <span class="search-btn" ng-click="vm.search()"><img src="assets/images/search.png" alt=""></span></div></form></div></div></div></nav></div>'),o.put("app/components/uploader/uploader.html",'<div class="inline"><button>上传</button></div>'),o.put("app/main/userInfo/user_info.html",'<div class="banner"><div class="user-logo-box"><img src="{{vm.userInfos.userLogo}}" alt="" class="user-logo" ng-mouseover="isShowCard = !isShowCard"><div class="identity"><img src="assets/images/vip.png" alt="" ng-show="{{vm.userInfos.userIsVip}}"> <img src="assets/images/no-vip.png" alt="" ng-show="!{{vm.userInfos.userIsVip}}"> <span class="level">Lv.{{vm.userInfos.userLevel}}</span></div></div><div class="user-name"><h4>{{vm.userInfos.userName}}</h4></div><div class="user-dec"><p>{{vm.userInfos.userDec}}</p></div><div class="tools"><ul><li><a href="javascript:void(0)" ng-click="isShowCard = !isShowCard">个人名片</a></li><li><a href="#">编辑资料</a></li></ul></div><div class="card" ng-show="isShowCard" ng-mouseleave="isShowCard = !isShowCard"><div class="user-logo-box"><img src="{{vm.userInfos.userLogo}}" alt="" class="user-logo"><div class="identity"><img src="assets/images/vip.png" alt="" ng-show="{{vm.userInfos.userIsVip}}"> <img src="assets/images/no-vip.png" alt="" ng-show="!{{vm.userInfos.userIsVip}}"> <span class="level">Lv.{{vm.userInfos.userLevel}}</span></div></div><div class="user-name-card"><h4>{{vm.userInfos.userName}}</h4></div><div class="user-dec-card"><p>{{vm.userInfos.userDec}}</p></div><div class="contact"><div class="row"><div class="col-md-6 sex"><span><a href="#">{{vm.userInfos.userSex}}</a></span><img src="./assets/images/nv.png" alt="" ng-show="vm.female"><img src="./assets/images/nan.png" alt="" ng-show="!vm.female"></div><div class="col-md-6 website"><img src="./assets/images/website.png" alt=""><span><a href="#">{{vm.userInfos.userCompany}}</a></span></div><div class="col-md-6 email"><span><a href="#">{{vm.userInfos.userEmail}}</a></span><img src="./assets/images/youjian.png" alt=""></div><div class="col-md-6 zhiwei"><img src="./assets/images/zhiwei.png" alt=""><span><a href="#">{{vm.userInfos.userZhiwei}}</a></span></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-58cf99e08d.js.map
