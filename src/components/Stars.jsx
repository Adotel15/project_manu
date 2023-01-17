
import styled from "styled-components"

const StarsWrapper = styled.div`

    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: 0;

    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(1fr, 30);
    grid-template-rows: repeat(1fr, 30);

`

const Star = styled.img`

    grid-column: ${props => props.column};
    grid-row: ${props => props.row};

`

const Stars = () => {

    const stars = [
        {row: 1, column: 16, size: 70},
        {row: 2, column: 3, size: 70},
        {row: 3, column: 4, size: 80},
        {row: 3, column: 11, size: 70},
        {row: 4, column: 6, size: 50},
        {row: 5, column: 12, size: 70},
        {row: 6, column: 13, size: 100},
        {row: 6, column: 10, size: 70},
        {row: 7, column: 2, size: 70},
        {row: 8, column: 19, size: 70},
        {row: 8, column: 10, size: 30},
        {row: 9, column: 8, size: 90},
        {row: 9, column: 16, size: 70},
        {row: 11, column: 10, size: 80},
        {row: 12, column: 10, size: 40},
        {row: 12, column: 2, size: 70},
        {row: 14, column: 15, size: 50},
        {row: 14, column: 8, size: 70},
        {row: 20, column: 20, size: 70},
    ]
    
    return (
        <StarsWrapper>
            {
                stars.map((star, index) => (
                    <Star 
                        row={star.row}
                        column={star.column}
                        src = "../public/star.png" 
                        alt = "star" 
                        width={star.size} 
                        height={star.size} 
                        key={index}
                    />
                ))
            }
        </StarsWrapper>
    )
}

export default Stars
