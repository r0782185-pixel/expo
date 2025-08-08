import { type ReactElement, type ReactNode } from 'react';
import type { ExtendedNativeTabOptions, NativeTabTriggerProps } from './types';
export declare function NativeTabTrigger(props: NativeTabTriggerProps): null;
export declare function convertTabPropsToOptions({ options, hidden, children, disablePopToTop, disableScrollToTop, }: NativeTabTriggerProps): ExtendedNativeTabOptions;
export declare function isNativeTabTrigger(child: ReactNode, contextKey?: string): child is ReactElement<NativeTabTriggerProps & {
    name: string;
}>;
//# sourceMappingURL=NativeTabTrigger.d.ts.map