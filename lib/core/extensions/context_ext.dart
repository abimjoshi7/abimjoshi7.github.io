import 'dart:async';

import 'package:flutter/material.dart';

import '../../style/style.dart';

/// Extension on [BuildContext] to provide utility methods for accessing media query information,
/// text styles, colors, and showing bottom sheets and snack bars.
extension BuildContextEntension<T> on BuildContext {
  // * Core
  /// Returns a [VoidCallback] that pops the current route off the navigator.
  VoidCallback get burn => () => Navigator.pop(this);

  // * Dimensions
  /// Returns true if the device is considered mobile (small width).
  bool get isMobile => MediaQuery.of(this).size.width <= 500.0;

  /// Returns true if the device is considered a tablet (medium width).
  bool get isTablet =>
      MediaQuery.of(this).size.width < 1024.0 &&
      MediaQuery.of(this).size.width >= 650.0;

  /// Returns true if the device is considered a small tablet (between mobile and tablet size).
  bool get isSmallTablet =>
      MediaQuery.of(this).size.width < 650.0 &&
      MediaQuery.of(this).size.width > 500.0;

  /// Returns true if the device is considered desktop (large width).
  bool get isDesktop => MediaQuery.of(this).size.width >= 1024.0;

  /// Returns true if the device has a small width (between mobile and desktop size).
  bool get isSmall =>
      MediaQuery.of(this).size.width < 850.0 &&
      MediaQuery.of(this).size.width >= 560.0;

  /// Returns the width of the media (screen or window).
  double get width => MediaQuery.of(this).size.width;

  /// Returns the height of the media (screen or window).
  double get height => MediaQuery.of(this).size.height;

  /// Returns the size of the media (screen or window).
  Size get size => MediaQuery.of(this).size;

  // * Popups
  /// Shows a modal bottom sheet with the given [child] widget.
  /// Additional customization options are available via named parameters.
  Future<T?> showBottomSheet(
    Widget child, {
    bool isScrollControlled = true,
    bool useSafeArea = true,
    Color? backgroundColor,
    Color? barrierColor,
    BoxConstraints? constraints,
    bool? showDragHandle,
    bool isDismissible = true,
    bool enableDrag = false,
  }) {
    // Cache the MediaQuery data to avoid multiple lookups.
    return showModalBottomSheet(
      enableDrag: enableDrag,
      showDragHandle: showDragHandle,
      context: this,
      isScrollControlled: isScrollControlled,
      useSafeArea: useSafeArea,
      barrierColor: barrierColor,
      backgroundColor: backgroundColor,
      isDismissible: isDismissible,
      constraints: constraints,
      builder: (context) {
        return PopScope(
          canPop: true,
          // canPop: false,
          // onPopInvoked: (didPop) async {
          //   if (didPop) return;
          //
          //   final bool? shouldPop = await showDialog(
          //     context: context,
          //     builder: (context) => ExitFormDialog(),
          //   );
          //
          //   if (shouldPop ?? false) {
          //     Navigator.pop(context);
          //   }
          // },
          child: Padding(
            padding: EdgeInsets.only(
              bottom: MediaQuery.viewInsetsOf(context).bottom,
            ),
            child: Wrap(children: [child]),
          ),
        );
      },
    );
  }

  /// Shows a snack bar with the given [message].
  /// Additional customization options are available via named parameters.
  ScaffoldFeatureController<SnackBar, SnackBarClosedReason> showSnackBar(
    String message, {
    bool showAction = false,
    VoidCallback? onPressed,
    bool isSuccessful = false,
  }) {
    final mediaQueryData = MediaQuery.of(this);
    ScaffoldMessenger.of(this).clearSnackBars();
    return ScaffoldMessenger.of(this).showSnackBar(
      SnackBar(
        elevation: 4,
        showCloseIcon: true,
        behavior: SnackBarBehavior.floating,
        padding: EdgeInsets.only(
          bottom: mediaQueryData.viewInsets.bottom,
        ),
        content: Center(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                Icon(
                  isSuccessful
                      ? Icons.done_rounded
                      : Icons.warning_amber_rounded,
                  color: isSuccessful ? Palette.seaGreen : Palette.imperialRed,
                ),
                SizedBox(
                  width: 16,
                ),
                Flexible(
                  child: Text(
                    message,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        action: showAction
            ? SnackBarAction(
                label: "Go",
                onPressed: onPressed ?? () {},
              )
            : null,
      ),
    );
  }
}
