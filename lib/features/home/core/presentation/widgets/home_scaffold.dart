import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../../../auth/shared/providers.dart';
import '../../../../../../core/routes/app_routes.dart';
import '../../shared/providers.dart';

class HomeScaffold extends HookConsumerWidget {
  const HomeScaffold({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final counterState = ref.watch(counterNotifierProvider);

    return Scaffold(
      appBar: AppBar(
        actions: [
          IconButton(
            onPressed: () =>
                ref.read(signOutNotifierProvider.notifier).signOut(),
            icon: const Icon(Icons.logout),
          ),
          // IconButton(
          //   onPressed: () => context.goNamed(AppRoutes.registerScreen),
          //   icon: const Icon(Icons.login),
          // ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextButton(
              onPressed: () =>
                  ref.read(counterNotifierProvider.notifier).increment(),
              child: const Text('Increment'),
            ),
            Text(
              counterState.toString(),
              style: Theme.of(context).textTheme.headlineSmall,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.goNamed(AppRoutes.counterNameRoute),
        child: const Icon(Icons.chevron_right),
      ),
    );
  }
}
