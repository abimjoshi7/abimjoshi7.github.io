import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../../../core/widgets/loading_overlay.dart';
import '../../../../core/extensions/context_ext.dart';
import '../../../auth/application/sign_out/sign_out_notifier.dart';
import '../../../auth/shared/providers.dart';
import 'widgets/home_scaffold.dart';

class HomePage extends HookConsumerWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    ref.listen<SignOutState>(
      signOutNotifierProvider,
      (_, state) => state.maybeWhen(
        orElse: () => null,
        success: () =>
            ref.read(authNotifierProvider.notifier).checkAndUpdateAuthStatus(),
        failure: (failure) => context.showSnackBar(
          failure ?? "",
        ),
      ),
    );

    final signOutState = ref.watch(signOutNotifierProvider);

    return Stack(
      children: [
        const HomeScaffold(),
        LoadingOverlay(
          isLoading: signOutState.maybeWhen(
            inProgress: () => true,
            orElse: () => false,
          ),
        ),
      ],
    );
  }
}
