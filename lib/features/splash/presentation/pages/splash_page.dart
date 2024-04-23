import 'package:achieve/features/auth/presentation/pages/sign_in_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../../../core/providers/providers.dart';
import '../../../../core/resources/app_strings.dart';
import '../../../../core/widgets/loading_overlay.dart';

class SplashPage extends HookConsumerWidget {
  const SplashPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return FutureBuilder(
      future: _getIsFirstUse(ref),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return LoadingOverlay(
            isLoading: true,
          ); // or any loading indicator
        } else if (snapshot.hasError) {
          return Text('Error: ${snapshot.error}');
        } else {
          final isFirstUse = snapshot.data ?? true;
          return isFirstUse ? OnboardingPage() : SignInPage();
        }
      },
    );
  }

  Future<bool> _getIsFirstUse(WidgetRef ref) async {
    final secureStorage = ref.watch(flutterSecureStorageProvider);
    final isFirstUse = await secureStorage.read(
      key: AppStrings.kIsFirstUse,
    );
    return isFirstUse == 'true';
  }
}

class OnboardingPage extends HookConsumerWidget {
  const OnboardingPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final secureStorage = ref.watch(flutterSecureStorageProvider);
    setFirstUse(secureStorage);

    return Placeholder();
  }

  Future<void> setFirstUse(FlutterSecureStorage secureStorage) async =>
      await secureStorage.write(
        key: AppStrings.kIsFirstUse,
        value: "true",
      );
}
