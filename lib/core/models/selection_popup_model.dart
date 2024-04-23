class SelectionPopupModel {
  SelectionPopupModel({
    required this.title,
    this.id,
    this.value,
    this.isSelected = false,
  });

  int? id;

  String title;

  dynamic value;

  bool isSelected;
}
