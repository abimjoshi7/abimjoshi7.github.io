import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import 'route_notifier.dart';

final routerProvider = Provider<GoRouter>(
      (ref) {
    final router = RouterNotifier(ref);
    return GoRouter(
      refreshListenable: router,
      redirect: router.redirectLogic,
      routes: router.routes,

    );
  },
);