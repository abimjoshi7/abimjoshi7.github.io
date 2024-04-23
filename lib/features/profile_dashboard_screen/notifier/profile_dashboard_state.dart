part of 'profile_dashboard_notifier.dart';

/// Represents the state of ProfileDashboard in the application.

// ignore_for_file: must_be_immutable
class ProfileDashboardState {
  ProfileDashboardState(
      {this.todayvalueoneController,
      this.selectedDropDownValue,
      this.profileDashboardModelObj});

  TextEditingController? todayvalueoneController;

  SelectionPopupModel? selectedDropDownValue;

  ProfileDashboardModel? profileDashboardModelObj;

  @override
  List<Object?> get props => [
        todayvalueoneController,
        selectedDropDownValue,
        profileDashboardModelObj
      ];
  ProfileDashboardState copyWith({
    TextEditingController? todayvalueoneController,
    SelectionPopupModel? selectedDropDownValue,
    ProfileDashboardModel? profileDashboardModelObj,
  }) {
    return ProfileDashboardState(
      todayvalueoneController:
          todayvalueoneController ?? this.todayvalueoneController,
      selectedDropDownValue:
          selectedDropDownValue ?? this.selectedDropDownValue,
      profileDashboardModelObj:
          profileDashboardModelObj ?? this.profileDashboardModelObj,
    );
  }
}
