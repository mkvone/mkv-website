// 'use client';
// import { useTheme } from '@/src/features/theme';
// import stylex from '@stylexjs/stylex';
// import { spacing } from '../../../shared/tokens/spacing.stylex';
// import { text } from '../../../shared/tokens/fonts.stylex';
// import { colors } from '../../../shared/tokens/colors.stylex';
// export const SkeletonCard = () => {
//     const theme = useTheme();

//     return (
//         <div
//             {...stylex.props(
//                 styles.cardContainer(theme),
//                 styles.skeletonCard
//             )}
//         >
//             <div {...stylex.props(styles.skeletonImage)} />
//             <div {...stylex.props(styles.skeletonHeader)} />
//             <div {...stylex.props(styles.skeletonText)} />
//             <div
//                 {...stylex.props(styles.skeletonText)}
//                 style={{ width: '80%' }}
//             />
//         </div>
//     );
// };

// const loading = stylex.keyframes({
//     '0%': {
//         backgroundPosition: '-500px 0',
//     },
//     '100%': {
//         backgroundPosition: '500px 0',
//     },
// });
// const styles = stylex.create({
//     cardContainer: (theme) => ({
//         width: '400px',
//         minHeight: '350px',
//         perspective: '1500px', // 3D 효과를 위한 원근감 설정
//         boxShadow:
//             theme 
//                 ? '0 0 10px rgba(0, 0, 0, 0.1)'
//                 : '0 0 10px rgba(255, 255, 255, 1)',
//     }),
//     skeletonCard: {
//         width: '400px',
//         height: '300px',
//         borderRadius: '10px',

//         background:
//             'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
//         backgroundSize: '1000px 104px',
//         animation: `${loading} 1.2s infinite`,
//     },
//     skeletonHeader: {
//         height: '20px',
//         width: '70%',
//         backgroundColor: '#ccc',
//         borderRadius: '4px',
//         margin: spacing.md,
//     },
//     skeletonText: {
//         height: '15px',
//         width: '90%',
//         backgroundColor: '#ccc',
//         borderRadius: '4px',
//         margin: spacing.md,
//         marginTop: spacing.sm,
//     },
//     skeletonImage: {
//         width: '50%',
//         height: '50%',
//         backgroundColor: '#bbb',
//         borderRadius: '50%',
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         filter: 'blur(4px)',
//     },
// });
'use client';
import { useTheme } from '@/src/features/theme';
import stylex from '@stylexjs/stylex';
import { spacing } from '../../../shared/tokens/spacing.stylex';
import { text } from '../../../shared/tokens/fonts.stylex';
import { colors } from '../../../shared/tokens/colors.stylex';

export const SkeletonCard = () => {
    const theme = useTheme();

    return (
        <div
            {...stylex.props(
                styles.cardContainer(theme),
                styles.skeletonCard(theme)
            )}
        >
            <div
                {...stylex.props(
                    styles.skeletonImage(theme)
                )}
            />
            <div
                {...stylex.props(
                    styles.skeletonHeader(theme)
                )}
            />
            <div
                {...stylex.props(
                    styles.skeletonText(theme)
                )}
            />
            {/* <div
                {...stylex.props(
                    styles.skeletonText(theme)
                )}
                style={{ width: '80%' }}
            /> */}
        </div>
    );
};

const loading = stylex.keyframes({
    '0%': {
        backgroundPosition: '-500px 0',
    },
    '100%': {
        backgroundPosition: '500px 0',
    },
});

const styles = stylex.create({
    cardContainer: (theme) => ({
        width: '400px',
        minHeight: '350px',
        perspective: '1500px', // 3D 효과를 위한 원근감 설정
        boxShadow:
            theme 
                ? '0 0 10px rgba(0, 0, 0, 0.1)'
                : '0 0 10px rgba(255, 255, 255, 1)',
    }),
    skeletonCard: (theme) => ({
        width: '400px',
        height: '300px',
        borderRadius: '10px',
        background:
            theme 
                ? 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)'
                : 'linear-gradient(to right, #333333 8%, #444444 18%, #333333 33%)',
        backgroundSize: '1000px 104px',
        animation: `${loading} 1.2s infinite`,
    }),
    skeletonHeader: (theme) => ({
        height: '20px',
        width: '70%',
        backgroundColor:
            theme  ? '#ccc' : '#555',
        borderRadius: '4px',
        margin: spacing.md,
    }),
    skeletonText: (theme) => ({
        // height: '15px',
        width: '90%',
        height: '50%',
        backgroundColor:
            theme  ? '#ccc' : '#555',
        borderRadius: '4px',
        margin: spacing.md,
        marginTop: spacing.sm,
    }),
    skeletonImage: (theme) => ({
        width: '30%',
        height: '30%',
        backgroundColor:
            theme  ? '#bbb' : '#666',
        borderRadius: '50%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        filter: 'blur(4px)',
        opacity: 0.5,
    }),
});
