import 'package:achieve/core/routes/app_routes.dart';
import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../../../core/providers/providers.dart';

class SignInPage extends HookConsumerWidget {
  const SignInPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _email = useTextEditingController();
    final _password = useTextEditingController();

    final supabase = ref.watch(supabaseProvider);

    var kSignUp = "Sign Up";
    var kSubmit = "Submit";
    return Scaffold(
      body: Column(
        children: [
          Placeholder(),
          Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              children: [
                TextFormField(
                  controller: _email,
                ),
                TextFormField(
                  controller: _password,
                ),
              ],
            ),
          ),
          Spacer(
            flex: 5,
          ),
          ElevatedButton(
            onPressed: () => supabase.auth.signInWithPassword(
              password: _password.text,
              email: _email.text,
            ),
            child: Text(
              kSubmit,
            ),
          ),
          Spacer(),
          TextButton(
            onPressed: () => context.goNamed(
              AppRoutes.signUpRoute.removeSymbols(),
            ),
            child: Text(
              kSignUp,
            ),
          ),
          Spacer(),
        ],
      ),
    );
  }
}
