import 'package:achieve/core/core.dart';
import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import 'notifier/homepage_new_habit_notifier.dart';

class HomepageNewHabitScreen extends ConsumerStatefulWidget {
  const HomepageNewHabitScreen({Key? key})
      : super(
          key: key,
        );

  @override
  HomepageNewHabitScreenState createState() => HomepageNewHabitScreenState();
}
// ignore_for_file: must_be_immutable

// ignore_for_file: must_be_immutable
class HomepageNewHabitScreenState
    extends ConsumerState<HomepageNewHabitScreen> {
  GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Palette.orange5002,
        resizeToAvoidBottomInset: false,
        appBar: _buildAppBar(context),
        body: SizedBox(
          width: SizeUtils.width,
          child: SingleChildScrollView(
            padding: EdgeInsets.only(
              bottom: MediaQuery.of(context).viewInsets.bottom,
            ),
            child: Form(
              key: _formKey,
              child: SizedBox(
                height: 679.v,
                width: double.maxFinite,
                child: Stack(
                  alignment: Alignment.topRight,
                  children: [
                    _buildColumnOne(context),
                    Align(
                      alignment: Alignment.topRight,
                      child: Container(
                        height: 76.v,
                        width: 117.h,
                        margin: EdgeInsets.only(top: 237.v),
                        decoration: BoxDecoration(
                            // image: DecorationImage(
                            //   image: AssetImage(
                            //     ImageConstant.imgGroup61,
                            //   ),
                            //   fit: BoxFit.cover,
                            // ),
                            ),
                        child: CustomImageView(
                          // imagePath: ImageConstant.imgMaskGroup76x117,
                          height: 76.v,
                          width: 117.h,
                          alignment: Alignment.center,
                        ),
                      ),
                    ),
                    Align(
                      alignment: Alignment.bottomLeft,
                      child: Container(
                        height: 45.adaptSize,
                        width: 45.adaptSize,
                        margin: EdgeInsets.only(bottom: 232.v),
                        decoration: BoxDecoration(
                          color: Palette.orange100,
                          borderRadius: BorderRadius.circular(
                            22.h,
                          ),
                        ),
                      ),
                    ),
                    Align(
                      alignment: Alignment.bottomLeft,
                      child: Container(
                        height: 36.v,
                        width: 73.h,
                        margin: EdgeInsets.only(
                          left: 9.h,
                          bottom: 232.v,
                        ),
                        decoration: BoxDecoration(
                          color: Palette.orange100,
                        ),
                      ),
                    ),
                    CustomImageView(
                      // imagePath: ImageConstant.imgMaskGroup58x104,
                      height: 58.v,
                      width: 104.h,
                      alignment: Alignment.bottomLeft,
                      margin: EdgeInsets.only(bottom: 233.v),
                    ),
                    Align(
                      alignment: Alignment.center,
                      child: Padding(
                        padding: EdgeInsets.symmetric(horizontal: 16.h),
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            _buildHabitName(context),
                            SizedBox(height: 9.v),
                            // _buildCalendar(context),
                            SizedBox(height: 8.v),
                            _buildRowReminder(context),
                            SizedBox(height: 11.v),
                            _buildRowNotification(context),
                            SizedBox(height: 63.v),
                            SizedBox(
                              height: 58.v,
                              width: 89.h,
                              child: Stack(
                                alignment: Alignment.bottomRight,
                                children: [
                                  Align(
                                    alignment: Alignment.centerLeft,
                                    child: Container(
                                      height: 58.adaptSize,
                                      width: 58.adaptSize,
                                      decoration: BoxDecoration(
                                        color: Palette.orange100,
                                        borderRadius: BorderRadius.circular(
                                          29.h,
                                        ),
                                      ),
                                    ),
                                  ),
                                  Align(
                                    alignment: Alignment.bottomRight,
                                    child: Container(
                                      height: 45.adaptSize,
                                      width: 45.adaptSize,
                                      decoration: BoxDecoration(
                                        color: Palette.orange100,
                                        borderRadius: BorderRadius.circular(
                                          22.h,
                                        ),
                                      ),
                                    ),
                                  )
                                ],
                              ),
                            ),
                            _buildMessagePopup(context)
                          ],
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
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
        "lbl_new_habit",
      ),
    );
  }

  /// Section Widget
  Widget _buildColumnOne(BuildContext context) {
    return Align(
      alignment: Alignment.bottomCenter,
      child: Container(
        decoration: BoxDecoration(
            // image: DecorationImage(
            //   image: AssetImage(
            //     ImageConstant.imgGroup54,
            //   ),
            //   fit: BoxFit.cover,
            // ),
            ),
        child: Container(
          decoration: BoxDecoration(
              // image: DecorationImage(
              //   image: AssetImage(
              //     ImageConstant.imgGroup69,
              //   ),
              //   fit: BoxFit.cover,
              // ),
              ),
          child: Opacity(
            opacity: 0.5,
            child: CustomImageView(
              // imagePath: ImageConstant.imgMaskGroup166x414,
              height: 166.v,
              width: 414.h,
            ),
          ),
        ),
      ),
    );
  }

  /// Section Widget
  Widget _buildHabitName(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(left: 4.h),
      child: Row(
        children: [
          Expanded(
            child: Padding(
              padding: EdgeInsets.only(top: 4.v),
              child: Consumer(
                builder: (context, ref, _) {
                  return CustomTextFormField(
                    controller:
                        ref.watch(homepageNewHabitNotifier).nameController,
                    hintText: "msg_enter_habit_name",
                    textInputAction: TextInputAction.done,
                    validator: (value) {
                      // if (!isText(value)) {
                      //   return "err_msg_please_enter_valid_text";
                      // }
                      return null;
                    },
                    borderDecoration:
                        TextFormFieldStyleHelper.fillOnPrimaryContainer,
                    filled: true,
                    fillColor:
                        AppTheme.getThemeData.colorScheme.onPrimaryContainer,
                  );
                },
              ),
            ),
          ),
          Container(
            height: 53.v,
            width: 52.h,
            margin: EdgeInsets.only(left: 12.h),
            child: Stack(
              alignment: Alignment.topRight,
              children: [
                Align(
                  alignment: Alignment.bottomLeft,
                  child: IconButton(
                    onPressed: () {},
                    constraints: BoxConstraints(
                      minHeight: 48.v,
                      minWidth: 48.h,
                    ),
                    padding: EdgeInsets.all(0),
                    icon: SizedBox(
                      width: 48.h,
                      height: 49.v,
                      child: CustomImageView(
                        imagePath: AppImages.imageNotFound,
                      ),
                    ),
                  ),
                ),
                // CustomIconButton(
                //   height: 20.adaptSize,
                //   width: 20.adaptSize,
                //   padding: EdgeInsets.all(1.h),
                //   alignment: Alignment.topRight,
                //   child: CustomImageView(
                //     imagePath: ImageConstant.imgAkarIconsCirclePlusFill,
                //   ),
                // ),
                CustomImageView(
                  imagePath: AppImages.imageNotFound,
                  height: 35.adaptSize,
                  width: 35.adaptSize,
                  alignment: Alignment.bottomLeft,
                  margin: EdgeInsets.only(
                    left: 7.h,
                    bottom: 7.v,
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
  //       return Container(
  //         height: 133.v,
  //         width: 374.h,
  //         margin: EdgeInsets.only(left: 4.h),
  //         child: CalendarDatePicker2(
  //           config: CalendarDatePicker2Config(
  //             calendarType: CalendarDatePicker2Type.single,
  //             firstDate: DateTime(DateTime.now().year - 5),
  //             lastDate: DateTime(DateTime.now().year + 5),
  //             firstDayOfWeek: 0,
  //             weekdayLabelTextStyle: TextStyle(
  //               color: appTheme.gray800.withOpacity(0.53),
  //               fontFamily: 'Manrope',
  //               fontWeight: FontWeight.w700,
  //             ),
  //             weekdayLabels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  //           ),
  //           value: ref
  //                   .watch(homepageNewHabitNotifier)
  //                   .selectedDatesFromCalendar1 ??
  //               [],
  //           onValueChanged: (dates) {
  //             ref.watch(homepageNewHabitNotifier).selectedDatesFromCalendar1 =
  //                 dates;
  //           },
  //         ),
  //       );
  //     },
  //   );
  // }

  /// Section Widget
  Widget _buildRowReminder(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(
        left: 4.h,
        right: 3.h,
      ),
      padding: EdgeInsets.symmetric(
        horizontal: 20.h,
        vertical: 13.v,
      ),
      decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
        borderRadius: BorderRadiusStyle.roundedBorder12,
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            "lbl_reminder",
            style: AppTheme.getThemeData.textTheme.titleMedium,
          ),
          Spacer(),
          Text(
            "lbl_10_00am",
            style: AppTheme.getThemeData.textTheme.titleLarge,
          ),
          CustomImageView(
            imagePath: AppImages.imageNotFound,
            height: 10.v,
            width: 4.h,
            margin: EdgeInsets.only(
              left: 10.h,
              top: 6.v,
              bottom: 6.v,
            ),
          )
        ],
      ),
    );
  }

  /// Section Widget
  Widget _buildRowNotification(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(
        left: 4.h,
        right: 3.h,
      ),
      padding: EdgeInsets.symmetric(
        horizontal: 20.h,
        vertical: 10.v,
      ),
      decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
        borderRadius: BorderRadiusStyle.roundedBorder12,
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Padding(
            padding: EdgeInsets.only(
              top: 4.v,
              bottom: 3.v,
            ),
            child: Text(
              "lbl_notification",
              style: AppTheme.getThemeData.textTheme.titleMedium,
            ),
          ),
          Container(
            padding: EdgeInsets.all(4.h),
            decoration: AppDecoration.fillGray.copyWith(
              borderRadius: BorderRadiusStyle.circleBorder15,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  height: 22.adaptSize,
                  width: 22.adaptSize,
                  decoration: BoxDecoration(
                    color: Palette.gray800,
                    borderRadius: BorderRadius.circular(
                      11.h,
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: Palette.gray800.withOpacity(0.5),
                        spreadRadius: 2.h,
                        blurRadius: 2.h,
                        offset: Offset(
                          -2,
                          3,
                        ),
                      )
                    ],
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(
                    left: 6.h,
                    top: 3.v,
                    bottom: 4.v,
                  ),
                  child: Text(
                    "lbl_off",
                    style: AppTheme.getThemeData.textTheme.labelMedium,
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
  Widget _buildMessagePopup(BuildContext context) {
    return Container(
      height: 217.v,
      width: 374.h,
      margin: EdgeInsets.only(left: 4.h),
      child: Stack(
        alignment: Alignment.topRight,
        children: [
          Align(
            alignment: Alignment.bottomCenter,
            child: Container(
              padding: EdgeInsets.symmetric(
                horizontal: 48.h,
                vertical: 20.v,
              ),
              decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
                borderRadius: BorderRadiusStyle.roundedBorder12,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  SizedBox(height: 35.v),
                  Text(
                    "msg_start_this_habit".toUpperCase(),
                    style: AppTheme.getThemeData.textTheme.headlineSmall,
                  ),
                  SizedBox(height: 4.v),
                  Opacity(
                    opacity: 0.5,
                    child: SizedBox(
                      width: 274.h,
                      child: Text(
                        "msg_ullamco_laboris",
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.center,
                        style: AppTheme.getThemeData.textTheme.bodyMedium
                            ?.copyWith(
                          height: 1.29,
                        ),
                      ),
                    ),
                  ),
                  SizedBox(height: 13.v),
                  CustomImageView(
                    imagePath: AppImages.imageNotFound,
                    height: 25.v,
                    width: 19.h,
                  )
                ],
              ),
            ),
          ),
          Align(
            alignment: Alignment.topRight,
            child: Padding(
              padding: EdgeInsets.only(
                left: 152.h,
                right: 22.h,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  CustomImageView(
                    imagePath: AppImages.imageNotFound,
                    height: 70.adaptSize,
                    width: 70.adaptSize,
                    radius: BorderRadius.circular(
                      35.h,
                    ),
                  ),
                  SizedBox(height: 5.v),
                  Align(
                    alignment: Alignment.centerRight,
                    child: SizedBox(
                      height: 35.v,
                      width: 69.h,
                      child: Stack(
                        alignment: Alignment.center,
                        children: [
                          // CustomImageView(
                          //   imagePath: ImageConstant.imgUnion,
                          //   height: 34.v,
                          //   width: 69.h,
                          //   alignment: Alignment.center,
                          // ),
                          // CustomImageView(
                          //   imagePath: ImageConstant.imgMaskGroup34x68,
                          //   height: 34.v,
                          //   width: 68.h,
                          //   alignment: Alignment.center,
                          // )
                        ],
                      ),
                    ),
                  )
                ],
              ),
            ),
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
              imagePath: AppImages.imageNotFound,
              height: 80.v,
              width: 414.h,
              alignment: Alignment.bottomCenter,
            ),
            CustomImageView(
              imagePath: AppImages.imageNotFound,
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
