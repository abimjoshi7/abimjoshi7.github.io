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
            offset: const Offset(
              0,
              8,
            ),
          ),
        ],
        gradient: LinearGradient(
          begin: const Alignment(0.5, 1),
          end: const Alignment(0.5, 0),
          colors: [
            Palette.secondaryColor.withOpacity(0.25),
            Palette.scaffoldBackgroundColor.withOpacity(0.25),
          ],
        ),
      );

  // Elevated button style
  static ButtonStyle get elevated => ElevatedButton.styleFrom(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(4),
          side: const BorderSide(
            color: Palette.mystic,
          ),
        ),
      );
  // Outline button style
  static ButtonStyle get outlined => OutlinedButton.styleFrom(
        side: const BorderSide(color: Palette.bittersweet),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(4),
        ),
      );
  // text button style
  static ButtonStyle get none => ButtonStyle(
        backgroundColor: MaterialStateProperty.all<Color>(Colors.transparent),
        foregroundColor: MaterialStateProperty.all<Color>(Palette.zaffre),
        elevation: MaterialStateProperty.all<double>(0),
      );
}
