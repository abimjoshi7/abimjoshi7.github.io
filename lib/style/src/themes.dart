part of style;

mixin Themes {
  static void initUiOverlayStyle() {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
      statusBarColor: Palette.primaryDarkColor,
      statusBarIconBrightness: Brightness.light,
      systemNavigationBarColor: Colors.black,
      systemNavigationBarIconBrightness: Brightness.light,
    ));
  }

  static ThemeData lightTheme(BuildContext context) {
    return ThemeData.light().copyWith(
      visualDensity: VisualDensity.adaptivePlatformDensity,
      colorScheme: ColorScheme.light(
        primary: Palette.primaryColor,
        secondary: Palette.secondaryColor,
        onSecondary: Palette.secondaryTextColor,
      ),
      textTheme: GoogleFonts.latoTextTheme(
        Theme.of(context).textTheme,
      ),
    );
  }

  static ThemeData darkTheme(BuildContext context) {
    return ThemeData.dark().copyWith(
      visualDensity: VisualDensity.adaptivePlatformDensity,
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          foregroundColor: Palette.mystic,
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          foregroundColor: Palette.mystic,
        ),
      ),
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          foregroundColor: Palette.mystic,
        ),
      ),
      colorScheme: ColorScheme.dark(
        primary: Palette.primaryColor,
        secondary: Palette.secondaryColor,
        onPrimary: Palette.primaryTextColor,
        onSecondary: Palette.secondaryTextColor,
        background: Palette.scaffoldBackgroundColor,
      ),
      textTheme: GoogleFonts.latoTextTheme(
        Theme.of(context).textTheme.copyWith(
              displayLarge: Typography.displayLarge,
              displayMedium: Typography.displayMedium,
              displaySmall: Typography.displaySmall,
              headlineLarge: Typography.headlineLarge,
              headlineMedium: Typography.headlineMedium,
              headlineSmall: Typography.headlineSmall,
              titleLarge: Typography.titleLarge,
              titleMedium: Typography.titleMedium,
              titleSmall: Typography.titleSmall,
              bodyLarge: Typography.bodyLarge,
              bodyMedium: Typography.bodyMedium,
              bodySmall: Typography.bodySmall,
              labelLarge: Typography.labelLarge,
              labelMedium: Typography.labelMedium,
              labelSmall: Typography.labelSmall,
            ),
      ),
    );
  }
}
