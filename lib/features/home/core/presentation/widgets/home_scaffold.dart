import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../../../../../core/routes/app_routes.dart';
import '../../../../auth/shared/providers.dart';
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
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                children: [
                  Text("asd"),
                  Container(
                    child: Padding(
                      padding: const EdgeInsets.all(20),
                      child: Chip(
                        label: Text(
                          "data",
                        ),
                      ),
                    ),
                  ),
                  ActionChip(
                    label: Text(
                      "data1",
                    ),
                  ),
                  ChoiceChip(
                    selected: false,
                    label: Text(
                      "data1",
                    ),
                  ),
                ],
              ),
              Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(20),
                    child: ElevatedButton(
                      onPressed: () {},
                      child: Text("123"),
                    ),
                  ),
                  OutlinedButton(
                    onPressed: () {},
                    child: Text("321"),
                  ),
                  TextButton.icon(
                    icon: Icon(Icons.zoom_in),
                    onPressed: () {},
                    label: Text("111"),
                  ),
                  Card(
                    child: Padding(
                      padding: const EdgeInsets.all(20),
                      child: CircleAvatar(),
                    ),
                  ),
                ],
              ),
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
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.goNamed(AppRoutes.counterNameRoute),
        child: const Icon(Icons.chevron_right),
      ),
    );
  }
}
