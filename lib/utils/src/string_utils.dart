part of utils;

/// Extension on [String] to provide various string manipulation functionalities.
extension StringCasingExtension on String {
  /// Converts the first character of the string to uppercase and the rest to lowercase.
  String toCapitalized() =>
      isNotEmpty ? '${this[0].toUpperCase()}${substring(1).toLowerCase()}' : '';

  /// Converts each word's first character to uppercase and the rest to lowercase.
  String toTitleCase() => replaceAll(RegExp(' +'), ' ')
      .split(' ')
      .map((str) => str.toCapitalized())
      .join(' ');

  /// Removes all symbols from the string, leaving only alphanumeric characters.
  String removeSymbols() => replaceAll(RegExp(r'[^a-zA-Z0-9]'), '');

  /// Formats the string as a number with commas.
  String formatWithCommas() =>
      NumberFormat("#,##0", "en_US").format(num.tryParse(this) ?? 0);

  /// Formats the string number into a readable format with K, M, B, or T suffixes.
  String formatNumber() {
    final value = double.tryParse(this) ?? 0;
    if (value >= 1e12) {
      return '${(value / 1e12).toStringAsFixed(1)}T';
    } else if (value >= 1e9) {
      return '${(value / 1e9).toStringAsFixed(1)}B';
    } else if (value >= 1e6) {
      return '${(value / 1e6).toStringAsFixed(1)}M';
    } else if (value >= 1e3) {
      return '${(value / 1e3).toStringAsFixed(1)}K';
    } else {
      return formatWithCommas();
    }
  }

  /// Parses the string to a number, removing any non-numeric characters.
  num getNum() => num.tryParse(replaceAll(RegExp(r'[^0-9]'), '')) ?? 0;
}

/// Extension on [String] to provide validation functionalities.
extension AppValidations on String {
  /// Validates the string as an email address.
  String? validateEmail() {
    final regex = RegExp(
        r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+");
    if (isEmpty) {
      return 'Field cannot be empty';
    } else if (!regex.hasMatch(this)) {
      return 'Please enter a valid email';
    }
    return null;
  }

  /// Validates the string is not empty after trimming.
  String? validateNotEmpty() => trim().isEmpty ? 'Required Field' : null;

  /// Validates the string length is equal to the specified [max] length.
  String? validateNumber(int max) =>
      length == max ? null : 'Number should be equal to $max digits';

  /// Validates the string as a password according to specified rules.
  String? validatePassword() {
    final RegExp passwordRegex =
        RegExp(r'^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$');
    return passwordRegex.hasMatch(this)
        ? null
        : 'Password must be at least 8 characters, including at least one capital letter, one number, and one special symbol';
  }
}

/// Extension on [String] to provide a fast hashing functionality.
extension StringToId on String {
  /// Generates a hash code from the string.
  int fastHash() {
    var hash = BigInt.parse('0xcbf29ce484222325');
    for (var i = 0; i < length; i++) {
      final codeUnit = codeUnitAt(i);
      hash ^= BigInt.from(codeUnit >> 8);
      hash *= BigInt.from(0x100000001b3);
      hash ^= BigInt.from(codeUnit & 0xFF);
      hash *= BigInt.from(0x100000001b3);
    }
    return hash.toInt(); // Convert BigInt back to int
  }
}

extension ParseDateString on String {
  /// Converts a string representing a date into a [DateTime] object.
  ///
  /// The [format] parameter specifies the expected format of the date string.
  /// If not provided, it defaults to 'MM/dd/yyyy'.
  ///
  /// Throws a [FormatException] if the string cannot be parsed as a valid date
  /// according to the specified format.
  DateTime toDate({String format = 'MM/dd/yyyy'}) {
    DateFormat dateFormat = DateFormat(format);
    return dateFormat.parse(this);
  }
}
