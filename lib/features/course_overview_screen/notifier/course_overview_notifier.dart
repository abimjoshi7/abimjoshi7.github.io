import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../../core/core.dart';
import '../models/course_overview_model.dart';
import '../models/journalchallengelist_item_model.dart';

part 'course_overview_state.dart';

final courseOverviewNotifier =
    StateNotifierProvider<CourseOverviewNotifier, CourseOverviewState>(
  (ref) => CourseOverviewNotifier(CourseOverviewState(
    selectedDropDownValue: SelectionPopupModel(title: ''),
    selectedDropDownValue1: SelectionPopupModel(title: ''),
    courseOverviewModelObj: CourseOverviewModel(dropdownItemList: [
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
    ], dropdownItemList1: [
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
    ], journalchallengelistItemList: [
      JournalchallengelistItemModel(
        title:
            "30 Day Journal Challenge - Establish a Habit of Daily Journaling",
        duration: "2h 41m",
        lessons: "37 Lessons",
        // bookmarkIcon: ImageConstant.imgBookmark,
        // challengeImage: ImageConstant.imgImage166x374,
      )
    ]),
  )),
);

/// A notifier that manages the state of a CourseOverview according to the event that is dispatched to it.
class CourseOverviewNotifier extends StateNotifier<CourseOverviewState> {
  CourseOverviewNotifier(CourseOverviewState state) : super(state);
}
