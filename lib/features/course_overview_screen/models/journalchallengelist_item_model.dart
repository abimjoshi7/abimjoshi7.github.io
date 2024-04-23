/// This class is used in the [journalchallengelist_item_widget] screen.
// ignore_for_file: must_be_immutable

// ignore_for_file: must_be_immutable
class JournalchallengelistItemModel {
  JournalchallengelistItemModel(
      {this.title,
      this.duration,
      this.lessons,
      this.bookmarkIcon,
      this.challengeImage,
      this.id}) {
    title = title ??
        "30 Day Journal Challenge - Establish a Habit of Daily Journaling";
    duration = duration ?? "2h 41m";
    lessons = lessons ?? "37 Lessons";
    bookmarkIcon = bookmarkIcon;
    challengeImage = challengeImage;
    id = id ?? "";
  }

  String? title;

  String? duration;

  String? lessons;

  String? bookmarkIcon;

  String? challengeImage;

  String? id;
}
