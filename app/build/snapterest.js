(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var listOfItems = React.createElement(
                    "ul",
                    { className: "list-of-items" },
                    React.createElement(
                                        "li",
                                        { className: "item-1" },
                                        "Item 1"
                    ),
                    React.createElement(
                                        "li",
                                        { className: "item-2" },
                                        "Item 2"
                    ),
                    React.createElement(
                                        "li",
                                        { className: "item-3" },
                                        "Item 3"
                    )
);

ReactDOM.render(listOfItems, document.getElementById('react-application'));

},{}]},{},[1]);
