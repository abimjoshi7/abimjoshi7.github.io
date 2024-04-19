import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../features/auth/application/auth/auth_notifier.dart';
import '../../features/auth/presentation/sign_in_page.dart';
import '../../features/auth/shared/providers.dart';
import '../../features/home/core/presentation/home_page.dart';
import '../../features/home/counter/presentation/counter_page.dart';
import 'app_routes.dart';

class RouterNotifier extends ChangeNotifier {
  RouterNotifier(this._ref) {
    _ref.listen<AuthState>(
      authNotifierProvider,
      (_, __) => notifyListeners(),
    );
  }

  final Ref _ref;

  String? redirectLogic(BuildContext context, GoRouterState state) {
    final authState = _ref.read(authNotifierProvider);

    final areWeSigningIn = state.matchedLocation == AppRoutes.signInRoute;

    return authState.maybeMap(
      authenticated: (_) => areWeSigningIn ? AppRoutes.homeRoute : null,
      orElse: () => areWeSigningIn ? null : AppRoutes.signInRoute,
    );
  }

  List<GoRoute> get routes {
    return [
      GoRoute(
        name: AppRoutes.defaultNameRoute,
        path: AppRoutes.defaultRoute,
        builder: (context, state) => const HomePage(),
      ),
      GoRoute(
        name: AppRoutes.signInNameRoute,
        path: AppRoutes.signInRoute,
        builder: (context, state) => const SignInPage(),
      ),
      GoRoute(
        name: AppRoutes.homeNameRoute,
        path: AppRoutes.homeRoute,
        builder: (context, state) => const HomePage(),
        routes: [
          GoRoute(
            name: AppRoutes.counterNameRoute,
            path: AppRoutes.counterRoute,
            builder: (context, state) => const CounterPage(),
          ),
        ],
      ),
    ];
  }
}
