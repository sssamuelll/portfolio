interface SVGProps {
    strokeColor?: string;
    sizeWidth?: string | number;
    sizeHeight?: string;
}

const defaultProps = {
    strokeColor: "#000000",
    sizeWidth: '6',
    sizeHeight: '5'
}

export const DownArrowSVG: React.FC<SVGProps> = ({
    strokeColor = defaultProps.strokeColor,
    sizeWidth = defaultProps.sizeWidth,
    sizeHeight = defaultProps.sizeHeight,
    }) => (
        <svg 
            width={sizeWidth} 
            height={sizeHeight} 
            viewBox="0 0 8 7" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M3.646 5.354L0.645996 2.354L1.354 1.646L4 4.293L6.646 1.646L7.354 2.354L4.354 5.354L4 5.707L3.646 5.354Z" 
                fill={strokeColor}
            />
        </svg>
    )