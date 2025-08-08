import { NativeTabsNavigatorWithContext } from './NativeBottomTabsNavigator';
import type { NativeTabsProps } from './types';

export const NativeTabs = (props: NativeTabsProps) => {
  return <NativeTabsNavigatorWithContext {...props} />;
};
