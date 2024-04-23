part of 'homepage_new_habit_notifier.dart';

/// Represents the state of HomepageNewHabit in the application.

// ignore_for_file: must_be_immutable
class HomepageNewHabitState {
  HomepageNewHabitState(
      {this.nameController,
      this.selectedDatesFromCalendar1,
      this.homepageNewHabitModelObj});

  TextEditingController? nameController;

  HomepageNewHabitModel? homepageNewHabitModelObj;

  List<DateTime?>? selectedDatesFromCalendar1;

  HomepageNewHabitState copyWith({
    TextEditingController? nameController,
    List<DateTime?>? selectedDatesFromCalendar1,
    HomepageNewHabitModel? homepageNewHabitModelObj,
  }) {
    return HomepageNewHabitState(
      nameController: nameController ?? this.nameController,
      selectedDatesFromCalendar1:
          selectedDatesFromCalendar1 ?? this.selectedDatesFromCalendar1,
      homepageNewHabitModelObj:
          homepageNewHabitModelObj ?? this.homepageNewHabitModelObj,
    );
  }
}
