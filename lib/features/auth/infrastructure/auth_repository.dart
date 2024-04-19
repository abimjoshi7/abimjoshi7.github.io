import 'dart:io';

import 'package:flutter/services.dart';
import 'package:fpdart/fpdart.dart';

import '../../../core/core.dart';
import '../domain/auth_failure.dart';
import 'auth_remote_service.dart';
import 'credentials_storage/credentials_storage.dart';

class AuthRepository {
  AuthRepository(
    this._credentialsStorage,
    this._remoteService,
  );

  final CredentialsStorage _credentialsStorage;
  final AuthRemoteService _remoteService;

  Future<bool> isSignedIn() =>
      getSignedInCredentials().then((credentials) => credentials != null);

  Future<Either<AuthFailure, Exception>> signOut() async {
    try {
      await _remoteService.signOut();
    } on RestApiException catch (e) {
      return Either.right(Exception(e.toString(),),);
    } on NoConnectionException {
      // Ignoring
    }

    return clearCredentialsStorage();
  }

  Future<Either<AuthFailure, Exception>> signInWithEmailAndPassword({
    required String email,
    required String password,
  }) async {
    try {
      final emailStr = email;
      final passwordStr = password;

      final authResponse = await _remoteService.signIn(
        email: emailStr,
        password: passwordStr,
      );

      return authResponse.when(
        withToken: (token) async {
          await _credentialsStorage.save(token);
          return Either.right(
             Exception(),
          );
        },
        failure: (errorCode, message) => Either.right(
            Exception(message),
        ),
      );
    } on RestApiException catch (e) {
      return Either.right(Exception(e.toString()), );
    } on NoConnectionException {
      return Either.right(SocketException("No Internet Connection"));
    }
  }

  Future<String?> getSignedInCredentials() async {
    try {
      final storedCredentials = await _credentialsStorage.read();

      return storedCredentials;
    } on PlatformException {
      return null;
    }
  }

  Future<Either<AuthFailure, Exception>> clearCredentialsStorage() async {
    try {
      await _credentialsStorage.clear();
      return Either.right(
        Exception(),
      );
    } on PlatformException {
      return Either.right(Exception(const AuthFailure.storage()));
    }
  }
}
