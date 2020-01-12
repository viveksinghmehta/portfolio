import 'package:flutter/material.dart';
import 'package:vivek_portfolio/UI/LaptopScreens/LargeScreen.dart';
import 'package:vivek_portfolio/UI/PhoneScreen/PhoneScreen.dart';


void main() => runApp(MaterialApp(
  home: Portfolio(),
  debugShowCheckedModeBanner: false,
));

class Portfolio extends StatelessWidget {



  @override
  Widget build(BuildContext context) {

    double totalWidth = MediaQuery.of(context).size.width;


    double returnFontSizeForName() {
      if (totalWidth > 1200) {
        // desktop
        return 80;
      } else if ((totalWidth < 1200) && (totalWidth > 768)) {
        // tablet
        return 50;
      } else if (totalWidth < 768) {
        // phone
        return 30;
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


    Widget returnWidget() {
      if (totalWidth <= 800) {
        // Return true
        return PhoneScreen();
      } else {
        return LargeScreen();
      }
    }



    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: returnWidget()
      ),
    );
  }
}






