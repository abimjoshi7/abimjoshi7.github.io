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
      appBar: AppBar(
        title: Text("Sign In"),
        actions: [
          IconButton(
            icon: Icon(Icons.help_outline),
            onPressed: () {},
          ),
        ],
      ),
      body: Column(
        children: [
          Text("Hello world"),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Placeholder(
                fallbackHeight: 100,
              ),
            ),
          ),
          DropdownButtonFormField<int>(
            items: [
              DropdownMenuItem(
                value: 1,
                child: Text("1"),
              ),
              DropdownMenuItem(
                value: 2,
                child: Text("2"),
              ),
              DropdownMenuItem(
                value: 3,
                child: Text("3"),
              ),
            ],
            onChanged: (value) {},
          ),
          Card(
            child: ListTile(
              title: Text("data"),
              trailing: Icon(
                Icons.dangerous,
              ),
            ),
          ),
          Row(
            children: [
              FilterChip(
                label: Text("12"),
                onSelected: (value) {},
              ),
              ChoiceChip(label: Text("data123"), selected: true),
              ActionChip.elevated(
                label: Text("data"),
                labelStyle: TextStyle(color: Palette.zaffre),
              ),
            ],
          ),
          ExpansionTile(
            title: Text("data"),
            children: [
              Text("data"),
              Text("data"),
              Text("data"),
            ],
          ),
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
                CheckboxListTile.adaptive(
                  value: true,
                  onChanged: (value) {},
                  title: Text("123xzc"),
                ),
                RadioListTile(
                  value: 1,
                  groupValue: 1,
                  onChanged: (value) {},
                  title: Text("zxczxc"),
                ),
              ],
            ),
          ),
          Spacer(
            flex: 5,
          ),
          Row(
            children: [
              ElevatedButton(
                onPressed: () => supabase.auth
                    .signInWithPassword(
                      password: _password.text,
                      email: _email.text,
                    )
                    .whenComplete(
                      () => context.pushNamed(
                        AppRoutes.homepageNewHabitScreen.removeSymbols(),
                      ),
                    ),
                child: Text(
                  kSubmit,
                ),
              ),
              OutlinedButton(
                onPressed: () => supabase.auth
                    .signInWithPassword(
                      password: _password.text,
                      email: _email.text,
                    )
                    .whenComplete(
                      () => context.pushNamed(
                        AppRoutes.homepageNewHabitScreen.removeSymbols(),
                      ),
                    ),
                child: Text(
                  kSubmit,
                ),
              ),
            ],
          ),
          Spacer(),
          TextButton(
            onPressed: () => context.goNamed(
              AppRoutes.registerRoute.removeSymbols(),
            ),
            child: Text(
              kSignUp,
            ),
          ),
          Spacer(),
          OutlinedButton.icon(
            onPressed: () {},
            icon: Icon(Icons.safety_check),
            label: Text(
              "data",
            ),
          ),
        ],
      ),
    );
  }
}
