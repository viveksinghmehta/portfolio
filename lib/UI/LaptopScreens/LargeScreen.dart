/**
 * Created with ❤ By Vivek Singh Mehta.
 * Created on 22:21, 10 - January - 2020
 * UI.LaptopScreens
 * vivek_portfolio
 *
 */

import 'package:flutter/material.dart';
import 'package:vivek_portfolio/ResponsiveLogic/Responsive.dart';


class LargeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {


    ResponsiveWidget().init(context);

    return Stack(
      children: <Widget>[
        // Created By Flutter.
        ListView(
          children: <Widget>[
            // Main Content.
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Container(
//              color: Colors.blue,
                  margin: EdgeInsets.fromLTRB(ResponsiveWidget.screenWidth / 5, ResponsiveWidget.screenHeight / 5, ResponsiveWidget.screenHeight / 5, 0),
                  child: Row(
                    children: <Widget>[
                      Text(
                        'Hello',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: ResponsiveWidget.screenHeight / 7,
                            color: Colors.white,
                            fontFamily: 'ProductSans',
                            letterSpacing: 4
                        ),
                      ),
                      Text(
                        '.',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: ResponsiveWidget.screenHeight / 7,
                            color: Colors.deepOrangeAccent,
                            fontFamily: 'ProductSans',
                            letterSpacing: 4
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
//              color: Colors.lightGreen,
                  margin: EdgeInsets.fromLTRB(ResponsiveWidget.screenWidth / 5, 0, 0, 0),
                  child: Text(
                    'I am',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: ResponsiveWidget.screenHeight / 10,
                      color: Colors.white,
                      fontFamily: 'SourceCodePro',
                      letterSpacing: 4,
                    ),
                  ),
                ),
                Container(
                  margin: EdgeInsets.fromLTRB(ResponsiveWidget.screenWidth / 5, 0, ResponsiveWidget.screenWidth / 20, 10),
                  child: Row(
                    children: <Widget>[
                      Text(
                        'Vivek Singh Mehta',
                        style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: ResponsiveWidget.screenHeight / 10,
                            color: Colors.white,
                            fontFamily: 'PTMono',
                            letterSpacing: 4
                        ),
                      ),
                      Text(
                        '.',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: ResponsiveWidget.screenHeight / 15,
                          color: Colors.deepOrangeAccent,
                          fontFamily: 'ProductSans',
                          letterSpacing: 4,
                        ),
                      )
                    ],
                  ),
                ),
                Container(
                  margin: EdgeInsets.fromLTRB(ResponsiveWidget.screenWidth / 5, 0, 0, 0),
                  child: Row(
                    children: <Widget>[
                      Text(
                        'Flutter & iOS Developer.',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 30,
                          color: Colors.deepOrangeAccent,
                          fontFamily: 'PTMono',
                          letterSpacing: 3,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            Container(
//              color: Colors.greenAccent,
              margin: EdgeInsets.fromLTRB(
                  ResponsiveWidget.screenWidth / 5,
                  ResponsiveWidget.screenHeight / 2,
                  ResponsiveWidget.screenWidth / 5,
                  ResponsiveWidget.screenHeight / 2,
              ),
              child: Text(
                'A native iOS Developer, with more than 2 years of experiance in the industry, that is on it\'s way to learn Flutter',
                style: TextStyle(
                  fontFamily: 'PTMono',
                  color: Colors.deepOrangeAccent,
                  fontSize: 30,

                ),
              ),
            )
          ],
        ),
        Padding(
          padding: EdgeInsets.fromLTRB(0, 0, 0, ResponsiveWidget.screenHeight / 40),
          child: Align(
            alignment: Alignment.bottomCenter,
            child: Container(
              padding: EdgeInsets.fromLTRB(
                ResponsiveWidget.screenWidth / 80,
                ResponsiveWidget.screenHeight / 80,
                ResponsiveWidget.screenWidth / 80,
                ResponsiveWidget.screenHeight / 80,
              ),
              decoration: BoxDecoration(
                color: Colors.black,
                borderRadius: BorderRadius.all(
                    Radius.circular(
                      ResponsiveWidget.screenHeight / 40,
                    )
                ),
                border: Border.all(
                  color: Colors.deepOrangeAccent,
                  width: 1.0,
                  style: BorderStyle.solid,
                ),
              ),
              child: Text(
                'Created with ❤ in Flutter',
                style: TextStyle(
                    fontSize: 20,
                    color: Colors.white,
                    fontFamily: 'SourceCodePro'
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
