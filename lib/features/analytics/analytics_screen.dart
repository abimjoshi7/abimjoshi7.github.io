import 'package:app_essentials/app_essentials.dart';
// import 'package:calendar_date_picker2/calendar_date_picker2.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../core/core.dart';

class AnalyticsScreen extends ConsumerStatefulWidget {
  const AnalyticsScreen({Key? key})
      : super(
          key: key,
        );

  @override
  AnalyticsScreenState createState() => AnalyticsScreenState();
}

class AnalyticsScreenState extends ConsumerState<AnalyticsScreen> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Palette.orange5002,
        appBar: _buildAppBar(context),
        body: SizedBox(
          width: double.maxFinite,
          child: Column(
            children: [
              SizedBox(height: 15.v),
              Expanded(
                child: SingleChildScrollView(
                  child: Padding(
                    padding: EdgeInsets.only(bottom: 5.v),
                    child: Column(
                      children: [
                        _buildRowTeepeeswirly(context),
                        SizedBox(height: 15.v),
                        // _buildCalendar(context),
                        SizedBox(height: 17.v),
                        Container(
                          height: 30.v,
                          width: double.maxFinite,
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              begin: Alignment(0.5, 0),
                              end: Alignment(0.5, 1),
                              colors: [
                                Palette.deepOrange50,
                                Palette.orange5001
                              ],
                            ),
                          ),
                        ),
                        SizedBox(height: 27.v),
                        Opacity(
                          opacity: 0.5,
                          child: Text(
                            "lbl_analytics",
                          ),
                        ),
                        SizedBox(height: 24.v),
                        _buildStackVectorOne(context),
                        SizedBox(height: 24.v),
                        CustomElevatedButton(
                          text: "msg_mark_habit_as_complete",
                          margin: EdgeInsets.symmetric(horizontal: 20.h),
                        ),
                        SizedBox(height: 10.v),
                        CustomElevatedButton(
                          text: "msg_mark_habit_as_missed",
                          margin: EdgeInsets.symmetric(horizontal: 20.h),
                        )
                      ],
                    ),
                  ),
                ),
              )
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
      centerTitle: true,
      title: Text(
        "lbl_read_a_book",
      ),
      actions: [],
    );
  }

  /// Section Widget
  Widget _buildRowTeepeeswirly(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 20.h),
      padding: EdgeInsets.all(12.h),
      decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
        borderRadius: BorderRadiusStyle.roundedBorder12,
      ),
      child: Row(
        mainAxisSize: MainAxisSize.max,
        children: [
          Container(
            height: 75.adaptSize,
            width: 75.adaptSize,
            margin: EdgeInsets.only(bottom: 1.v),
            padding: EdgeInsets.symmetric(
              horizontal: 7.h,
              vertical: 6.v,
            ),
            decoration: AppDecoration.fillPrimary.copyWith(
              borderRadius: BorderRadiusStyle.roundedBorder12,
            ),
            child: CustomImageView(
              // imagePath: ImageConstant.imgTeepeeSwirly,
              height: 63.v,
              width: 60.h,
              alignment: Alignment.center,
            ),
          ),
          Padding(
            padding: EdgeInsets.only(
              left: 20.h,
              top: 6.v,
              bottom: 6.v,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "lbl_read_a_book2",
                ),
                SizedBox(height: 6.v),
                SizedBox(
                  height: 35.v,
                  width: 130.h,
                  child: Stack(
                    alignment: Alignment.topLeft,
                    children: [
                      Align(
                        alignment: Alignment.topRight,
                        child: Opacity(
                          opacity: 0.5,
                          child: Padding(
                            padding: EdgeInsets.only(right: 17.h),
                            child: Text(
                              "lbl_repeat_everyday",
                              style: AppTheme.getThemeData.textTheme.labelLarge,
                            ),
                          ),
                        ),
                      ),
                      CustomImageView(
                        // imagePath: ImageConstant.imgGroup,
                        height: 1.adaptSize,
                        width: 1.adaptSize,
                        alignment: Alignment.topLeft,
                        margin: EdgeInsets.only(left: 7.h),
                      ),
                      CustomImageView(
                        // imagePath: ImageConstant.imgGroupOrangeA20001,
                        height: 5.v,
                        width: 9.h,
                        alignment: Alignment.topLeft,
                        margin: EdgeInsets.only(
                          left: 2.h,
                          top: 1.v,
                        ),
                      ),
                      CustomImageView(
                        // imagePath: ImageConstant.imgGroupOrangeA200012x1,
                        height: 2.v,
                        width: 1.h,
                        alignment: Alignment.topLeft,
                        margin: EdgeInsets.only(
                          left: 11.h,
                          top: 6.v,
                        ),
                      ),
                      CustomImageView(
                        // imagePath: ImageConstant.imgGroupOrangeA200012x1,
                        height: 2.v,
                        width: 1.h,
                        alignment: Alignment.topLeft,
                        margin: EdgeInsets.only(
                          left: 2.h,
                          top: 6.v,
                        ),
                      ),
                      CustomImageView(
                        // imagePath: ImageConstant.imgGroup2x1,
                        height: 2.v,
                        width: 1.h,
                        alignment: Alignment.topLeft,
                        margin: EdgeInsets.only(
                          left: 1.h,
                          top: 8.v,
                        ),
                      ),
                      CustomImageView(
                        // imagePath: ImageConstant.imgGroup2x1,
                        height: 2.v,
                        width: 1.h,
                        alignment: Alignment.topLeft,
                        margin: EdgeInsets.only(
                          left: 11.h,
                          top: 8.v,
                        ),
                      ),
                      CustomImageView(
                        // imagePath: ImageConstant.imgGroup,
                        height: 2.v,
                        width: 1.h,
                        alignment: Alignment.topLeft,
                        margin: EdgeInsets.only(
                          left: 2.h,
                          top: 5.v,
                        ),
                      ),
                      CustomImageView(
                        // imagePath: ImageConstant.imgGroup,
                        height: 2.v,
                        width: 1.h,
                        alignment: Alignment.topLeft,
                        margin: EdgeInsets.only(
                          left: 11.h,
                          top: 5.v,
                        ),
                      ),
                      Align(
                        alignment: Alignment.bottomCenter,
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            CustomImageView(
                              // imagePath: ImageConstant.imgGroupOrangeA200011x9,
                              height: 1.v,
                              width: 9.h,
                              margin: EdgeInsets.only(left: 2.h),
                            ),
                            CustomImageView(
                              // imagePath: ImageConstant.imgGroup2x1,
                              height: 2.v,
                              width: 4.h,
                              margin: EdgeInsets.only(left: 5.h),
                            ),
                            SizedBox(height: 5.v),
                            Row(
                              children: [
                                CustomImageView(
                                  // imagePath: ImageConstant.imgRepeatButton1,
                                  height: 13.v,
                                  width: 14.h,
                                  margin: EdgeInsets.only(
                                    top: 1.v,
                                    bottom: 2.v,
                                  ),
                                ),
                                Opacity(
                                  opacity: 0.5,
                                  child: Padding(
                                    padding: EdgeInsets.only(left: 10.h),
                                    child: Text(
                                      "msg_reminders_5_00",
                                      style: AppTheme
                                          .getThemeData.textTheme.labelLarge,
                                    ),
                                  ),
                                )
                              ],
                            )
                          ],
                        ),
                      )
                    ],
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
  // Widget _buildCalendar(BuildContext context) {
  //   return Consumer(
  //     builder: (context, ref, _) {
  //       return SizedBox(
  //         height: 486.v,
  //         width: 374.h,
  //         child: CalendarDatePicker2(
  //           config: CalendarDatePicker2Config(
  //             calendarType: CalendarDatePicker2Type.multi,
  //             firstDate: DateTime(DateTime.now().year - 5),
  //             lastDate: DateTime(DateTime.now().year + 5),
  //             selectedDayHighlightColor: Color(0XFFFFF3E9),
  //             centerAlignModePicker: true,
  //             firstDayOfWeek: 0,
  //             controlsHeight: 22,
  //             weekdayLabelTextStyle: TextStyle(
  //               color: Palette.gray800.withOpacity(0.53),
  //               fontFamily: 'Manrope',
  //               fontWeight: FontWeight.w700,
  //             ),
  //             selectedDayTextStyle: TextStyle(
  //               color: Color(0XFF573353),
  //               fontFamily: 'Manrope',
  //               fontWeight: FontWeight.w700,
  //             ),
  //             controlsTextStyle: TextStyle(
  //               color: Palette.gray800,
  //               fontFamily: 'Manrope',
  //               fontWeight: FontWeight.w700,
  //             ),
  //             disabledDayTextStyle: TextStyle(
  //               color: Palette.gray800.withOpacity(0.46),
  //               fontFamily: 'Manrope',
  //               fontWeight: FontWeight.w700,
  //             ),
  //             weekdayLabels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  //             dayBorderRadius: BorderRadius.circular(
  //               12.h,
  //             ),
  //           ),
  //           value:
  //               ref.watch(analyticsNotifier).selectedDatesFromCalendar1 ?? [],
  //           onValueChanged: (dates) {
  //             ref.watch(analyticsNotifier).selectedDatesFromCalendar1 = dates;
  //           },
  //         ),
  //       );
  //     },
  //   );
  // }

  /// Section Widget
  Widget _buildStackVectorOne(BuildContext context) {
    return Card(
      clipBehavior: Clip.antiAlias,
      elevation: 0,
      margin: EdgeInsets.all(0),
      color: AppTheme.getThemeData.colorScheme.onPrimaryContainer,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadiusStyle.roundedBorder12,
      ),
      child: Container(
        height: 184.v,
        width: 374.h,
        decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
          borderRadius: BorderRadiusStyle.roundedBorder12,
        ),
        child: Stack(
          alignment: Alignment.center,
          children: [
            CustomImageView(
              // imagePath: ImageConstant.imgVectorOrange5001,
              height: 1.v,
              width: 374.h,
              alignment: Alignment.center,
            ),
            Align(
              alignment: Alignment.center,
              child: Container(
                height: 184.v,
                width: 1.h,
                decoration: BoxDecoration(
                  color: Palette.orange5001,
                ),
              ),
            ),
            Align(
              alignment: Alignment.topRight,
              child: Padding(
                padding: EdgeInsets.only(
                  top: 24.v,
                  right: 19.h,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "lbl_0_days",
                          style: AppTheme.getThemeData.textTheme.headlineSmall,
                        ),
                        SizedBox(height: 3.v),
                        Opacity(
                          opacity: 0.5,
                          child: Text(
                            "lbl_current_streak",
                            style: AppTheme.getThemeData.textTheme.labelLarge,
                          ),
                        )
                      ],
                    ),
                    // Padding(
                    //   padding: EdgeInsets.only(
                    //     left: 31.h,
                    //     top: 2.v,
                    //   ),
                    //   child: CustomIconButton(
                    //     height: 38.adaptSize,
                    //     width: 38.adaptSize,
                    //     padding: EdgeInsets.all(8.h),
                    //     decoration: IconButtonStyleHelper.fillRedTL19,
                    //     child: CustomImageView(
                    //       imagePath: ImageConstant.imgCloseRed400,
                    //     ),
                    //   ),
                    // )
                  ],
                ),
              ),
            ),
            Align(
              alignment: Alignment.topLeft,
              child: Padding(
                padding: EdgeInsets.only(
                  left: 19.h,
                  top: 23.v,
                ),
                child: Row(
                  children: [
                    Column(
                      children: [
                        Text(
                          "lbl_20_days",
                          style: AppTheme.getThemeData.textTheme.headlineSmall,
                        ),
                        SizedBox(height: 4.v),
                        Opacity(
                          opacity: 0.5,
                          child: Text(
                            "lbl_longest_streak",
                            style: AppTheme.getThemeData.textTheme.labelLarge,
                          ),
                        )
                      ],
                    ),
                    // Padding(
                    //   padding: EdgeInsets.only(
                    //     left: 30.h,
                    //     top: 3.v,
                    //     bottom: 2.v,
                    //   ),
                    //   child: CustomIconButton(
                    //     height: 38.adaptSize,
                    //     width: 38.adaptSize,
                    //     padding: EdgeInsets.all(9.h),
                    //     decoration: IconButtonStyleHelper.fillPrimary,
                    //     child: CustomImageView(
                    //       imagePath: ImageConstant.imgFire,
                    //     ),
                    //   ),
                    // )
                  ],
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomLeft,
              child: Padding(
                padding: EdgeInsets.only(
                  left: 19.h,
                  bottom: 24.v,
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding: EdgeInsets.only(top: 1.v),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "lbl_98",
                            style:
                                AppTheme.getThemeData.textTheme.headlineSmall,
                          ),
                          SizedBox(height: 4.v),
                          Opacity(
                            opacity: 0.5,
                            child: Text(
                              "lbl_completion_rate",
                              style: AppTheme.getThemeData.textTheme.labelLarge,
                            ),
                          )
                        ],
                      ),
                    ),
                    // Padding(
                    //   padding: EdgeInsets.only(
                    //     left: 21.h,
                    //     bottom: 7.v,
                    //   ),
                    //   child: CustomIconButton(
                    //     height: 38.adaptSize,
                    //     width: 38.adaptSize,
                    //     padding: EdgeInsets.all(9.h),
                    //     decoration: IconButtonStyleHelper.fillOnPrimaryTL19,
                    //     child: CustomImageView(
                    //       imagePath: ImageConstant.imgSettings,
                    //     ),
                    //   ),
                    // )
                  ],
                ),
              ),
            ),
            Align(
              alignment: Alignment.bottomRight,
              child: Padding(
                padding: EdgeInsets.only(
                  right: 19.h,
                  bottom: 19.v,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "lbl_7",
                          style: AppTheme.getThemeData.textTheme.headlineSmall,
                        ),
                        SizedBox(height: 3.v),
                        Opacity(
                          opacity: 0.5,
                          child: SizedBox(
                            width: 93.h,
                            child: Text(
                              "msg_average_easiness",
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                              style: AppTheme.getThemeData.textTheme.labelLarge!
                                  .copyWith(
                                height: 1.08,
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                    // Padding(
                    //   padding: EdgeInsets.only(
                    //     left: 16.h,
                    //     top: 4.v,
                    //     bottom: 12.v,
                    //   ),
                    //   child: CustomIconButton(
                    //     height: 38.adaptSize,
                    //     width: 38.adaptSize,
                    //     padding: EdgeInsets.all(10.h),
                    //     decoration:
                    //         IconButtonStyleHelper.fillOnSecondaryContainerTL19,
                    //     child: CustomImageView(
                    //       imagePath: ImageConstant.imgUserOnsecondarycontainer,
                    //     ),
                    //   ),
                    // )
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
  Widget _buildBottomBar(BuildContext context) {
    return SizedBox(
      child: SizedBox(
        height: 127.v,
        width: double.maxFinite,
        child: Stack(
          alignment: Alignment.topCenter,
          children: [
            CustomImageView(
              // imagePath: ImageConstant.imgMenuOnprimarycontainer80x414,
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
}
