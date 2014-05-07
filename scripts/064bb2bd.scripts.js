"use strict";angular.module("prorataApp",["ui.bootstrap","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){b.hashPrefix("!"),a.when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({templateUrl:"views/main.html",controller:"MainCtrl"})}]),angular.module("prorataApp").controller("MainCtrl",["$scope","Calculator",function(a,b){a.calculateExpirationDate=function(){if(a.prorataCalculation.effectiveDate&&a.prorataCalculation.termInMonths){var b=Date.create(a.prorataCalculation.effectiveDate);a.prorataCalculation.expirationDate=b.advance({months:a.prorataCalculation.termInMonths}).format("{yyyy}-{MM}-{dd}")}},a.prorataCalculation={termInMonths:12,factorMethod:"standard"},a.calculateTermInMonths=function(){if(a.prorataCalculation.effectiveDate&&a.prorataCalculation.expirationDate){var b=Date.create(a.prorataCalculation.effectiveDate),c=Date.create(a.prorataCalculation.expirationDate);a.prorataCalculation.termInMonths=c.monthsSince(b)}},a.prorataResult={},a.recalculate=function(){console.log("Recalculate Called...");var c=Date.create(a.prorataCalculation.effectiveDate),d=Date.create(a.prorataCalculation.expirationDate);if(a.prorataCalculation.cancellationDate)var e=Date.create(a.prorataCalculation.cancellationDate);a.prorataResult=b.calculateProRata(c,d,e,a.prorataCalculation.premiumAmount,a.prorataCalculation.factorMethod)}}]),angular.module("prorataApp").factory("Calculator",function(){return{oneDayInMilliSeconds:864e5,daysBetweenDates:function(a,b){return Math.round(Math.abs((b.getTime()-a.getTime())/this.oneDayInMilliSeconds))},isValidDate:function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())},calculateProRata:function(a,b,c,d,e){var f,g,h,i=0;e=e||"standard",this.isValidDate(a)&&this.isValidDate(b)&&(f=this.daysBetweenDates(a,b)),this.isValidDate(a)&&this.isValidDate(b)&&this.isValidDate(c)&&(h=this.daysBetweenDates(a,c),g=f-h,i=parseFloat((g/f).toFixed(3)),"shortRate"===e&&(i=parseFloat(.9*i).toFixed(3)));var j=0,k=0;return d&&(k=(d*i).toFixed(2),j=(d-k).toFixed(2)),{earnedDays:h,unearnedDays:g,totalDays:f,prorataFactor:i,unearnedPremium:k,earnedPremium:j}}}}),angular.module("prorataApp").controller("AboutCtrl",["$scope",function(){}]);