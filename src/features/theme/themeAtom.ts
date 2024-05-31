import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/vanilla/utils';

export type ThemeType = 'light' | 'dark';
// export const themeAtom = atom<ThemeType>('light');
export const themeAtom = atomWithStorage<ThemeType>(
    'theme',
    'light'
);
