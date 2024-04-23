import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../../core/widgets/custom_app_bar.dart';
import '../../core/widgets/custom_drop_down.dart';
import '../../core/widgets/custom_image_view.dart';
import 'models/journalchallengelist_item_model.dart';
import 'notifier/course_overview_notifier.dart';
import 'widgets/journalchallengelist_item_widget.dart';

class CourseOverviewScreen extends ConsumerStatefulWidget {
  const CourseOverviewScreen({Key? key})
      : super(
          key: key,
        );

  @override
  CourseOverviewScreenState createState() => CourseOverviewScreenState();
}

class CourseOverviewScreenState extends ConsumerState<CourseOverviewScreen> {
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
              SizedBox(height: 32.v),
              Expanded(
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      _buildHabitStack(context),
                      SizedBox(height: 24.v),
                      _buildFilterRow(context),
                      SizedBox(height: 16.v),
                      SizedBox(
                        height: 687.v,
                        width: double.maxFinite,
                        child: Stack(
                          alignment: Alignment.topCenter,
                          children: [
                            _buildColumnOne(context),
                            _buildJournalChallengeList(context)
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
        bottomNavigationBar: _buildBottombar(context),
      ),
    );
  }

  /// Section Widget
  PreferredSizeWidget _buildAppBar(BuildContext context) {
    return CustomAppBar(
      leadingWidth: 74.h,
      // leading: AppbarLeadingIconbuttonOne(
      //   imagePath: ImageConstant.imgIcons,
      //   margin: EdgeInsets.only(left: 10.h),
      // ),
      centerTitle: true,
      title: Text(
        "lbl_courses",
      ),
      actions: [
        // AppbarTrailingIconbuttonOne(
        //   imagePath: ImageConstant.imgGroup402,
        //   margin: EdgeInsets.fromLTRB(27.h, 11.v, 27.h, 10.v),
        // )
      ],
    );
  }

  /// Section Widget
  Widget _buildHabitStack(BuildContext context) {
    return SizedBox(
      height: 146.v,
      width: 374.h,
      child: Stack(
        alignment: Alignment.centerLeft,
        children: [
          // CustomImageView(
          //   imagePath: ImageConstant.imgMaskGroup146x374,
          //   height: 146.v,
          //   width: 374.h,
          //   alignment: Alignment.center,
          // ),
          Align(
            alignment: Alignment.centerLeft,
            child: Padding(
              padding: EdgeInsets.only(
                left: 25.h,
                right: 140.h,
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(
                    width: 144.h,
                    child: Text(
                      "lbl_habit_courses".toUpperCase(),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: AppTheme.getThemeData.textTheme.displaySmall,
                    ),
                  ),
                  SizedBox(height: 1.v),
                  SizedBox(
                    width: 208.h,
                    child: Text(
                      "msg_find_what_fascinates",
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      // style: CustomTextStyles.labelLargeGray800_1.copyWith(
                      //   height: 1.50,
                      // ),
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
  Widget _buildFilterRow(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 20.h),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: EdgeInsets.only(
              top: 8.v,
              bottom: 2.v,
            ),
            child: Text(
              "lbl_sort_by",
              style: AppTheme.getThemeData.textTheme.titleMedium,
            ),
          ),
          Padding(
            padding: EdgeInsets.only(left: 4.h),
            child: Consumer(
              builder: (context, ref, _) {
                return CustomDropDown(
                  width: 183.h,
                  icon: Container(
                    margin: EdgeInsets.symmetric(horizontal: 18.h),
                    child: CustomImageView(
                      // imagePath: ImageConstant.imgArrowdown,
                      height: 4.v,
                      width: 10.h,
                    ),
                  ),
                  hintText: "lbl_popular",
                  items: ref
                          .watch(courseOverviewNotifier)
                          .courseOverviewModelObj
                          ?.dropdownItemList ??
                      [],
                );
              },
            ),
          ),
          Padding(
            padding: EdgeInsets.only(left: 21.h),
            child: Consumer(
              builder: (context, ref, _) {
                return CustomDropDown(
                  width: 110.h,
                  icon: Container(
                    margin: EdgeInsets.symmetric(horizontal: 12.h),
                    child: CustomImageView(
                      // imagePath: ImageConstant.imgArrowdownOrangeA20001,
                      height: 4.v,
                      width: 10.h,
                    ),
                  ),
                  hintText: "lbl_filters",
                  items: ref
                          .watch(courseOverviewNotifier)
                          .courseOverviewModelObj
                          ?.dropdownItemList1 ??
                      [],
                );
              },
            ),
          )
        ],
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
  Widget _buildJournalChallengeList(BuildContext context) {
    return Align(
      alignment: Alignment.topCenter,
      child: Padding(
        padding: EdgeInsets.only(bottom: 127.v),
        child: Consumer(
          builder: (context, ref, _) {
            return ListView.separated(
              physics: NeverScrollableScrollPhysics(),
              shrinkWrap: true,
              separatorBuilder: (context, index) {
                return Padding(
                  padding: EdgeInsets.symmetric(vertical: 0.5.v),
                  child: SizedBox(
                    width: 374.h,
                    child: Divider(
                      height: 1.v,
                      thickness: 1.v,
                      color: Palette.orange5001,
                    ),
                  ),
                );
              },
              itemCount: ref
                      .watch(courseOverviewNotifier)
                      .courseOverviewModelObj
                      ?.journalchallengelistItemList
                      .length ??
                  0,
              itemBuilder: (context, index) {
                JournalchallengelistItemModel model = ref
                        .watch(courseOverviewNotifier)
                        .courseOverviewModelObj
                        ?.journalchallengelistItemList[index] ??
                    JournalchallengelistItemModel();
                return JournalchallengelistItemWidget(
                  model,
                );
              },
            );
          },
        ),
      ),
    );
  }

  /// Section Widget
  Widget _buildBottombar(BuildContext context) {
    return SizedBox();
  }
}
