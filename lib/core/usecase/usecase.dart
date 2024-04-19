
import 'package:fpdart/fpdart.dart';

abstract class UseCase<T, P> {
  Future<Either<T, Exception>> call({required P params});
}
