part of style;

/// A collection of pre-defined text styles for customizing text appearance,
/// categorized by different font families and weights.
/// Additionally, this class includes extensions on [TextStyle] to easily apply specific font families to text.

class CustomTextStyles {
  // Body text style
  static TextStyle get bodyMediumSecondaryContainer =>
      theme.textTheme.bodyMedium!.copyWith(
        color: theme.colorScheme.secondaryContainer.withOpacity(1),
      );
  // Label text style
  static TextStyle get labelLargeBluegray400 =>
      theme.textTheme.labelLarge!.copyWith(
        color: appTheme.blueGray400,
        fontWeight: FontWeight.w600,
      );
  static TextStyle get labelLargeBluegray600 =>
      theme.textTheme.labelLarge!.copyWith(
        color: appTheme.blueGray600,
      );
  static TextStyle get labelLargeSecondaryContainer =>
      theme.textTheme.labelLarge!.copyWith(
        color: theme.colorScheme.secondaryContainer.withOpacity(1),
        fontWeight: FontWeight.w600,
      );
  static TextStyle get labelLargeSemiBold =>
      theme.textTheme.labelLarge!.copyWith(
        fontWeight: FontWeight.w600,
      );
  // Title text style
  static TextStyle get titleSmallBluegray300 =>
      theme.textTheme.titleSmall!.copyWith(
        color: appTheme.blueGray300,
      );
  static TextStyle get titleSmallOnErrorContainer =>
      theme.textTheme.titleSmall!.copyWith(
        color: theme.colorScheme.onErrorContainer,
      );
}

extension on TextStyle {
  // ignore: unused_element
  TextStyle get inter {
    return copyWith(
      fontFamily: 'Inter',
    );
  }
}
