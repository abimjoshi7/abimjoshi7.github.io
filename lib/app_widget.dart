import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import 'core/core.dart';

class AppWidget extends HookConsumerWidget {
  const AppWidget({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);

    return MaterialApp.router(
      debugShowCheckedModeBanner: kDebugMode,
      routeInformationProvider: router.routeInformationProvider,
      routeInformationParser: router.routeInformationParser,
      routerDelegate: router.routerDelegate,
      title: AppStrings.kAppName,
      // localizationsDelegates: AppLocalizations.localizationsDelegates,
      // supportedLocales: AppLocalizations.supportedLocales,
      theme: AppTheme.lightTheme(
        context,
        Palette.lightColorScheme,
      ),
      darkTheme: AppTheme.darkTheme(
        context,
        Palette.darkColorScheme,
      ),
      // themeMode: ThemeMode.light,
    );
  }
}
