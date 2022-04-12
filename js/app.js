// ===  Variables  ===
const question = document.querySelector('.question') // Question box.
const qns = document.querySelector('.qnumscore') // Q# and score
const a = document.querySelector('.opt1') // Option A
const b = document.querySelector('.opt2') // Option B
const c = document.querySelector('.opt3') // Option C
const d = document.querySelector('.opt4') // Option D
const bannerr = document.querySelector('.banner-right') // Green banner appears when right
const bannerw = document.querySelector('.banner-wrong') // red banner appears when wrong
const reset = document.querySelector('.reset') // Reset button
const cache = document.querySelector('.cache') // Clear Scoreboard
const saveKey = 'save'
const audioc = new Audio('https://www.mboxdrive.com/correct.mp3')
const audioi = new Audio('https://www.mboxdrive.com/incorrect.mp3')
const audios = new Audio('https://www.mboxdrive.com/startgame.mp3')
const audioe = new Audio('https://www.mboxdrive.com/gameend.mp3')
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
	['The term "Y2K" was originated by ___.', 'Microsoft', 'David Kelly', 'IBM', ' David Eddy', '12'],
	['What does “www” stand for in a website browser?', 'World Web Wide', 'World Wide Web', 'Web World Wide', 'Width of World Web', '10'],
	['How long is an Olympic swimming pool (in meters)?', '25 Meters', '50 Meters', '75 Meters', '100 Meters', '10'], 
	['What countries made up the original Axis powers in World War II?', 'Italy, France, Austria', 'Germany, Austria, Poland', 'Japan, China, Germany', 'Italy, Germany, Japan', '5'],
	['Which country do cities of Perth, Adelade & Brisbane belong to?', 'New Zealand', 'Australia', 'Indonesia', 'Great Britan', '8'],
	['What geometric shape is generally used for stop signs?', 'Hexagon', 'Heptagon', 'Enneagon', 'Octogon', '13'],
	['What is "cynophobia"?', 'Fear of Dogs', 'Fear of Animals', 'Fear of Cryo', 'Fear of Cyno', '15'],
	['What punctuation mark ends an imperative sentence?', 'Period', 'Question Mark', 'Exclamation Point', 'Comma', '5'],
	['Who named the Pacific Ocean?', 'Christopher Columbus', 'Ferdinand Magellan', "Vasco da Gama's", 'Prince Vijaya', '6'],
	['How many languages are written from right to left?', '11', '9', '12', '10', '9'],
	['How many countries still have Shilling as currency?', 'One', 'Two', 'Three', 'Four', '7'],
	['What is the name of the man who launched eBay back in 1995?', 'Pierre Omidyar', 'Jeff Bezos', 'Bill Gates', 'Nick Huzar', '10'],
	['What is the name of the biggest technology company in South Korea?', 'Apple', 'Sony', 'Samsung', 'Nintendo', '12'],
	['Which animal can be seen on the Porsche logo?', 'Donkey', 'Horse', 'Llama', 'Cheetah', '13'],
	["Which monarch officially made Valentine's Day a holiday in 1537?", 'Henry VIII', 'William IV', 'George I', 'Victoria', '15']
]

// a = 1,6,11,14
// b = 2,4,8,13
// c = 7,9,12
// d = 0,3,5,10
function startGame() {
	bannerr.style.display = ''
	bannerr.innerText = 'Welcome to Trivia! Game will start in just a moment!'
	highScore = localStorage.getItem(saveKey)
	audios.play()
	setTimeout(generateQ, 5000)
}

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

function checkAnswer() {
	click = true
	if(choice === answer) {
		bannerr.style.display = ''
		bannerr.innerText = 'You are Correct!'
		audioc.play()
		score += parseInt(questQ[qChoice][5])
		if(highScore < score) {
			highScore = score
			localStorage.setItem(saveKey, highScore)
		}
	} else {
		bannerw.style.display = ''
		audioi.play()
	}
	setTimeout(generateQ, 3000)
}

function finishGame() {
	bannerr.style.display = ''
	bannerr.innerText = 'Your game has finished! Game will restart in 5 seconds.'
	audioe.play()
	setTimeout(startGame, 5000)
}

reset.addEventListener('click', () => finishGame())


cache.addEventListener('click', () => {
	highScore = 0
	localStorage.setItem(saveKey, highScore)
	highScore = localStorage.getItem(saveKey)
	qns.innerHTML = `<br /><br />Question ${q}/10 <br /><br /><br /><br /><br />Score ${score}<br />High Score ${highScore}`
	finishGame()
})


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


startGame()