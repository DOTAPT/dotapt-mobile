import { fonts } from './fonts';

export const typography = {
    h1: {
        fontFamily: fonts.inter,
        fontSize: 32,
        lineHeight: 40,
        fontWeight: '700',
    },

    h2: {
        fontFamily: fonts.inter,
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700',
    },

    body: {
        fontFamily: fonts.inter,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
    },

    bodyMedium: {
        fontFamily: fonts.inter,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
    },

    caption: {
        fontFamily: fonts.inter,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },
} as const;
