import React from 'react';

const SearchBox = ({ change}) => {
	return (
		<div className='pa2 ma2'>
		<input className='bg-light-yellow bw2 shadow-4 grow' type='search' 
		placeholder='search robots' 
        onChange={change}
		/>
		</div>	
		);
}

export default SearchBox;