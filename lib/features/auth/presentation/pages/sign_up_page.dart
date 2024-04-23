import 'package:achieve/core/core.dart';
import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:go_router/go_router.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SignUpPage extends HookConsumerWidget {
  const SignUpPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final _email = useTextEditingController();
    final _password = useTextEditingController();
    final _confirmPassword = useTextEditingController();

    final supabase = ref.watch(supabaseProvider);

    var data = "Sign In";
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
                TextFormField(
                  controller: _confirmPassword,
                ),
              ],
            ),
          ),
          Spacer(
            flex: 5,
          ),
          ElevatedButton(
            onPressed: () => supabase.auth.signUp(
              email: _email.text,
              password: _password.text,
            ),
            child: Text(
              "Submit",
            ),
          ),
          Spacer(),
          TextButton(
            onPressed: () => context.goNamed(
              AppRoutes.signInRoute.removeSymbols(),
            ),
            child: Text(
              data,
            ),
          ),
          Spacer(),
        ],
      ),
    );
  }
}
