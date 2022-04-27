import React from "react";
import { CustomButton } from "../button/button";

export const PageNumber = ({num, big, actual, ellipsis, handleClick}) => {
    return(
        <div 
          className={`pagenumber${big? ' ' + big : ''}${actual? ' '+ actual : ''}${ellipsis? ' ellipsis' : ''}`}
          onClick={() => handleClick? handleClick(num) : ''}
        >{num}</div>
    )
}

export const Pagination = ({handlePrevious, handleNext, handleClick, lastPage, actualPage}) => {

    const generatePageNumber = () => {
        let arr = [];
        if(actualPage === 0) for (let i = actualPage; i <= actualPage + 4; i++) {arr.push(i)}
        else if (actualPage === 1) for (let i = actualPage - 1; i <= actualPage + 3; i++) {arr.push(i)}
        else if (actualPage === lastPage) for (let i = actualPage - 4; i <= lastPage; i++) {arr.push(i)}
        else if (actualPage === lastPage - 1) for (let i = actualPage - 4; i <= lastPage; i++) {arr.push(i)}
        else if (actualPage === lastPage - 2) for (let i = actualPage - 3; i <= lastPage; i++) {arr.push(i)}
        else for (let i = actualPage - 2; i <= actualPage + 2; i++) {arr.push(i); console.log(i, actualPage, i <= actualPage + 2)};
        return(
            <>
                {arr.includes(0)? ''
                : <>
                    <PageNumber num={0} handleClick={handleClick}/>
                    <PageNumber num='...' ellipsis={true}/>
                </>}
                {arr.map((index) => {
                    return(
                        <PageNumber
                          key={index}
                          num={index}
                          actual={index === actualPage ? 'border' : ''}
                          big={index > 99 ? 'pagenumber-container-big' : ''}
                          handleClick={handleClick}
                        />
                        )
                })}
                {arr.includes(lastPage)? ''
                : <>
                    <PageNumber num='...' ellipsis={true}/>
                    <PageNumber 
                      num={lastPage}
                      big='pagenumber-container-big'
                      handleClick={handleClick}
                    />
                </>}
            </>
        )
    }

    return (
        <div className="pagination-container">
            <CustomButton 
              handleClick={e => handlePrevious? handlePrevious() : e.preventDefault}
              icon='chevron_left'
              text='Anterior'
              direction='left'
            />
            <div className="pagenumber-container">
                {generatePageNumber()}
            </div>
            <CustomButton
              handleClick={e => handleNext? handleNext() : e.preventDefault}
              icon='chevron_right'
              text='Siguiente'
            />
        </div>
    )
}