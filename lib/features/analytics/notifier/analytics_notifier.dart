import 'package:hooks_riverpod/hooks_riverpod.dart';

// import 'package:calendar_date_picker2/calendar_date_picker2.dart';
import '../models/analytics_model.dart';

part 'analytics_state.dart';

final analyticsNotifier =
    StateNotifierProvider<AnalyticsNotifier, AnalyticsState>(
  (ref) => AnalyticsNotifier(AnalyticsState(
    selectedDatesFromCalendar1: [],
    analyticsModelObj: AnalyticsModel(),
  )),
);

/// A notifier that manages the state of a Analytics according to the event that is dispatched to it.
class AnalyticsNotifier extends StateNotifier<AnalyticsState> {
  AnalyticsNotifier(AnalyticsState state) : super(state);
}
