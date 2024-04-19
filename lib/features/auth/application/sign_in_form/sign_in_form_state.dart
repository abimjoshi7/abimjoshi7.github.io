part of 'sign_in_form_notifier.dart';

@freezed
class SignInFormState with _$SignInFormState {
  const factory SignInFormState({
    required String email,
    required String password,
    required bool showErrorMessages,
    required bool isSubmitting,
  }) = _SignInFormState;

  factory SignInFormState.initial() => SignInFormState(
        email: '',
        password: '',
        showErrorMessages: false,
        isSubmitting: false,
      );
}
