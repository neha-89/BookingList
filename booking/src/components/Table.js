import React from 'react';
import TableField from './TableField';

const Table = ({books}) => {
    return(
        <>
        <div className="table">
            <div className="tableHeading">
                <TableField fieldName= "Title"/>
                <TableField fieldName= "Author"/>
                <TableField fieldName= "ISBN#"/>
                <TableField fieldName= "Settings"/>
            </div>
            {books.map((books)=>{
                <div key = {books.bookId} className="tableRow">
                    <TableField fieldName={books.bookTitle}/>
                    <TableField fieldName={books.bookAuthor} />
                    <TableField fieldName={books.bookIsbn}/>
                    <TableField settingsField/>
                    </div>
            })}
        </div>
        </>
    )
}

export default Table;