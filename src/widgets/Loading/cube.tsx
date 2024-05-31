import stylex from '@stylexjs/stylex';

const styles = stylex.create({
    parent: {
        // position: 'absolute',
        // left: '300px',
        // top: '300px',
        width: '200px',
        height: '200px',
        // width: '10',
        // height: '10vh',
        boxSizing: 'border-box',
        border: '2px solid white',
        perspective: '400px',
    },
    cube: {
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        animation: `${stylex.keyframes({
            from: {
                transform:
                    'rotateX(360deg) rotateY(0deg) rotateZ(0deg)',
            },
            to: {
                transform:
                    'rotateX(0deg) rotateY(360deg) rotateZ(360deg)',
            },
        })} 3s infinite linear`,
    },
    cubeFace: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        border: '3px solid white',
        boxShadow: '0px 0px 40px 5px yellow',
    },
    cubeFaceFront: {
        background: 'hsla(0, 100%, 50%, 0.5)',
        transform: 'rotateY(0deg) translateZ(100px)',
    },
    cubeFaceRight: {
        background: 'hsla(60, 100%, 50%, 0.5)',
        transform: 'rotateY(90deg) translateZ(100px)',
    },
    cubeFaceBack: {
        background: 'hsla(120, 100%, 50%, 0.5)',
        transform: 'rotateY(180deg) translateZ(100px)',
    },
    cubeFaceLeft: {
        background: 'hsla(180, 100%, 50%, 0.5)',
        transform: 'rotateY(-90deg) translateZ(100px)',
    },
    cubeFaceTop: {
        background: 'hsla(240, 100%, 50%, 0.5)',
        transform: 'rotateX(90deg) translateZ(100px)',
    },
    cubeFaceBottom: {
        background: 'hsla(300, 100%, 50%, 0.5)',
        transform: 'rotateX(-90deg) translateZ(100px)',
    },
});

export const LoadingUi = () => {
    return (
        <div {...stylex.props(styles.parent)}>
            <div {...stylex.props(styles.cube)}>
                <div
                    {...stylex.props(
                        styles.cubeFace,
                        styles.cubeFaceFront
                    )}
                />
                <div
                    {...stylex.props(
                        styles.cubeFace,
                        styles.cubeFaceRight
                    )}
                />
                <div
                    {...stylex.props(
                        styles.cubeFace,
                        styles.cubeFaceBack
                    )}
                />
                <div
                    {...stylex.props(
                        styles.cubeFace,
                        styles.cubeFaceLeft
                    )}
                />
                <div
                    {...stylex.props(
                        styles.cubeFace,
                        styles.cubeFaceTop
                    )}
                />
                <div
                    {...stylex.props(
                        styles.cubeFace,
                        styles.cubeFaceBottom
                    )}
                />
            </div>
        </div>
    );
};
