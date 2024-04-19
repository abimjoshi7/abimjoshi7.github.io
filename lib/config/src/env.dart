part of configuration;

abstract class Env {
  Env() {
    _init();
  }

  void _init() {
    if (kReleaseMode) {
      // Used to prevent printing in release mode
      debugPrint = (String? message, {int? wrapWidth}) {};
    }

    runZonedGuarded(() async {
      WidgetsFlutterBinding.ensureInitialized();

      BuildConfig.init(flavor: const String.fromEnvironment('flavor'));

      Themes.initUiOverlayStyle();

      usePathUrlStrategy();

      await dotenv.load(fileName: 'supabase.env');
      final supabaseUrl = dotenv.get('SUPABASE_URL');
      final supabaseKey = dotenv.get('SUPABASE_KEY');

      await Supabase.initialize(url: supabaseUrl, anonKey: supabaseKey,);
      final app = await onCreate();

      runApp(
        ProviderScope(
          child: app,
        ),
      );
    }, (obj, stack) {
      debugPrint(obj.toString());
      debugPrint(stack.toString());
    });
  }

  FutureOr<HookConsumerWidget> onCreate();
}
