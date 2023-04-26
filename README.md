# CounterReply

A simple tool to create debates.

## Game Structure

First, a question is written for both players to repond to. Once they respond, each player writes a Counter, or rebuttal, to that answer. Based on these answers, a new question is written and the cycle repeats.

## Code Structure

Players are sent in a specific order through the pages:

1. index.html
2. question.html
3. answerInput.html
4. displayAnswers.html
5. counterInput.html
6. displayCounters.html <br>
   After this page, the cycle repeats, returning to question.html

All javascript is contained in main.js. <br>
This project uses bootstrap, with style.css only being used for margins.
