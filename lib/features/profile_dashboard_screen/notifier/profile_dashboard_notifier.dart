import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../../core/core.dart';
import '../models/profile_dashboard_model.dart';

part 'profile_dashboard_state.dart';

final profileDashboardNotifier =
    StateNotifierProvider<ProfileDashboardNotifier, ProfileDashboardState>(
  (ref) => ProfileDashboardNotifier(ProfileDashboardState(
    todayvalueoneController: TextEditingController(),
    selectedDropDownValue: SelectionPopupModel(title: ''),
    profileDashboardModelObj: ProfileDashboardModel(dropdownItemList: [
      SelectionPopupModel(
        id: 1,
        title: "Item One",
        isSelected: true,
      ),
      SelectionPopupModel(
        id: 2,
        title: "Item Two",
      ),
      SelectionPopupModel(
        id: 3,
        title: "Item Three",
      )
    ]),
  )),
);

/// A notifier that manages the state of a ProfileDashboard according to the event that is dispatched to it.
class ProfileDashboardNotifier extends StateNotifier<ProfileDashboardState> {
  ProfileDashboardNotifier(ProfileDashboardState state) : super(state);
}
