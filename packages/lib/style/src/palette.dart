part of style;

class Palette {
  const Palette._();

  static const primaryColor = Color(0xffD7CF07);
  static const primaryDarkColor = Color(0xffd3cb00);
  static const primaryLightColor = Color(0xfff0e830);
  static const secondaryColor = Color(0xff893168);
  static const secondaryDarkColor = Color(0xff5e0944);
  static const secondaryLightColor = Color(0xff983d74);
  static const scaffoldBackgroundColor = Color(0xff141414);
  static const scaffoldDarkBackgroundColor = Color(0xff131200);
  static const scaffoldLightBackgroundColor = Color(0xff272932);
  static const scaffoldLightBackgroundColor2 = Color(0xff1a1f16);
  static const zaffre = Color(0xff3626a7);
  static const cyan = Color(0xff61e8e1);
  static const bittersweet = Color(0xfff25757);
  static const mystic = Color(0xffdfe3ee);
  static const imperialRed = Color(0xfff8333c);
  static const seaGreen = Color(0xff008148);
  static const grey = Colors.grey;
  // Black
  static const black900 = Color(0xff000000);
// BlueGray
  static const blueGray400 = Color(0xff888888);
// DeepOrange
  static const deepOrange100 = Color(0xffFFD2AF);
  static const deepOrange50 = Color(0xffFAE9DB);
// Gray
  static const gray800 = Color(0xff573353);
// Orange
  static const orange100 = Color(0xffFFDEC1);
  static const orange50 = Color(0xffFBEADB);
  static const orange5001 = Color(0xffFFF3E9);
  static const orange5002 = Color(0xffFFF3E8);
  static const orangeA20001 = Color(0xffFC9D45);
// Red
  static const red400 = Color(0xffF65B4E);

  static const lightColorScheme = ColorScheme.light(
    primary: primaryLightColor,
    onPrimary: cyan,
    onPrimaryContainer: mystic,
    onSecondaryContainer: secondaryLightColor,
  );

  static const darkColorScheme = ColorScheme.dark(
    primary: primaryDarkColor,
    onPrimary: zaffre,
    onPrimaryContainer: scaffoldBackgroundColor,
    onSecondaryContainer: secondaryDarkColor,
  );
}
