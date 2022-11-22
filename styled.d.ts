import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            black: string;
            info: string;
            white: string;
        };
    }
}
