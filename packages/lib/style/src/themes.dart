part of style;

class AppTheme {
  const AppTheme._();

  static void initUiOverlayStyle() {
    SystemChrome.setSystemUIOverlayStyle(
      const SystemUiOverlayStyle(
        statusBarColor: Palette.primaryDarkColor,
        statusBarIconBrightness: Brightness.light,
        systemNavigationBarColor: Colors.black,
        systemNavigationBarIconBrightness: Brightness.light,
      ),
    );
  }

  static ThemeData lightTheme(BuildContext context, [ColorScheme? scheme]) {
    return setThemeData(scheme).copyWith(
      brightness: Brightness.light,
    );
  }

  static ThemeData darkTheme(BuildContext context, [ColorScheme? scheme]) {
    return setThemeData(scheme).copyWith(
      brightness: Brightness.dark,
    );
  }

  static ThemeData get getThemeData => setThemeData();

  static ThemeData setThemeData([ColorScheme? colorScheme]) => ThemeData(
        visualDensity: VisualDensity.adaptivePlatformDensity,
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: CustomButtonStyles.elevated,
        ),
        outlinedButtonTheme: OutlinedButtonThemeData(
          style: CustomButtonStyles.outlined,
        ),
        textButtonTheme: TextButtonThemeData(
          style: CustomButtonStyles.none,
        ),
        colorScheme: colorScheme,
        textTheme: AppTypography.textTheme(colorScheme),
        dividerTheme: const DividerThemeData(
          thickness: 1,
          space: 1,
          color: Palette.primaryColor,
        ),
      );
}
