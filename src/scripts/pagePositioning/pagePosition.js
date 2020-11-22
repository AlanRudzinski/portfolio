import GetAbsolutePosition from '../commons/GetAbsolutePosition';
import GetLengthLastLine from '../commons/GetLengthLastLine';


export default (leadingLine, pageToMove, link, leftPosition, bottomPosition) => {
    const leadingLineRect = leadingLine.getBoundingClientRect();
    
    const moveTop = 
    bottomPosition
    ?
    (
        GetAbsolutePosition(leadingLine).top - GetAbsolutePosition(link).top + leadingLineRect.height - link.getBoundingClientRect().height + 5
    )
    :
    (
        GetAbsolutePosition(leadingLine).top - GetAbsolutePosition(link).top + GetLengthLastLine(leadingLine) - link.getBoundingClientRect().height + 5
    );
    const moveLeft =
    leftPosition 
    ?
    (
        GetAbsolutePosition(leadingLine).left - GetAbsolutePosition(link).left

    )
    :
    (
        GetAbsolutePosition(leadingLine).left - GetAbsolutePosition(link).left + leadingLineRect.width - link.getBoundingClientRect().width
    )

    pageToMove.style.top = `${moveTop}px`;
    pageToMove.style.left = `${moveLeft}px`;
}

// todo: za nisko jak wjezdza