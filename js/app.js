// ===  Variables  ===
const question = document.querySelector('.question') //selecting the div in which has the question
const qns = document.querySelector('.qnumscore') // selecting the div that has the q# and score
const a = document.querySelector('.opt1') // Option A
const b = document.querySelector('.opt2') // Option B
const c = document.querySelector('.opt3') // Option C
const d = document.querySelector('.opt4') // Option D
const bannerr = document.querySelector('.banner-right') // Green banner appears when right
const bannerw = document.querySelector('.banner-wrong') // red banner appears when wrong
const saveKey = 'save'
let highScore = 0
let q = 1
let arr = []
let answer = ''
let choice = ''
let click = false
let score = 0
bannerr.style.display = 'none'
bannerw.style.display = 'none'


// ===  Question and Answer Functionality  === 
let questQ = [
	['The term "Y2K" was originated by ___.', 'Microsoft', 'David Kelly', 'IBM', ' David Eddy', '5'],
	['What does “www” stand for in a website browser?', 'World Web Wide', 'World Wide Web', 'Web World Wide', 'Width of World Web', '5'],
	['How long is an Olympic swimming pool (in meters)?', '25 Meters', '50 Meters', '75 Meters', '100 Meters', '5'], 
	['What countries made up the original Axis powers in World War II?', 'Italy, France, Austria', 'Germany, Austria, Poland', 'Japan, China, Germany', 'Italy, Germany, Japan', '5'],
	['Which country do cities of Perth, Adelade & Brisbane belong to?', 'New Zealand', 'Australia', 'Indonesia', 'Great Britan', '5'],
	['What geometric shape is generally used for stop signs?', 'Hexagon', 'Heptagon', 'Enneagon', 'Octogon', '5'],
	['What is "cynophobia"?', 'Fear of Dogs', 'Fear of Animals', 'Fear of Cryo', 'Fear of Cyno', '5'],
	['What punctuation mark ends an imperative sentence?', 'Period', 'Question Mark', 'Exclamation Point', 'Comma', '5'],
	['Who named the Pacific Ocean?', 'Christopher Columbus', 'Ferdinand Magellan', "Vasco da Gama's", 'Prince Vijaya', '5'],
	['How many languages are written from right to left?', '11', '9', '12', '10', '5'],
	['How many countries still have Shilling as currency?', 'One', 'Two', 'Three', 'Four', '5'],
	['What is the name of the man who launched eBay back in 1995?', 'Pierre Omidyar', 'Jeff Bezos', 'Bill Gates', 'Nick Huzar', '5'],
	['What is the name of the biggest technology company in South Korea?', 'Apple', 'Sony', 'Samsung', 'Nintendo', '5'],
	['Which animal can be seen on the Porsche logo?', 'Donkey', 'Horse', 'Llama', 'Cheetah', '5'],
	["Which monarch officially made Valentine's Day a holiday in 1537?", 'Henry VIII', 'William IV', 'George I', 'Victoria', '5']
]

// a = 1,6,11,14
// b = 2,4,8,13
// c = 7,9,12
// d = 0,3,5,10
let qChoice = Math.round(Math.random() * (14.49 + 0.5) - 0.5)

function generateQ() {
	if(q < 11) {
		bannerr.style.display = 'none'
		bannerw.style.display = 'none'
		qns.innerHTML = `<br /><br />Question ${q}/10 <br /><br /><br /><br /><br />Score ${score}<br />High Score ${highScore}`
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
		question.innerText = `${questQ[qChoice][0]}`
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
		bannerr.style.display = ''
		score += parseInt(questQ[qChoice][5])
		if(highScore < score) {
			highScore = score
		}
	} else {
		bannerw.style.display = ''
	}
	setTimeout(generateQ, 3000)
}

function finishGame() {
	console.log("Your game has finished!")
}




a.addEventListener('click', () => {
	if(!click){
		choice = 'A'
		click = true
		checkAnswer()
	} else console.log('Please wait to click again...')
})

b.addEventListener('click', () => {
	if(!click){
		choice = 'B'
		click = true
		checkAnswer()
	} else console.log('Please wait to click again...')
})

c.addEventListener('click', () => {
	if(!click){
		choice = 'C'
		click = true
		checkAnswer()
	} else console.log('Please wait to click again...')
})

d.addEventListener('click', () => {
	if(!click){
		choice = 'D'
		click = true
		checkAnswer()
	} else console.log('Please wait to click again...')
})

