part of 'subscription_page_notifier.dart';

/// Represents the state of SubscriptionPage in the application.

// ignore_for_file: must_be_immutable
class SubscriptionPageState {
  SubscriptionPageState({this.subscriptionPageModelObj});

  SubscriptionPageModel? subscriptionPageModelObj;

  SubscriptionPageState copyWith(
      {SubscriptionPageModel? subscriptionPageModelObj}) {
    return SubscriptionPageState(
      subscriptionPageModelObj:
          subscriptionPageModelObj ?? this.subscriptionPageModelObj,
    );
  }
}
