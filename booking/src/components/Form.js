import React from 'react';

const Form = (props) =>{
    const {title,setTitle,author,setAuthor,isbn,setIsbn,currentBookingId,setCurrentBookingId}= props;
    return(
        <>
        <form>
        <label>Title</label>
        <input autoFocus required onChange={e => setTitle(e.target.value)} value={title} type="text"/>
        <label>Author</label>
        <input autoFocus required onChange={e => setAuthor(e.target.value)} value ={author} type="text" />
        <label>Isbn</label>
        <input autoFocus required onChange={e => setIsbn(e.target.value)} value={isbn} type="text"/>
        <button type="submit" tabIndex="0">{currentBookingId !== null ? "Add" :"Update"}</button>
        </form>
        </>
    )
}

export default Form;