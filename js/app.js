// ===  Variables  ===
let question = document.querySelector('.question')
let qns = document.querySelector('.qnumscore')
let a = document.querySelector('.opt1')
let b = document.querySelector('.opt2')
let c = document.querySelector('.opt3')
let d = document.querySelector('.opt4')
arr = [a,b,c,d]


// ===  Question and Answer Functionality  === 
let questQ = [
	['The term "Y2K" was originated by ___.', 'Microsoft', 'David Kelly', 'IBM', ' David Eddy'],
	['What does “www” stand for in a website browser?', 'World Web Wide', 'World Wide Web', 'Web World Wide', 'Width of World Web'],
	['How long is an Olympic swimming pool (in meters)?', '25 Meters', '50 Meters', '75 Meters', '100 Meters'], 
	['What countries made up the original Axis powers in World War II?', 'Italy, France, Austria', 'Germany, Austria, Poland', 'Japan, China, Germany', 'Italy, Germany, Japan'],
	['Which country do cities of Perth, Adelade & Brisbane belong to?', 'New Zealand', 'Australia', 'Indonesia', 'Great Britan'],
	['What geometric shape is generally used for stop signs?', 'Hexagon', 'Heptagon', 'Enneagon', 'Octogon'],
	['What is "cynophobia"?', 'Fear of Dogs', 'Fear of Animals', 'Fear of Cryo', 'Fear of Cyno'],
	['What punctuation mark ends an imperative sentence?', 'Period', 'Question Mark', 'Exclamation Point', 'Comma'],
	['Who named the Pacific Ocean?', 'Christopher Columbus', 'Ferdinand Magellan', "Vasco da Gama's", 'Prince Vijaya'],
	['How many languages are written from right to left?', '9', '10', '11', '12'],
	['How many countries still have Shilling as currency?', 'One', 'Two', 'Three', 'Four'],
	['What is the name of the man who launched eBay back in 1995?', 'Pierre Omidyar', 'Jeff Bezos', 'Bill Gates', 'Nick Huzar'],
	['What is the name of the biggest technology company in South Korea?', 'Apple', 'Sony', 'Samsung', 'Nintendo'],
	['Which animal can be seen on the Porsche logo?', 'Donkey', 'Horse', 'Llama', 'Cheetah'],
	["Which monarch officially made Valentine's Day a holiday in 1537?", 'Henry VIII', 'William IV', 'George I', 'Victoria']
]
let q0Opt = ['Microsoft', 'David Kelly', 'IBM', ' David Eddy'] // David Eddy
let q1Opt = ['World Web Wide', 'World Wide Web', 'Web World Wide', 'Width of World Web'] // World Wide Web
let q2Opt = ['25 Meters', '50 Meters', '75 Meters', '100 Meters'] // 50 Meters
let q3Opt = ['Italy, France, Austria', 'Germany, Austria, Poland', 'Japan, China, Germany', 'Italy, Germany, Japan'] // Italy, Germany, Japan
let q4Opt = ['New Zealand', 'Australia', 'Indonesia', 'Great Britan'] // Australia
let q5Opt = ['Hexagon', 'Heptagon', 'Enneagon', 'Octogon'] // Octogon
let q6Opt = ['Fear of Dogs', 'Fear of Animals', 'Fear of Cryo', 'Fear of Cyno'] // Fear of Dogs
let q7Opt = ['Period', 'Question Mark', 'Exclamation Point', 'Comma'] // Exclamation Point
let q8Opt = ['Christopher Columbus', 'Ferdinand Magellan', "Vasco da Gama's", 'Prince Vijaya'] // Ferdinand Magellan
let q9Opt = ['9', '10', '11', '12'] // 12
let q10Opt = ['One', 'Two', 'Three', 'Four'] // Four
let q11Opt = ['Pierre Omidyar', 'Jeff Bezos', 'Bill Gates', 'Nick Huzar'] // Pierre Omidyar
let q12Opt = ['Apple', 'Sony', 'Samsung', 'Nintendo'] // Samsung
let q13Opt = ['Donkey', 'Horse', 'Llama', 'Cheetah'] // Horse
let q14Opt = ['Henry VIII', 'William IV', 'George I', 'Victoria'] // Henry VIII

function generateQ() {
	let qChoice = Math.round(Math.random() * (14.49 + 0.5) - 0.5)
	question.innerHTML = questQ[qChoice][0]
	console.log(qChoice)
	a.innerText = `A - ${questQ[qChoice][1]}`
	b.innerText = `B - ${questQ[qChoice][2]}`
	c.innerText = `C - ${questQ[qChoice][3]}`
	d.innerText = `D - ${questQ[qChoice][4]}`
}
generateQ()
console.log(questQ[0][1])