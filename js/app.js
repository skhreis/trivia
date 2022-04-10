// ===  Variables  ===
let question = document.querySelector('.question')
let qns = document.querySelector('.qnumscore')
let a = document.querySelector('.opt1')
let b = document.querySelector('.opt2')
let c = document.querySelector('.opt3')
let d = document.querySelector('.opt4')


// ===  Question and Answer Functionality  === 
let questQ = [
	'The term "Y2K" was originated by ___.',
	'What does “www” stand for in a website browser?',
	'How long is an Olympic swimming pool (in meters)?',
	'What countries made up the original Axis powers in World War II?',
	'Which country do cities of Perth, Adelade & Brisbane belong to?',
	'What geometric shape is generally used for stop signs?',
	'What is "cynophobia"?',
	'What punctuation mark ends an imperative sentence?',
	'Who named the Pacific Ocean?',
	'How many languages are written from right to left?',
	'How many countries still have Shilling as currency?',
	'What is the name of the man who launched eBay back in 1995?',
	'What is the name of the biggest technology company in South Korea?',
	'Which animal can be seen on the Porsche logo?',
	"Which monarch officially made Valentine's Day a holiday in 1537?",
]
let q1Opt = ['Microsoft', 'David Kelly', 'IBM', ' David Eddy'] // David Eddy
let q2Opt = ['World Web Wide', 'World Wide Web', 'Web World Wide', 'Width of World Web'] // World Wide Web
let q3Opt = ['25 Meters', '50 Meters', '75 Meters', '100 Meters'] // 50 Meters
let q4Opt = ['Italy, France, Austria', 'Germany, Austria, Poland', 'Japan, China, Germany', 'Italy, Germany, Japan'] // Italy, Germany, Japan
let q5Opt = ['New Zealand', 'Australia', 'Indonesia', 'Great Britan'] // Australia
let q6Opt = ['Hexagon', 'Heptagon', 'Enneagon', 'Octogon'] // Octogon
let q7Opt = ['Fear of Dogs', 'Fear of Animals', 'Fear of Cryo', 'Fear of Cyno'] // Fear of Dogs
let q8Opt = ['Period', 'Question Mark', 'Exclamation Point', 'Comma'] // Exclamation Point
let q9Opt = ['Christopher Columbus', 'Ferdinand Magellan', "Vasco da Gama's", 'Prince Vijaya'] // Ferdinand Magellan
let q10Opt = ['9', '10', '11', '12'] // 12
let q11Opt = ['One', 'Two', 'Three', 'Four'] // Four
let q12Opt = ['Pierre Omidyar', 'Jeff Bezos', 'Bill Gates', 'Nick Huzar'] // Pierre Omidyar
let q13Opt = ['Apple', 'Sony', 'Samsung', 'Nintendo'] // Samsung
let q14Opt = ['Donkey', 'Horse', 'Llama', 'Cheetah'] // Horse
let q15Opt = ['Henry VIII', 'William IV', 'George I', 'Victoria'] // Henry VIII
let q1Ans = 'David Eddy'

a.innerHTML = `${q1Opt[Math.round(Math.random() * (5-1))]}`
b.innerHTML = `${q1Opt[Math.round(Math.random() * (5-1))]}`
c.innerHTML = `${q1Opt[Math.round(Math.random() * (5-1))]}`
d.innerHTML = `${q1Opt[Math.round(Math.random() * (5-1))]}`

if(a.innerHTML !)
