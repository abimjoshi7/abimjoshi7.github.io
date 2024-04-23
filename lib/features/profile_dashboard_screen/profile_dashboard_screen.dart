import 'package:achieve/core/core.dart';
import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import 'notifier/profile_dashboard_notifier.dart';

class ProfileDashboardScreen extends ConsumerStatefulWidget {
  const ProfileDashboardScreen({Key? key})
      : super(
          key: key,
        );

  @override
  ProfileDashboardScreenState createState() => ProfileDashboardScreenState();
}

class ProfileDashboardScreenState
    extends ConsumerState<ProfileDashboardScreen> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Palette.orange5002,
        resizeToAvoidBottomInset: false,
        appBar: _buildAppBar(context),
        body: Container(
          width: double.maxFinite,
          padding: EdgeInsets.symmetric(
            horizontal: 20.h,
            vertical: 32.v,
          ),
          child: Column(
            children: [
              _buildTrackingHabit(context),
              SizedBox(height: 8.v),
              Consumer(
                builder: (context, ref, _) {
                  return CustomTextFormField(
                    controller: ref
                        .watch(profileDashboardNotifier)
                        .todayvalueoneController,
                    hintText: "lbl_billing_methods",
                    hintStyle: AppTheme.getThemeData.textTheme.titleMedium!,
                    textInputAction: TextInputAction.done,
                    prefix: Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: 9.h,
                        vertical: 12.v,
                      ),
                      margin: EdgeInsets.fromLTRB(6.h, 6.v, 14.h, 6.v),
                      decoration: BoxDecoration(
                        color: AppTheme.getThemeData.colorScheme.primary,
                        borderRadius: BorderRadius.circular(
                          12.h,
                        ),
                      ),
                      child: CustomImageView(
                        imagePath: AppImages.imageNotFound,
                        height: 14.v,
                        width: 20.h,
                      ),
                    ),
                    prefixConstraints: BoxConstraints(
                      maxHeight: 50.v,
                    ),
                    contentPadding: EdgeInsets.only(
                      top: 14.v,
                      right: 30.h,
                      bottom: 14.v,
                    ),
                    borderDecoration:
                        TextFormFieldStyleHelper.fillOnPrimaryContainer,
                    filled: true,
                    fillColor:
                        AppTheme.getThemeData.colorScheme.onPrimaryContainer,
                  );
                },
              ),
              SizedBox(height: 8.v),
              _buildRowUserOne(context),
              SizedBox(height: 5.v)
            ],
          ),
        ),
        bottomNavigationBar: _buildBottomBar(context),
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
        "lbl_profile",
      ),
      actions: [
        // AppbarTrailingIconbutton(
        //   imagePath: ImageConstant.imgIconsGray80065x64,
        //   margin: EdgeInsets.symmetric(horizontal: 17.h),
        // )
      ],
    );
  }

  /// Section Widget
  Widget _buildTrackingHabit(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(
        horizontal: 15.h,
        vertical: 12.v,
      ),
      decoration: BoxDecoration(
          // image: DecorationImage(
          //   image: fs.Svg(
          //     ImageConstant.imgGroup68,
          //   ),
          //   fit: BoxFit.cover,
          // ),
          ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CustomImageView(
                imagePath: AppImages.imageNotFound,
                height: 60.adaptSize,
                width: 60.adaptSize,
                radius: BorderRadius.circular(
                  30.h,
                ),
              ),
              Padding(
                padding: EdgeInsets.only(
                  left: 10.h,
                  top: 11.v,
                  bottom: 11.v,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "lbl_marilyn_aminoff",
                      style: AppTheme.getThemeData.textTheme.bodyLarge,
                    ),
                    Opacity(
                      opacity: 0.5,
                      child: Text(
                        "lbl_name",
                        style: AppTheme.getThemeData.textTheme.labelLarge,
                      ),
                    )
                  ],
                ),
              ),
              Spacer(),
              Padding(
                padding: EdgeInsets.only(
                  top: 9.v,
                  bottom: 18.v,
                ),
                child: Consumer(
                  builder: (context, ref, _) {
                    return CustomDropDown(
                      width: 110.h,
                      icon: Container(
                        margin: EdgeInsets.symmetric(horizontal: 12.h),
                        child: CustomImageView(
                          // imagePath: ImageConstant.imgArrowdown,
                          height: 4.v,
                          width: 10.h,
                        ),
                      ),
                      hintText: "lbl_this_week",
                      hintStyle: AppTheme.getThemeData.textTheme.bodyMedium,
                      items: ref
                              .watch(profileDashboardNotifier)
                              .profileDashboardModelObj
                              ?.dropdownItemList ??
                          [],
                      borderDecoration: DropDownStyleHelper.outlineGrayTL12,
                      filled: false,
                    );
                  },
                ),
              )
            ],
          ),
          SizedBox(height: 27.v),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Expanded(
                child: Padding(
                  padding: EdgeInsets.only(right: 16.h),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Opacity(
                            opacity: 0.5,
                            child: Text(
                              "msg_total_work_hours",
                              style: AppTheme.getThemeData.textTheme.bodySmall,
                            ),
                          ),
                          SizedBox(height: 2.v),
                          Text(
                            "lbl_18",
                            style:
                                AppTheme.getThemeData.textTheme.headlineSmall,
                          )
                        ],
                      ),
                      // CustomIconButton(
                      //   height: 40.adaptSize,
                      //   width: 40.adaptSize,
                      //   padding: EdgeInsets.all(11.h),
                      //   decoration: IconButtonStyleHelper.fillPrimary,
                      //   child: CustomImageView(
                      //     imagePath: ImageConstant.imgClock,
                      //   ),
                      // )
                    ],
                  ),
                ),
              ),
              Expanded(
                child: Padding(
                  padding: EdgeInsets.only(left: 16.h),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Opacity(
                            opacity: 0.5,
                            child: Text(
                              "lbl_task_completed",
                              style: AppTheme.getThemeData.textTheme.bodySmall,
                            ),
                          ),
                          SizedBox(height: 2.v),
                          Text(
                            "lbl_12",
                            style:
                                AppTheme.getThemeData.textTheme.headlineSmall,
                          )
                        ],
                      ),
                      // Padding(
                      //   padding: EdgeInsets.only(left: 29.h),
                      //   child: CustomIconButton(
                      //     height: 40.adaptSize,
                      //     width: 40.adaptSize,
                      //     padding: EdgeInsets.all(10.h),
                      //     decoration: IconButtonStyleHelper.fillOnPrimaryTL19,
                      //     child: CustomImageView(
                      //       imagePath: ImageConstant.imgMaximize,
                      //     ),
                      //   ),
                      // )
                    ],
                  ),
                ),
              )
            ],
          ),
          SizedBox(height: 33.v),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Padding(
                padding: EdgeInsets.only(bottom: 1.v),
                child: Column(
                  children: [
                    SizedBox(
                      height: 42.adaptSize,
                      width: 42.adaptSize,
                      child: Stack(
                        alignment: Alignment.center,
                        children: [
                          Align(
                            alignment: Alignment.center,
                            child: Text(
                              "lbl_7",
                              style: AppTheme.getThemeData.textTheme.bodyMedium,
                            ),
                          ),
                          Align(
                            alignment: Alignment.center,
                            child: Container(
                              height: 42.adaptSize,
                              width: 42.adaptSize,
                              decoration: AppDecoration.outlineGray.copyWith(
                                borderRadius: BorderRadiusStyle.circleBorder21,
                              ),
                              child: CustomImageView(
                                imagePath: AppImages.imageNotFound,
                                height: 40.v,
                                width: 20.h,
                                alignment: Alignment.centerRight,
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    SizedBox(height: 12.v),
                    Opacity(
                      opacity: 0.5,
                      child: Text(
                        "lbl_06_14",
                        style: AppTheme.getThemeData.textTheme.bodySmall,
                      ),
                    )
                  ],
                ),
              ),
              Container(
                height: 42.adaptSize,
                width: 42.adaptSize,
                margin: EdgeInsets.only(bottom: 27.v),
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    Align(
                      alignment: Alignment.center,
                      child: Text(
                        "lbl_0",
                        style: AppTheme.getThemeData.textTheme.bodyMedium,
                      ),
                    ),
                    // CustomIconButton(
                    //   height: 42.adaptSize,
                    //   width: 42.adaptSize,
                    //   padding: EdgeInsets.all(1.h),
                    //   decoration: IconButtonStyleHelper.outlineRed,
                    //   alignment: Alignment.center,
                    //   child: CustomImageView(
                    //     imagePath: ImageConstant.imgGroup10046,
                    //   ),
                    // )
                  ],
                ),
              ),
              // Padding(
              //   padding: EdgeInsets.only(bottom: 1.v),
              //   child: _buildDate7(
              //     context,
              //     contrastImage: ImageConstant.imgContrastGray800,
              //     numberText: "lbl_6",
              //     todayText: "lbl_06_15",
              //   ),
              // ),
              Padding(
                padding: EdgeInsets.only(bottom: 27.v),
                child: _buildStackcontrast(
                  context,
                  textValue: "lbl_5",
                ),
              ),
              Padding(
                padding: EdgeInsets.only(bottom: 1.v),
                child: Column(
                  children: [
                    Card(
                      clipBehavior: Clip.antiAlias,
                      elevation: 0,
                      margin: EdgeInsets.all(0),
                      shape: RoundedRectangleBorder(
                        side: BorderSide(
                          color: Palette.gray800,
                          width: 3.h,
                        ),
                        borderRadius: BorderRadiusStyle.circleBorder21,
                      ),
                      child: Container(
                        height: 42.adaptSize,
                        width: 42.adaptSize,
                        decoration: AppDecoration.outlineGray.copyWith(
                          borderRadius: BorderRadiusStyle.circleBorder21,
                        ),
                        child: Stack(
                          alignment: Alignment.center,
                          children: [
                            CustomImageView(
                              imagePath: AppImages.imageNotFound,
                              height: 32.v,
                              width: 21.h,
                              alignment: Alignment.topRight,
                            ),
                            Align(
                              alignment: Alignment.center,
                              child: Text(
                                "lbl_4",
                                style:
                                    AppTheme.getThemeData.textTheme.bodyMedium,
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                    SizedBox(height: 12.v),
                    Opacity(
                      opacity: 0.5,
                      child: Text(
                        "lbl_06_16",
                        style: AppTheme.getThemeData.textTheme.bodySmall,
                      ),
                    )
                  ],
                ),
              ),
              Card(
                clipBehavior: Clip.antiAlias,
                elevation: 0,
                margin: EdgeInsets.only(bottom: 27.v),
                shape: RoundedRectangleBorder(
                  side: BorderSide(
                    color: Palette.gray800,
                    width: 3.h,
                  ),
                  borderRadius: BorderRadiusStyle.circleBorder21,
                ),
                child: Container(
                  height: 42.adaptSize,
                  width: 42.adaptSize,
                  decoration: AppDecoration.outlineGray.copyWith(
                    borderRadius: BorderRadiusStyle.circleBorder21,
                  ),
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      CustomImageView(
                        // imagePath: ImageConstant.imgContrastGray80040x40,
                        height: 40.adaptSize,
                        width: 40.adaptSize,
                        alignment: Alignment.center,
                      ),
                      Align(
                        alignment: Alignment.center,
                        child: Text(
                          "lbl_9",
                          style: AppTheme.getThemeData.textTheme.bodyMedium,
                        ),
                      )
                    ],
                  ),
                ),
              ),
              // _buildDate7(
              //   context,
              // contrastImage: ImageConstant.imgContrastPrimary,
              //   numberText: "lbl_10",
              //   todayText: "lbl_today",
              // )
            ],
          ),
          SizedBox(height: 2.v)
        ],
      ),
    );
  }

  /// Section Widget
  Widget _buildRowUserOne(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(6.h),
      decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
        borderRadius: BorderRadiusStyle.roundedBorder12,
      ),
      child: Row(
        children: [
          // CustomIconButton(
          //   height: 38.adaptSize,
          //   width: 38.adaptSize,
          //   padding: EdgeInsets.all(8.h),
          //   child: CustomImageView(
          //     imagePath: ImageConstant.imgUserPrimary,
          //   ),
          // ),
          Padding(
            padding: EdgeInsets.only(
              left: 14.h,
              top: 10.v,
              bottom: 5.v,
            ),
            child: Text(
              "lbl_longest_streak",
              style: AppTheme.getThemeData.textTheme.titleMedium,
            ),
          ),
          Spacer(),
          Padding(
            padding: EdgeInsets.only(
              top: 10.v,
              bottom: 5.v,
            ),
            child: Text(
              "lbl_20_days",
              style: AppTheme.getThemeData.textTheme.titleMedium,
            ),
          ),
          CustomImageView(
            // imagePath: ImageConstant.imgVector137,
            height: 10.v,
            width: 4.h,
            margin: EdgeInsets.fromLTRB(10.h, 14.v, 14.h, 14.v),
          )
        ],
      ),
    );
  }

  /// Section Widget
  Widget _buildBottomBar(BuildContext context) {
    return SizedBox(
      child: SizedBox(
        height: 124.v,
        width: double.maxFinite,
        child: Stack(
          alignment: Alignment.topCenter,
          children: [
            CustomImageView(
              // imagePath: ImageConstant.imgMenu1,
              height: 80.v,
              width: 414.h,
              alignment: Alignment.bottomCenter,
            ),
            CustomImageView(
              // imagePath: ImageConstant.imgPlusButton,
              height: 64.adaptSize,
              width: 64.adaptSize,
              alignment: Alignment.topCenter,
            )
          ],
        ),
      ),
    );
  }

  /// Common widget
  Widget _buildStackcontrast(
    BuildContext context, {
    required String textValue,
  }) {
    return Card(
      clipBehavior: Clip.antiAlias,
      elevation: 0,
      margin: EdgeInsets.all(0),
      shape: RoundedRectangleBorder(
        side: BorderSide(
          color: Palette.gray800,
          width: 3.h,
        ),
        borderRadius: BorderRadiusStyle.circleBorder21,
      ),
      child: Container(
        height: 42.adaptSize,
        width: 42.adaptSize,
        decoration: AppDecoration.outlineGray.copyWith(
          borderRadius: BorderRadiusStyle.circleBorder21,
        ),
        child: Stack(
          alignment: Alignment.center,
          children: [
            CustomImageView(
              // imagePath: ImageConstant.imgContrastGray800,
              height: 38.v,
              width: 20.h,
              alignment: Alignment.topRight,
            ),
            Align(
              alignment: Alignment.center,
              child: Text(
                textValue,
                style: AppTheme.getThemeData.textTheme.bodyMedium!.copyWith(
                  color: Palette.gray800,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  /// Common widget
  Widget _buildDate7(
    BuildContext context, {
    required String contrastImage,
    required String numberText,
    required String todayText,
  }) {
    return Column(
      children: [
        Card(
          clipBehavior: Clip.antiAlias,
          elevation: 0,
          margin: EdgeInsets.all(0),
          shape: RoundedRectangleBorder(
            side: BorderSide(
              color: AppTheme.getThemeData.colorScheme.primary,
              width: 3.h,
            ),
            borderRadius: BorderRadiusStyle.circleBorder21,
          ),
          child: Container(
            height: 42.adaptSize,
            width: 42.adaptSize,
            decoration: AppDecoration.outlinePrimary.copyWith(
              borderRadius: BorderRadiusStyle.circleBorder21,
            ),
            child: Stack(
              alignment: Alignment.center,
              children: [
                CustomImageView(
                  imagePath: contrastImage,
                  height: 40.v,
                  width: 20.h,
                  alignment: Alignment.centerRight,
                ),
                Align(
                  alignment: Alignment.center,
                  child: Text(
                    numberText,
                    style: AppTheme.getThemeData.textTheme.bodyMedium?.copyWith(
                      color: AppTheme.getThemeData.colorScheme.primary,
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
        SizedBox(height: 13.v),
        Opacity(
          opacity: 0.5,
          child: Text(
            todayText,
            style: AppTheme.getThemeData.textTheme.bodySmall?.copyWith(
              color: Palette.gray800.withOpacity(0.53),
            ),
          ),
        )
      ],
    );
  }
}
