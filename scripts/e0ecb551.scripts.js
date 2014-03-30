"use strict";angular.module("prorataApp",[]),angular.module("prorataApp").controller("MainCtrl",["$scope","Calculator",function(a,b){a.prorataCalculation={termInMonths:12,factorMethod:"standard"},a.prorataResult={},a.recalculate=function(){console.log("Recalculate Called...");var c=Date.create(this.prorataCalculation.effectiveDate),d=Date.create(this.prorataCalculation.expirationDate),e=Date.create(this.prorataCalculation.cancellationDate);a.prorataResult=b.calculateProRata(c,d,e,this.prorataCalculation.premiumAmount)}}]),angular.module("prorataApp").factory("Calculator",function(){return{oneDayInMilliSeconds:864e5,daysBetweenDates:function(a,b){return Math.round(Math.abs((b.getTime()-a.getTime())/this.oneDayInMilliSeconds))},isValidDate:function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())},calculateProRata:function(a,b,c,d){var e,f,g,h=0;this.isValidDate(a)&&this.isValidDate(b)&&(e=this.daysBetweenDates(a,b)),this.isValidDate(a)&&this.isValidDate(b)&&this.isValidDate(c)&&(g=this.daysBetweenDates(a,c),f=e-g,h=parseFloat((f/e).toFixed(3)));var i=0,j=0;return d&&(j=(d*h).toFixed(2),i=(d-j).toFixed(2)),{earnedDays:g,unearnedDays:f,totalDays:e,prorataFactor:h,unearnedPremium:j,earnedPremium:i}}}});