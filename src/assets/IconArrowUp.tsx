import * as React from 'react';

function IconArrowUp(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={8}
            height={4}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1 3.5l3-3 3 3"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default IconArrowUp;
