import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { Provider, useDispatch } from 'react-redux';
import { setUserData } from '../global/userData/actions';
import store from '../global/store';
import { generateLoggedUserData, generateUsersData } from '../global/testDataGenerator';
import { setFeedData } from '../global/feedData/action';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    CenturyGothic: require('../assets/fonts/CenturyGothic/CenturyGothicRegular.otf'),
    CenturyGothicBold: require('../assets/fonts/CenturyGothic/CenturyGothicBoldRegular.otf'),
    Gally: require('../assets/fonts/Gally/Gally.otf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <Provider store={store}><RootLayoutNav /></Provider>}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    // Load redux store
    const testUserData = generateUsersData();
    const loggedUserData = generateLoggedUserData();
    dispatch(setUserData(loggedUserData));
    dispatch(setFeedData(testUserData));
  }, [dispatch]);

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="chat" options={{ title: 'Chat' }} />
        </Stack>
      </ThemeProvider>
    </>
  );
}
