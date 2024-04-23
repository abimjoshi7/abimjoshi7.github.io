import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

// import 'package:calendar_date_picker2/calendar_date_picker2.dart';
import '../models/homepage_new_habit_model.dart';

part 'homepage_new_habit_state.dart';

final homepageNewHabitNotifier =
    StateNotifierProvider<HomepageNewHabitNotifier, HomepageNewHabitState>(
  (ref) => HomepageNewHabitNotifier(HomepageNewHabitState(
    nameController: TextEditingController(),
    selectedDatesFromCalendar1: [],
    homepageNewHabitModelObj: HomepageNewHabitModel(),
  )),
);

/// A notifier that manages the state of a HomepageNewHabit according to the event that is dispatched to it.
class HomepageNewHabitNotifier extends StateNotifier<HomepageNewHabitState> {
  HomepageNewHabitNotifier(HomepageNewHabitState state) : super(state);
}
