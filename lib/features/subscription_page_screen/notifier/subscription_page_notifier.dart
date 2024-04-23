import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../models/subscription_page_model.dart';

part 'subscription_page_state.dart';

final subscriptionPageNotifier =
    StateNotifierProvider<SubscriptionPageNotifier, SubscriptionPageState>(
  (ref) => SubscriptionPageNotifier(SubscriptionPageState(
    subscriptionPageModelObj: SubscriptionPageModel(),
  )),
);

/// A notifier that manages the state of a SubscriptionPage according to the event that is dispatched to it.
class SubscriptionPageNotifier extends StateNotifier<SubscriptionPageState> {
  SubscriptionPageNotifier(SubscriptionPageState state) : super(state);
}
