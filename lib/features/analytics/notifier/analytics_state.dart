part of 'analytics_notifier.dart';

/// Represents the state of Analytics in the application.

// ignore_for_file: must_be_immutable
class AnalyticsState {
  AnalyticsState({this.selectedDatesFromCalendar1, this.analyticsModelObj});

  AnalyticsModel? analyticsModelObj;

  List<DateTime?>? selectedDatesFromCalendar1;

  @override
  List<Object?> get props => [selectedDatesFromCalendar1, analyticsModelObj];
  AnalyticsState copyWith({
    List<DateTime?>? selectedDatesFromCalendar1,
    AnalyticsModel? analyticsModelObj,
  }) {
    return AnalyticsState(
      selectedDatesFromCalendar1:
          selectedDatesFromCalendar1 ?? this.selectedDatesFromCalendar1,
      analyticsModelObj: analyticsModelObj ?? this.analyticsModelObj,
    );
  }
}
