function mintAmount({ setMintCount }) {

	return (
		<input 
			className="mint-amount" 
			type="number" 
			placeholder="1-10" 
			min="1" 
			max="10" 
			onChange={(e) => setMintCount(e.target.value)}>
		</input>
	);
}

export default mintAmount