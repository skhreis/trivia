// ===  Variables  ===
const question = document.querySelector('.question')
const qns = document.querySelector('.qnumscore')
const a = document.querySelector('.opt1')
const b = document.querySelector('.opt2')
const c = document.querySelector('.opt3')
const d = document.querySelector('.opt4')
let q = 1
let arr = []
let answer = ''
let choice = ''
let click = false

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
	['How many languages are written from right to left?', '11', '9', '12', '10'],
	['How many countries still have Shilling as currency?', 'One', 'Two', 'Three', 'Four'],
	['What is the name of the man who launched eBay back in 1995?', 'Pierre Omidyar', 'Jeff Bezos', 'Bill Gates', 'Nick Huzar'],
	['What is the name of the biggest technology company in South Korea?', 'Apple', 'Sony', 'Samsung', 'Nintendo'],
	['Which animal can be seen on the Porsche logo?', 'Donkey', 'Horse', 'Llama', 'Cheetah'],
	["Which monarch officially made Valentine's Day a holiday in 1537?", 'Henry VIII', 'William IV', 'George I', 'Victoria']
]
// let q0Opt = ['Microsoft', 'David Kelly', 'IBM', ' David Eddy'] // David Eddy d
// let q1Opt = ['World Web Wide', 'World Wide Web', 'Web World Wide', 'Width of World Web'] // World Wide Web a
// let q2Opt = ['25 Meters', '50 Meters', '75 Meters', '100 Meters'] // 50 Meters b
// let q3Opt = ['Italy, France, Austria', 'Germany, Austria, Poland', 'Japan, China, Germany', 'Italy, Germany, Japan'] // Italy, Germany, Japan d
// let q4Opt = ['New Zealand', 'Australia', 'Indonesia', 'Great Britan'] // Australia b
// let q5Opt = ['Hexagon', 'Heptagon', 'Enneagon', 'Octogon'] // Octogon d
// let q6Opt = ['Fear of Dogs', 'Fear of Animals', 'Fear of Cryo', 'Fear of Cyno'] // Fear of Dogs a
// let q7Opt = ['Period', 'Question Mark', 'Exclamation Point', 'Comma'] // Exclamation Point c
// let q8Opt = ['Christopher Columbus', 'Ferdinand Magellan', "Vasco da Gama's", 'Prince Vijaya'] // Ferdinand Magellan b
// let q9Opt = ['11', '9', '12', '10'] // 12 c
// let q10Opt = ['One', 'Two', 'Three', 'Four'] // Four d
// let q11Opt = ['Pierre Omidyar', 'Jeff Bezos', 'Bill Gates', 'Nick Huzar'] // Pierre Omidyar a
// let q12Opt = ['Apple', 'Sony', 'Samsung', 'Nintendo'] // Samsung c
// let q13Opt = ['Donkey', 'Horse', 'Llama', 'Cheetah'] // Horse b
// let q14Opt = ['Henry VIII', 'William IV', 'George I', 'Victoria'] // Henry VIII a

// a = 1,6,11,14
// b = 2,4,8,13
// c = 7,9,12
// d = 0,3,5,10

function generateQ() {
	if(q < 11) {
		qns.innerText = `Question ${q}/10`
		let qChoice = Math.round(Math.random() * (14.49 + 0.5) - 0.5)
		for(let i = 0; i<10; i++){
			while(qChoice == arr[i]) {
				console.log(`Same number: ${qChoice}`)
				qChoice = Math.round(Math.random() * (14.49 + 0.5) - 0.5)
			}
		}
		arr.push(qChoice)
		if(qChoice === 1 || qChoice === 6 || qChoice === 11 || qChoice === 14) {
			answer = 'A'
		} else if(qChoice === 2 || qChoice === 4 || qChoice === 8 || qChoice === 13) {
			answer = 'B'
		} else if (qChoice === 7 || qChoice === 9 || qChoice === 12) {
			answer = 'C'
		} else answer = 'D'
		question.innerHTML = questQ[qChoice][0]
		a.innerText = `A - ${questQ[qChoice][1]}`
		b.innerText = `B - ${questQ[qChoice][2]}`
		c.innerText = `C - ${questQ[qChoice][3]}`
		d.innerText = `D - ${questQ[qChoice][4]}`
		click = false
		q++
	} else finishGame()
}
generateQ()

function checkAnswer() {
	click = true
	if(choice === answer) {
		console.log('You are Correct!')
		score += 50
	} else {
		console.log('You are Incorrect!')
		score -= 10
	}
	setTimeout(generateQ, 0000)
}

function finishGame() {
	console.log("Your game has finished!")
}


a.addEventListener('click', () => {
	if(click === false){
		choice = 'A'
		click = true
		checkAnswer()
	} else console.log('Please wait to click again...')
})

b.addEventListener('click', () => {
	if(click === false){
		choice = 'B'
		click = true
		checkAnswer()
	} else console.log('Please wait to click again...')
})

c.addEventListener('click', () => {
	if(click === false){
		choice = 'C'
		click = true
		checkAnswer()
	} else console.log('Please wait to click again...')
})

d.addEventListener('click', () => {
	if(click === false){
		choice = 'D'
		click = true
		checkAnswer()
	} else console.log('Please wait to click again...')
})