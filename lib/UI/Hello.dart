/**
 * Created with ❤ By Vivek Singh Mehta.
 * Created on 22:09, 08 - January - 2020
 * UI
 * vivek_portfolio
 *
 */

import 'package:flutter/material.dart';
import 'dart:math' as math;
import 'package:vivek_portfolio/ResponsiveLogic/Responsive.dart';


class HelloWidget extends StatelessWidget {
  const HelloWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {

    double totalWidth = MediaQuery.of(context).size.width;

    double returnFontSizeForHello() {
      if (totalWidth > 1200) {
        // desktop
        return 150;
      } else if ((totalWidth < 1200) && (totalWidth > 768)) {
        // tablet
        return 100;
      } else if (totalWidth < 768) {
        // phone
        return 70;
      } else {
        return 0;
      }
    }


    double returnMarginFromTop() {
      if (totalWidth > 1200) {
        // desktop
        return 300;
      } else if ((totalWidth < 1200) && (totalWidth > 768)) {
        // tablet
        return 150;
      } else if (totalWidth < 768) {
        // phone
        return 50;
      } else {
        return 0;
      }
    }



    double returnMarginFromLeft() {
      if (totalWidth > 1200) {
        // desktop
        return 300;
      } else if ((totalWidth < 1200) && (totalWidth > 768)) {
        // tablet
        return 150;
      } else if (totalWidth < 768) {
        // phone
        return 50;
      } else {
        return 0;
      }
    }


    return Container(
      margin: EdgeInsets.fromLTRB(returnMarginFromLeft(), returnMarginFromTop(), 0, 0),
      child: Row(
        children: <Widget>[
          Text(
            'Hello',
            style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: returnFontSizeForHello(),
                color: Colors.white,
                fontFamily: 'ProductSans',
                letterSpacing: 4
            ),
          ),
          Text(
            '.',
            style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: returnFontSizeForHello(),
                color: Colors.deepOrangeAccent,
                fontFamily: 'ProductSans',
                letterSpacing: 4
            ),
          ),
//          Transform.rotate(
//            angle: -math.pi / 2,
//            child: Text(
//              'I am',
//              style: TextStyle(
//                  fontWeight: FontWeight.bold,
//                  fontSize: 100,
//                  color: Colors.white,
//                  fontFamily: 'ProductSans',
//                  letterSpacing: 4
//              ),
//            ),
//          ),
        ],
      ),
    );
  }
}