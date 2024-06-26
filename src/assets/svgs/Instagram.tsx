import React from 'react'

interface SvgProps {
    height: string | number;
    width: string | number;
}

const Instagram:React.FC<SvgProps> = ({height, width}) =>{
    return(
        <>
            <svg 
                clipRule="evenodd" 
                fillRule="evenodd" 
                imageRendering="optimizeQuality" 
                shapeRendering="geometricPrecision" 
                textRendering="geometricPrecision" 
                viewBox="0 0 10000 9951" 
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M1210 0h7580c666 0 1210 545 1210 1210v7531c0 666-545 1210-1210 1210H1210C544 9951 0 9406 0 8741V1210C0 544 545 0 1210 0zm-130 4097h999c-104 303-161 627-161 965 0 1667 1380 3018 3082 3018s3082-1351 3082-3018c0-337-57-662-161-965h999v4190c0 297-243 539-539 539H1578c-274 0-498-224-498-498zM7274 986h1161c262 0 477 215 477 477v1079c0 262-215 477-477 477H7274c-262 0-477-215-477-477V1463c0-262 215-477 477-477zM5003 2936c1105 0 2001 878 2001 1960s-896 1960-2001 1960-2001-878-2001-1960 896-1960 2001-1960z"/>
            </svg>
        </>
    )
}

export default Instagram