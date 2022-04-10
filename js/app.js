// ===  Variables  ===
let question = document.querySelector('.question')
let qns = document.querySelector('.qnumscore')
let a = document.querySelector('.opt1')
let b = document.querySelector('.opt2')
let c = document.querySelector('.opt3')
let d = document.querySelector('.opt4')


// ===  Question and Answer Functionality  === 
let questQ = [
	'The term "Y2K" was originated by ___.'
]
let q1Opt = ['Microsoft', 'David Kelly', 'Dave Chappelle', 'IBM', ' David Eddy']
let q1Ans = 'David Eddy'

a.innerHTML = `${q1Opt[Math.round(Math.random() * (5-1))]}`
b.innerHTML = `${q1Opt[Math.round(Math.random() * (5-1))]}`
c.innerHTML = `${q1Opt[Math.round(Math.random() * (5-1))]}`
d.innerHTML = `${q1Opt[Math.round(Math.random() * (5-1))]}`

if(a.innerHTML !)
