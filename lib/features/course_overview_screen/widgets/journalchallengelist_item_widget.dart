import 'package:app_essentials/app_essentials.dart';
import 'package:flutter/material.dart';

import '../models/journalchallengelist_item_model.dart'; // ignore: must_be_immutable
// ignore_for_file: must_be_immutable

// ignore_for_file: must_be_immutable
class JournalchallengelistItemWidget extends StatelessWidget {
  JournalchallengelistItemWidget(this.journalchallengelistItemModelObj,
      {Key? key})
      : super(
          key: key,
        );

  JournalchallengelistItemModel journalchallengelistItemModelObj;

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.topCenter,
      child: SizedBox(
        height: 274.v,
        width: 374.h,
        child: Stack(
          alignment: Alignment.topCenter,
          children: [
            Align(
              alignment: Alignment.center,
              child: Container(
                margin: EdgeInsets.only(top: 1.v),
                padding: EdgeInsets.symmetric(
                  horizontal: 12.h,
                  vertical: 7.v,
                ),
                decoration: AppDecoration.fillOnPrimaryContainer.copyWith(
                  borderRadius: BorderRadiusStyle.roundedBorder12,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Expanded(
                      child: Padding(
                        padding: EdgeInsets.only(top: 166.v),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(
                              width: 309.h,
                              child: Text(
                                journalchallengelistItemModelObj.title!,
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                style: AppTheme
                                    .getThemeData.textTheme.titleMedium
                                    ?.copyWith(
                                  height: 1.39,
                                ),
                              ),
                            ),
                            SizedBox(height: 3.v),
                            Text(
                              journalchallengelistItemModelObj.duration!,
                            ),
                            SizedBox(height: 1.v),
                            Opacity(
                              opacity: 0.5,
                              child: Text(
                                journalchallengelistItemModelObj.lessons!,
                                style:
                                    AppTheme.getThemeData.textTheme.labelLarge,
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                    // Padding(
                    //   padding: EdgeInsets.only(
                    //     left: 8.h,
                    //     top: 223.v,
                    //     bottom: 2.v,
                    //   ),
                    //   child: CustomIconButton(
                    //     height: 32.adaptSize,
                    //     width: 32.adaptSize,
                    //     padding: EdgeInsets.all(9.h),
                    //     decoration: IconButtonStyleHelper.fillGray,
                    //     child: CustomImageView(
                    //       imagePath:
                    //           journalchallengelistItemModelObj.bookmarkIcon!,
                    //     ),
                    //   ),
                    // )
                  ],
                ),
              ),
            ),
            // CustomImageView(
            //   imagePath: journalchallengelistItemModelObj.challengeImage!,
            //   height: 166.v,
            //   width: 374.h,
            //   radius: BorderRadius.vertical(
            //     top: Radius.circular(12.h),
            //   ),
            //   alignment: Alignment.topCenter,
            // )
          ],
        ),
      ),
    );
  }
}
