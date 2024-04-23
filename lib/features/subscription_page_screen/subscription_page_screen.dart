import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../core/core.dart';

class SubscriptionPageScreen extends ConsumerStatefulWidget {
  const SubscriptionPageScreen({Key? key})
      : super(
          key: key,
        );

  @override
  SubscriptionPageScreenState createState() => SubscriptionPageScreenState();
}

class SubscriptionPageScreenState
    extends ConsumerState<SubscriptionPageScreen> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Palette.orange5002,
        appBar: _buildAppBar(context),
        body: Container(
          width: double.maxFinite,
          padding: EdgeInsets.symmetric(
            horizontal: 19.h,
            vertical: 6.v,
          ),
          child: Column(
            children: [
              SizedBox(height: 25.v),
              _buildStackTeepeeSwir(context),
              SizedBox(height: 8.v),
              _buildColumnUnlock(context),
              SizedBox(height: 28.v),
              _buildSubscription(context),
              SizedBox(height: 51.v),
              CustomElevatedButton(
                text: "lbl_subscribe_now",
                buttonTextStyle: AppTheme.getThemeData.textTheme.titleMedium,
              ),
              SizedBox(height: 15.v),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  CustomImageView(
                    // imagePath: ImageConstant.imgCheckmarkGray800,
                    height: 14.v,
                    width: 12.h,
                    margin: EdgeInsets.only(bottom: 2.v),
                  ),
                  Padding(
                    padding: EdgeInsets.only(left: 6.h),
                    child: Text(
                      "msg_secured_with_goggle",
                    ),
                  )
                ],
              ),
              SizedBox(height: 38.v),
              Text(
                "msg_restore_purchase",
                style: AppTheme.getThemeData.textTheme.bodySmall?.copyWith(
                  decoration: TextDecoration.underline,
                ),
              )
            ],
          ),
        ),
        bottomNavigationBar: _buildRowTermsOf(context),
      ),
    );
  }

  /// Section Widget
  PreferredSizeWidget _buildAppBar(BuildContext context) {
    return CustomAppBar(
      leadingWidth: 74.h,
      // leading: AppbarLeadingIconbutton(
      //   imagePath: ImageConstant.imgIconsGray800,
      //   margin: EdgeInsets.only(left: 10.h),
      // ),
      centerTitle: true,
      title: Text(
        "lbl_premium",
      ),
    );
  }

  /// Section Widget
  Widget _buildStackTeepeeSwir(BuildContext context) {
    return Card(
      clipBehavior: Clip.antiAlias,
      elevation: 0,
      margin: EdgeInsets.all(0),
      color: AppTheme.getThemeData.colorScheme.onPrimaryContainer,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadiusStyle.roundedBorder12,
      ),
      child: Container(
        height: 146.v,
        width: 374.h,
        decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
          borderRadius: BorderRadiusStyle.roundedBorder12,
        ),
        child: Stack(
          alignment: Alignment.centerLeft,
          children: [
            CustomImageView(
              // imagePath: ImageConstant.imgTeepeeSwirly146x181,
              height: 146.v,
              width: 181.h,
              radius: BorderRadius.circular(
                12.h,
              ),
              alignment: Alignment.centerRight,
            ),
            Align(
              alignment: Alignment.centerLeft,
              child: Padding(
                padding: EdgeInsets.only(
                  left: 28.h,
                  right: 150.h,
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "msg_60_off_your_upgrade",
                      style: AppTheme.getThemeData.textTheme.titleLarge,
                    ),
                    SizedBox(height: 3.v),
                    Opacity(
                      opacity: 0.5,
                      child: Text(
                        "lbl_expires_in",
                        style: AppTheme.getThemeData.textTheme.bodySmall,
                      ),
                    ),
                    SizedBox(height: 4.v),
                    Padding(
                      padding: EdgeInsets.only(right: 41.h),
                      child: Row(
                        children: [
                          Container(
                            width: 41.adaptSize,
                            padding: EdgeInsets.symmetric(
                              horizontal: 11.h,
                              vertical: 9.v,
                            ),
                            decoration: AppDecoration.fillGray.copyWith(
                              borderRadius: BorderRadiusStyle.roundedBorder12,
                            ),
                            child: Text(
                              "lbl_23",
                              style: AppTheme.getThemeData.textTheme.bodyLarge,
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.only(
                              left: 5.h,
                              top: 9.v,
                              bottom: 9.v,
                            ),
                            child: Text(
                              "lbl",
                              style: AppTheme.getThemeData.textTheme.bodyLarge,
                            ),
                          ),
                          Container(
                            width: 41.adaptSize,
                            margin: EdgeInsets.only(left: 6.h),
                            padding: EdgeInsets.symmetric(
                              horizontal: 11.h,
                              vertical: 9.v,
                            ),
                            decoration: AppDecoration.fillGray.copyWith(
                              borderRadius: BorderRadiusStyle.roundedBorder12,
                            ),
                            child: Text(
                              "lbl_56",
                              style: AppTheme.getThemeData.textTheme.bodyLarge,
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.only(
                              left: 5.h,
                              top: 9.v,
                              bottom: 9.v,
                            ),
                            child: Text(
                              "lbl",
                              style: AppTheme.getThemeData.textTheme.bodyLarge,
                            ),
                          ),
                          Container(
                            width: 41.adaptSize,
                            margin: EdgeInsets.only(left: 6.h),
                            padding: EdgeInsets.symmetric(
                              horizontal: 10.h,
                              vertical: 9.v,
                            ),
                            decoration: AppDecoration.fillGray.copyWith(
                              borderRadius: BorderRadiusStyle.roundedBorder12,
                            ),
                            child: Text(
                              "lbl_48",
                              style: AppTheme.getThemeData.textTheme.bodyLarge,
                            ),
                          )
                        ],
                      ),
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  /// Section Widget
  Widget _buildColumnUnlock(BuildContext context) {
    return Container(
      width: 374.h,
      margin: EdgeInsets.only(left: 1.h),
      padding: EdgeInsets.symmetric(
        horizontal: 20.h,
        vertical: 11.v,
      ),
      decoration: BoxDecoration(
          // image: DecorationImage(
          //   image: fs.Svg(
          //     ImageConstant.imgGroup16,
          //   ),
          //   fit: BoxFit.cover,
          // ),
          ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Align(
            alignment: Alignment.center,
            child: Text(
              "msg_unlock_monumental",
              style: AppTheme.getThemeData.textTheme.titleLarge,
            ),
          ),
          SizedBox(height: 22.v),
          Row(
            children: [
              // CustomIconButton(
              //   height: 22.adaptSize,
              //   width: 22.adaptSize,
              //   padding: EdgeInsets.all(6.h),
              //   child: CustomImageView(
              //     imagePath: ImageConstant.imgGroup9,
              //   ),
              // ),
              Padding(
                padding: EdgeInsets.only(left: 20.h),
                child: Text(
                  "msg_unlimited_habits",
                  style: AppTheme.getThemeData.textTheme.titleMedium,
                ),
              )
            ],
          ),
          SizedBox(height: 23.v),
          Row(
            children: [
              // CustomIconButton(
              //   height: 22.adaptSize,
              //   width: 22.adaptSize,
              //   padding: EdgeInsets.all(6.h),
              //   child: CustomImageView(
              //     imagePath: ImageConstant.imgGroup9,
              //   ),
              // ),
              Padding(
                padding: EdgeInsets.only(left: 20.h),
                child: Text(
                  "msg_access_to_all_courses",
                  style: AppTheme.getThemeData.textTheme.titleMedium,
                ),
              )
            ],
          ),
          SizedBox(height: 23.v),
          Padding(
            padding: EdgeInsets.only(right: 71.h),
            child: Row(
              children: [
                // CustomIconButton(
                //   height: 22.adaptSize,
                //   width: 22.adaptSize,
                //   padding: EdgeInsets.all(6.h),
                //   child: CustomImageView(
                //     imagePath: ImageConstant.imgGroup9,
                //   ),
                // ),
                Padding(
                  padding: EdgeInsets.only(left: 20.h),
                  child: Text(
                    "msg_access_to_all_avatar",
                    style: AppTheme.getThemeData.textTheme.titleMedium,
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }

  /// Section Widget
  Widget _buildSubscription(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(left: 1.h),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: 135.v,
            width: 120.h,
            margin: EdgeInsets.only(bottom: 19.v),
            child: Stack(
              alignment: Alignment.bottomCenter,
              children: [
                Padding(
                  padding: EdgeInsets.only(right: 1.h),
                  child: _buildColumn6MonthPlan(
                    context,
                    priceText: "lbl_19_00",
                    planText: "msg_6_month_plan_for_39_99",
                    lifetimeText: "lbl_monthly",
                  ),
                ),
                Align(
                  alignment: Alignment.bottomCenter,
                  child: Padding(
                    padding: EdgeInsets.only(bottom: 28.v),
                    child: SizedBox(
                      width: 120.h,
                      child: Divider(),
                    ),
                  ),
                )
              ],
            ),
          ),
          Container(
            decoration: AppDecoration.outlineOrange.copyWith(
              borderRadius: BorderRadiusStyle.roundedBorder12,
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  padding: EdgeInsets.symmetric(
                    horizontal: 23.h,
                    vertical: 6.v,
                  ),
                  decoration: AppDecoration.fillPrimary.copyWith(
                    borderRadius: BorderRadiusStyle.customBorderTL12,
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      SizedBox(height: 3.v),
                      Text(
                        "lbl_most_popular",
                        style: AppTheme.getThemeData.textTheme.bodySmall,
                      )
                    ],
                  ),
                ),
                SizedBox(
                  width: 120.h,
                  child: Divider(),
                ),
                SizedBox(height: 9.v),
                Text(
                  "lbl_29_00",
                  style: AppTheme.getThemeData.textTheme.headlineSmall,
                ),
                SizedBox(height: 1.v),
                Opacity(
                  opacity: 0.5,
                  child: SizedBox(
                    width: 75.h,
                    child: Text(
                      "msg_6_month_plan_for_39_99",
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.center,
                      style:
                          AppTheme.getThemeData.textTheme.bodySmall?.copyWith(
                        height: 1.30,
                      ),
                    ),
                  ),
                ),
                SizedBox(height: 20.v),
                SizedBox(
                  width: 120.h,
                  child: Divider(),
                ),
                SizedBox(height: 6.v),
                Text(
                  "lbl_yearly",
                  style: AppTheme.getThemeData.textTheme.bodySmall,
                ),
                SizedBox(height: 4.v)
              ],
            ),
          ),
          Container(
            height: 136.v,
            width: 120.h,
            margin: EdgeInsets.only(bottom: 17.v),
            child: Stack(
              alignment: Alignment.bottomCenter,
              children: [
                Padding(
                  padding: EdgeInsets.only(right: 1.h),
                  child: _buildColumn6MonthPlan(
                    context,
                    priceText: "lbl_49_00",
                    planText: "msg_6_month_plan_for_39_99",
                    lifetimeText: "lbl_lifetime",
                  ),
                ),
                Align(
                  alignment: Alignment.bottomCenter,
                  child: SizedBox(
                    height: 42.v,
                    width: 120.h,
                    child: Stack(
                      alignment: Alignment.centerRight,
                      children: [
                        Align(
                          alignment: Alignment.topCenter,
                          child: Padding(
                            padding: EdgeInsets.only(top: 12.v),
                            child: SizedBox(
                              width: 120.h,
                              child: Divider(),
                            ),
                          ),
                        ),
                        // CustomImageView(
                        //   imagePath: ImageConstant.imgEdit,
                        //   height: 41.v,
                        //   width: 53.h,
                        //   alignment: Alignment.centerRight,
                        //   margin: EdgeInsets.only(right: 1.h),
                        // ),
                        Align(
                          alignment: Alignment.bottomRight,
                          child: Padding(
                            padding: EdgeInsets.only(right: 3.h),
                            child: Text(
                              "lbl_75",
                              style: AppTheme.getThemeData.textTheme.bodySmall,
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }

  /// Section Widget
  Widget _buildRowTermsOf(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 105.h,
        right: 105.h,
        bottom: 23.v,
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            "msg_terms_of_service",
            style: AppTheme.getThemeData.textTheme.bodySmall?.copyWith(
              decoration: TextDecoration.underline,
            ),
          ),
          Opacity(
            opacity: 0.5,
            child: Padding(
              padding: EdgeInsets.only(left: 7.h),
              child: Text(
                "lbl_and",
                style: AppTheme.getThemeData.textTheme.bodySmall!.copyWith(
                  decoration: TextDecoration.underline,
                ),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.only(left: 8.h),
            child: Text(
              "lbl_privacy_policy",
              style: AppTheme.getThemeData.textTheme.bodySmall?.copyWith(
                decoration: TextDecoration.underline,
              ),
            ),
          )
        ],
      ),
    );
  }

  /// Common widget
  Widget _buildColumn6MonthPlan(
    BuildContext context, {
    required String priceText,
    required String planText,
    required String lifetimeText,
  }) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: 16.h,
        vertical: 5.v,
      ),
      decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
        borderRadius: BorderRadiusStyle.roundedBorder12,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          SizedBox(height: 18.v),
          Text(
            priceText,
            style: AppTheme.getThemeData.textTheme.headlineSmall?.copyWith(
              color: Theme.of(context).colorScheme.primary,
            ),
          ),
          SizedBox(height: 1.v),
          Opacity(
            opacity: 0.5,
            child: SizedBox(
              width: 75.h,
              child: Text(
                planText,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.center,
                style: AppTheme.getThemeData.textTheme.bodySmall?.copyWith(
                  color: Palette.grey.withOpacity(0.53),
                  height: 1.30,
                ),
              ),
            ),
          ),
          SizedBox(height: 27.v),
          Align(
            alignment: Alignment.centerLeft,
            child: Text(
              lifetimeText,
              style: AppTheme.getThemeData.textTheme.bodySmall?.copyWith(
                color: Palette.grey,
              ),
            ),
          )
        ],
      ),
    );
  }
}
