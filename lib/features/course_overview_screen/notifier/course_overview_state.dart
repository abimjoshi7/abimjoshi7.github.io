part of 'course_overview_notifier.dart';

/// Represents the state of CourseOverview in the application.

// ignore_for_file: must_be_immutable
class CourseOverviewState {
  CourseOverviewState(
      {this.selectedDropDownValue,
      this.selectedDropDownValue1,
      this.courseOverviewModelObj});

  SelectionPopupModel? selectedDropDownValue;

  SelectionPopupModel? selectedDropDownValue1;

  CourseOverviewModel? courseOverviewModelObj;

  CourseOverviewState copyWith({
    SelectionPopupModel? selectedDropDownValue,
    SelectionPopupModel? selectedDropDownValue1,
    CourseOverviewModel? courseOverviewModelObj,
  }) {
    return CourseOverviewState(
      selectedDropDownValue:
          selectedDropDownValue ?? this.selectedDropDownValue,
      selectedDropDownValue1:
          selectedDropDownValue1 ?? this.selectedDropDownValue1,
      courseOverviewModelObj:
          courseOverviewModelObj ?? this.courseOverviewModelObj,
    );
  }
}
