import 'package:achieve/core/core.dart';
import 'package:achieve/features/analytics/analytics_screen.dart';
import 'package:achieve/features/auth/presentation/pages/register_page.dart';
import 'package:achieve/features/homepage_new_habit_screen/homepage_new_habit_screen.dart';
import 'package:achieve/features/splash/presentation/pages/splash_page.dart';
import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../features/auth/presentation/pages/sign_in_page.dart';
import '../../features/auth/presentation/pages/sign_up_page.dart';
import '../../features/home/core/presentation/home_page.dart';
import '../../features/home/counter/presentation/counter_page.dart';

class RouterNotifier extends ChangeNotifier {
  RouterNotifier(this._ref) {
    //   _ref.listen<AuthState>(
    //     authNotifierProvider,
    //     (_, __) => notifyListeners(),
    //   );
  }

  final Ref _ref;

  // String? redirectLogic(BuildContext context, GoRouterState state) {
  //   final authState = _ref.read(authNotifierProvider);
  //
  //   final areWeSigningIn = state.matchedLocation == AppRoutes.signInRoute;
  //
  //   return switch (authState) {
  //     AuthState.authenticated => areWeSigningIn ? AppRoutes.homeRoute : null,
  //     _ => areWeSigningIn ? null : AppRoutes.signInRoute,
  //   };
  // }

  List<GoRoute> get routes {
    return [
      GoRoute(
        name: AppRoutes.defaultRoute,
        path: AppRoutes.defaultRoute,
        builder: (context, state) => const SplashPage(),
      ),
      GoRoute(
        name: AppRoutes.signInRoute.removeSymbols(),
        path: AppRoutes.signInRoute,
        builder: (context, state) => const SignInPage(),
        routes: [
          GoRoute(
            name: AppRoutes.homepageNewHabitScreen.removeSymbols(),
            path: AppRoutes.homepageNewHabitScreen.removeSymbols(),
            builder: (context, state) => const HomepageNewHabitScreen(),
          ),
          GoRoute(
            name: AppRoutes.analyticsScreen.removeSymbols(),
            path: AppRoutes.analyticsScreen.removeSymbols(),
            builder: (context, state) => const AnalyticsScreen(),
          ),
        ],
      ),
      GoRoute(
        name: AppRoutes.signUpRoute.removeSymbols(),
        path: AppRoutes.signUpRoute,
        builder: (context, state) => const SignUpPage(),
      ),
      GoRoute(
        name: AppRoutes.registerRoute.removeSymbols(),
        path: AppRoutes.registerRoute,
        builder: (context, state) => const RegisterWidget(),
      ),
      GoRoute(
        name: AppRoutes.homeRoute.removeSymbols(),
        path: AppRoutes.homeRoute,
        builder: (context, state) => const HomePage(),
        routes: [
          GoRoute(
            name: AppRoutes.counterRoute.removeSymbols(),
            path: AppRoutes.counterRoute.removeSymbols(),
            builder: (context, state) => const CounterPage(),
          ),
        ],
      ),
    ];
  }
}
