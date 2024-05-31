'use client';
import { useAtomValue } from 'jotai';
import { themeAtom } from './themeAtom';

export const useTheme = () => {
    const theme = useAtomValue(themeAtom);

    return theme;
};
