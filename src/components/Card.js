import React from 'react';

const Card = ({name, id, email}) => {
	return (
		<div className='tc bg-black grow dib pa3 ma3 br3 shadow-5 bw2'>
        <img alt='rbotos' src={`https://robohash.org/${id}?size=200x200`} />
        <div>
        <h2 className='yellow'>{name}</h2>
        <p className='yellow'>{email}</p>
        </div>
        </div>
		);
}

export default Card;