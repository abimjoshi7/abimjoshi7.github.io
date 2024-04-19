import 'package:fpdart/fpdart.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../domain/auth_failure.dart';
import '../../infrastructure/auth_repository.dart';

part 'sign_in_form_state.dart';
part 'sign_in_form_notifier.freezed.dart';

class SignInFormNotifier extends StateNotifier<SignInFormState> {
  SignInFormNotifier(this._repository) : super(SignInFormState.initial());

  final AuthRepository _repository;

  void changeEmail(String emailStr) {
    state = state.copyWith(
      email: emailStr,
    );
  }

  void changePassword(String passwordStr) {
    state = state.copyWith(
      password: passwordStr,
    );
  }

  Future<void> signInWithEmailAndPassword() async {
    Either<AuthFailure, Exception>? signInFailureOrSuccess;

    if (isValid) {
      state = state.copyWith(
        isSubmitting: true,
      );

      signInFailureOrSuccess = await _repository.signInWithEmailAndPassword(
        email: state.email,
        password: state.password,
      );
    }

    state = state.copyWith(
      isSubmitting: false,
      showErrorMessages: true,
    );
  }

  bool get isValid {
    final values = [
      state.email,
      state.password,
    ];
    return true;
  }
}
