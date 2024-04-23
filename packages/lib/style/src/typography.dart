part of style;

class AppTypography {
  AppTypography._();

  static TextTheme textTheme([ColorScheme? colorScheme]) => TextTheme(
        bodyLarge: TextStyle(
          color: Palette.gray800,
          fontSize: 16.fSize,
          fontFamily: 'Manrope',
          fontWeight: FontWeight.w100,
        ),
        bodyMedium: TextStyle(
          color: Palette.gray800,
          fontSize: 14.fSize,
          fontFamily: 'Manrope',
          fontWeight: FontWeight.w100,
        ),
        bodySmall: TextStyle(
          color: Palette.gray800.withOpacity(0.53),
          fontSize: 12.fSize,
          fontFamily: 'Manrope',
          fontWeight: FontWeight.w100,
        ),
        displaySmall: TextStyle(
          color: Palette.gray800,
          fontSize: 36.fSize,
          fontFamily: 'Klasik',
          fontWeight: FontWeight.w400,
        ),
        headlineSmall: TextStyle(
          color: Palette.gray800,
          fontSize: 24.fSize,
          fontFamily: 'Klasik',
          fontWeight: FontWeight.w400,
        ),
        labelLarge: TextStyle(
          color: Palette.gray800.withOpacity(0.53),
          fontSize: 12.fSize,
          fontFamily: 'Manrope',
          fontWeight: FontWeight.w500,
        ),
        labelMedium: TextStyle(
          color: colorScheme?.primary,
          fontSize: 10.fSize,
          fontFamily: 'Manrope',
          fontWeight: FontWeight.w700,
        ),
        titleLarge: TextStyle(
          color: colorScheme?.primary,
          fontSize: 20.fSize,
          fontFamily: 'Manrope',
          fontWeight: FontWeight.w700,
        ),
        titleMedium: TextStyle(
          color: Palette.gray800,
          fontSize: 16.fSize,
          fontFamily: 'Manrope',
          fontWeight: FontWeight.w500,
        ),
        titleSmall: TextStyle(
          color: Palette.gray800,
          fontSize: 14.fSize,
          fontFamily: 'Manrope',
          fontWeight: FontWeight.w700,
        ),
      );

  // Display Styles
  // static const displayLarge = TextStyle(
  //   fontSize: 24,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // static const displayMedium = TextStyle(
  //   fontSize: 20,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // static const displaySmall = TextStyle(
  //   fontSize: 16,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // // Headline Styles
  // static const headlineLarge = TextStyle(
  //   fontSize: 24,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // static const headlineMedium = TextStyle(
  //   fontSize: 20,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // static const headlineSmall = TextStyle(
  //   fontSize: 16,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // // Title Styles
  // static const titleLarge = TextStyle(
  //   fontSize: 24,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // static const titleMedium = TextStyle(
  //   fontSize: 20,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // static const titleSmall = TextStyle(
  //   fontSize: 16,
  //   fontWeight: FontWeight.bold,
  //   color: Palette.mystic,
  // );
  //
  // // Body Styles
  // static const bodyLarge = TextStyle(
  //   fontSize: 16,
  //   color: Palette.mystic,
  // );
  //
  // static const bodyMedium = TextStyle(
  //   fontSize: 14,
  //   color: Palette.mystic,
  // );
  //
  // static const bodySmall = TextStyle(
  //   fontSize: 12,
  //   color: Palette.mystic,
  // );
  //
  // // Label Styles
  // static const labelLarge = TextStyle(
  //   fontSize: 16,
  //   color: Palette.mystic,
  // );
  //
  // static const labelMedium = TextStyle(
  //   fontSize: 14,
  //   color: Palette.mystic,
  // );
  //
  // static const labelSmall = TextStyle(
  //   fontSize: 12,
  //   color: Palette.mystic,
  // );

  // GoogleFonts.latoTextTheme(
  //   Theme.of(context).textTheme.copyWith(
  //         displayLarge: AppTypography.displayLarge,
  //         displayMedium: AppTypography.displayMedium,
  //         displaySmall: AppTypography.displaySmall,
  //         headlineLarge: AppTypography.headlineLarge,
  //         headlineMedium: AppTypography.headlineMedium,
  //         headlineSmall: AppTypography.headlineSmall,
  //         titleLarge: AppTypography.titleLarge,
  //         titleMedium: AppTypography.titleMedium,
  //         titleSmall: AppTypography.titleSmall,
  //         bodyLarge: AppTypography.bodyLarge,
  //         bodyMedium: AppTypography.bodyMedium,
  //         bodySmall: AppTypography.bodySmall,
  //         labelLarge: AppTypography.labelLarge,
  //         labelMedium: AppTypography.labelMedium,
  //         labelSmall: AppTypography.labelSmall,
  //       ),
  // ),
}
