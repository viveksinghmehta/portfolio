/**
 * Created with ❤ By Vivek Singh Mehta.
 * Created on 22:22, 10 - January - 2020
 * UI.PhoneScreen
 * vivek_portfolio
 *
 */ 


import 'package:flutter/material.dart';
import 'package:vivek_portfolio/ResponsiveLogic/Responsive.dart';





class PhoneScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    ResponsiveWidget().init(context);

    return ListView(
      children: <Widget>[
        Container(
          height: ResponsiveWidget.screenHeight,
          width: ResponsiveWidget.screenWidth,
          color: Colors.greenAccent,
          margin: EdgeInsets.fromLTRB(
              ResponsiveWidget.screenWidth / 10,
              ResponsiveWidget.screenHeight / 10,
              ResponsiveWidget.screenWidth / 10,
              ResponsiveWidget.screenHeight / 10
          ),
          child: Row(
            children: <Widget>[

            ],
          ),
        )
      ],
    );
  }
}
