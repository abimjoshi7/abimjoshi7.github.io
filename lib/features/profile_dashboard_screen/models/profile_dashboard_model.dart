import '../../../core/core.dart';

/// This class defines the variables used in the [profile_dashboard_screen],
/// and is typically used to hold data that is passed between different parts of the application.
// ignore_for_file: must_be_immutable

// ignore_for_file: must_be_immutable
class ProfileDashboardModel {
  ProfileDashboardModel({this.dropdownItemList = const []});

  List<SelectionPopupModel> dropdownItemList;

  ProfileDashboardModel copyWith(
      {List<SelectionPopupModel>? dropdownItemList}) {
    return ProfileDashboardModel(
      dropdownItemList: dropdownItemList ?? this.dropdownItemList,
    );
  }
}
