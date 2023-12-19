const byteSize = (str) => {
  // write your code here
	let n=str.length,c=0;
	for(let i=0;i<n;i++){
		 const charCode = str.charCodeAt(i);

    // Counting bytes based on character code range
    if (charCode <= 0x7F) {
      c += 1; // ASCII character
    } else if (charCode <= 0x7FF) {
      c += 2; // 2-byte character
    } else if (charCode <= 0xFFFF) {
      c += 3; // 3-byte character
    } else if (charCode <= 0x10FFFF) {
      c += 4; // 4-byte character (up to maximum Unicode character)
    }
	}
	return c;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

