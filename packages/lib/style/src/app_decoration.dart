part of style;

class AppDecoration {
  // Fill decorations
  static BoxDecoration get fillGray => const BoxDecoration(
        color: Palette.gray800,
      );
  static BoxDecoration get fillOnPrimaryContainer => BoxDecoration(
        color: AppTheme.getThemeData.colorScheme.onPrimaryContainer,
      );
  static BoxDecoration get fillOrange => const BoxDecoration(
        color: Palette.orange5002,
      );
  static BoxDecoration get fillPrimary => BoxDecoration(
        color: AppTheme.getThemeData.colorScheme.primary,
      );
// Outline decorations
  static BoxDecoration get outlineGray => BoxDecoration(
        border: Border.all(
          color: Palette.gray800,
          width: 3.h,
        ),
      );
  static BoxDecoration get outlineOrange => BoxDecoration(
        color: AppTheme.getThemeData.colorScheme.onPrimaryContainer,
        boxShadow: [
          BoxShadow(
            color: Palette.orange50,
            spreadRadius: 2.h,
            blurRadius: 2.h,
            offset: const Offset(
              0,
              8,
            ),
          )
        ],
      );
  static BoxDecoration get outlinePrimary => BoxDecoration(
        border: Border.all(
          color: AppTheme.getThemeData.colorScheme.primary,
          width: 3.h,
        ),
      );
}

class BorderRadiusStyle {
  // Circle borders
  static BorderRadius get circleBorder15 => BorderRadius.circular(
        15.h,
      );
  static BorderRadius get circleBorder21 => BorderRadius.circular(
        21.h,
      );
  static BorderRadius get circleBorder30 => BorderRadius.circular(
        30.h,
      );
  static BorderRadius get circleBorder35 => BorderRadius.circular(
        35.h,
      );
// Custom borders
  static BorderRadius get customBorderTL12 => BorderRadius.vertical(
        top: Radius.circular(12.h),
      );
// Rounded borders
  static BorderRadius get roundedBorder12 => BorderRadius.circular(
        12.h,
      );
}
