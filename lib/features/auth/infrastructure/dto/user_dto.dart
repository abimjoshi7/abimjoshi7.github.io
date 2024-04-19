import 'package:freezed_annotation/freezed_annotation.dart';

import '../../domain/user.dart';

part 'user_dto.freezed.dart';
part 'user_dto.g.dart';

@freezed
class UserDTO with _$UserDTO {
  const factory UserDTO({
    required int id,
    required String email,
    @JsonKey(name: 'token') required String userToken,
  }) = _UserDTO;

  const UserDTO._();

  factory UserDTO.fromDomain(User _) {
    return UserDTO(
      id: _.id,
      email: _.email ?? "",
      userToken: _.userToken ?? "",
    );
  }

  factory UserDTO.fromJson(Map<String, dynamic> json) =>
      _$UserDTOFromJson(json);

  User toDomain() {
    return User(
      id: id,
      email: email,
      userToken: userToken,
    );
  }
}
