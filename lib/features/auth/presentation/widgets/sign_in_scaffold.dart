import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../shared/providers.dart';
import 'sign_in_form.dart';

class SignInScaffold extends HookConsumerWidget {
  const SignInScaffold({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // final l10n = context.l10n;

    return Scaffold(
      appBar: AppBar(
        // title: Text(l10n.signIn),
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const SignInForm(),
          const SizedBox(height: 24),
          TextButton(
            onPressed: () {
              FocusScope.of(context).unfocus();
              ref
                  .read(signInFormNotifierProvider.notifier)
                  .signInWithEmailAndPassword();
            },
            child: Text("Sign In"),
          ),
        ],
      ),
    );
  }
}
