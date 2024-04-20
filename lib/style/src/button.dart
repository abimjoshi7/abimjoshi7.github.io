part of style;

/// A class that offers pre-defined button styles for customizing button appearance.
class CustomButtonStyles {
  const CustomButtonStyles._();
  // Gradient button style
  static BoxDecoration get gradientSecondaryContainerToBlackDecoration =>
      BoxDecoration(
        borderRadius: BorderRadius.circular(24.h),
        boxShadow: [
          BoxShadow(
            // color: appTheme.black900.withOpacity(0.5),
            spreadRadius: 2.h,
            blurRadius: 2.h,
            offset: Offset(
              0,
              8,
            ),
          ),
        ],
        gradient: LinearGradient(
          begin: Alignment(0.5, 1),
          end: Alignment(0.5, 0),
          colors: [
            Palette.secondaryColor.withOpacity(0.25),
            Palette.scaffoldBackgroundColor.withOpacity(0.25),
          ],
        ),
      );

  // Outline button style
  static ButtonStyle get outline => OutlinedButton.styleFrom(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24.h),
        ),
      );
  static ButtonStyle get outlineTL16 => OutlinedButton.styleFrom(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16.h),
        ),
      );
  static ButtonStyle get outlineTL24 => OutlinedButton.styleFrom(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24.h),
        ),
      );
  // text button style
  static ButtonStyle get none => ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(Colors.transparent),
        elevation: MaterialStateProperty.all<double>(0),
      );
}
