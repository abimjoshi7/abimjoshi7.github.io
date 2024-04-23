import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../../../core/widgets/loading_overlay.dart';
import 'widgets/home_scaffold.dart';

class HomePage extends HookConsumerWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Stack(
      children: [
        const HomeScaffold(),
        LoadingOverlay(
          isLoading: false,
        ),
      ],
    );
  }
}
