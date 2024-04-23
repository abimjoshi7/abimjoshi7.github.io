import '../../../core/core.dart';
import 'journalchallengelist_item_model.dart';

/// This class defines the variables used in the [course_overview_screen],
/// and is typically used to hold data that is passed between different parts of the application.
// ignore_for_file: must_be_immutable

// ignore_for_file: must_be_immutable
class CourseOverviewModel {
  CourseOverviewModel(
      {this.dropdownItemList = const [],
      this.dropdownItemList1 = const [],
      this.journalchallengelistItemList = const []});

  List<SelectionPopupModel> dropdownItemList;

  List<SelectionPopupModel> dropdownItemList1;

  List<JournalchallengelistItemModel> journalchallengelistItemList;

  CourseOverviewModel copyWith({
    List<SelectionPopupModel>? dropdownItemList,
    List<SelectionPopupModel>? dropdownItemList1,
    List<JournalchallengelistItemModel>? journalchallengelistItemList,
  }) {
    return CourseOverviewModel(
      dropdownItemList: dropdownItemList ?? this.dropdownItemList,
      dropdownItemList1: dropdownItemList1 ?? this.dropdownItemList1,
      journalchallengelistItemList:
          journalchallengelistItemList ?? this.journalchallengelistItemList,
    );
  }
}
