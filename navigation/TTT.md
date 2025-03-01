---
layout: base 
title: Tic-Tac-Toe
search_exclude: true
permalink: /tictactoe/
---

<canvas id="ticTacToeCanvas" width="300" height="300"></canvas>

<div id="status" style="font-size: 18px; margin-top: 10px; font-weight: bold;"></div>

<script>
    // Avoid redeclaring variables if they already exist
    if (!window.canvas) {
        const canvas = document.getElementById("ticTacToeCanvas");
        const ctx = canvas.getContext("2d");
        const statusElement = document.getElementById("status");

        const boardSize = 3;
        const cellSize = canvas.width / boardSize;
        let board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        let currentPlayer = "X"; // X starts first

        function drawBoard() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing
            ctx.strokeStyle = "#000000"; // Black color for grid lines
            ctx.lineWidth = 2;

            // Draw the grid
            for (let i = 1; i < boardSize; i++) {
                ctx.beginPath();
                ctx.moveTo(i * cellSize, 0);
                ctx.lineTo(i * cellSize, canvas.height);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(0, i * cellSize);
                ctx.lineTo(canvas.width, i * cellSize);
                ctx.stroke();
            }
        }

        function drawMarks() {
            ctx.font = "60px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Draw the X's and O's
            for (let row = 0; row < boardSize; row++) {
                for (let col = 0; col < boardSize; col++) {
                    if (board[row][col]) {
                        ctx.fillStyle = board[row][col] === "X" ? "#2980B9" : "#27AE60"; // Blue for X, Green for O
                        ctx.fillText(board[row][col], col * cellSize + cellSize / 2, row * cellSize + cellSize / 2);
                    }
                }
            }
        }

        // Handle click event
        canvas.addEventListener("click", (event) => {
            const x = event.offsetX;
            const y = event.offsetY;
            const row = Math.floor(y / cellSize);
            const col = Math.floor(x / cellSize);

            if (board[row][col] === null) {
                board[row][col] = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player
                drawBoard();
                drawMarks();
                checkGameStatus();
            }
        });

        // Check if a player has won or if it's a draw
        function checkGameStatus() {
            if (checkWinner()) {
                updateStatus(`${currentPlayer === "X" ? "O" : "X"} wins!`);
                resetGame();
            } else if (isBoardFull()) {
                updateStatus("It's a draw!");
                resetGame();
            } else {
                updateStatus(`It's Player ${currentPlayer}'s turn.`);
            }
        }

        // Update the status message
        function updateStatus(message) {
            statusElement.textContent = message;
        }

        // Check if a player has won
        function checkWinner() {
            // Check rows, columns, and diagonals
            for (let i = 0; i < boardSize; i++) {
                // Check rows
                if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                    return true;
                }
                // Check columns
                if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                    return true;
                }
            }
            // Check diagonals
            if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                return true;
            }
            if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                return true;
            }
            return false;
        }

        // Check if the board is full (draw)
        function isBoardFull() {
            for (let row = 0; row < boardSize; row++) {
                for (let col = 0; col < boardSize; col++) {
                    if (board[row][col] === null) {
                        return false;
                    }
                }
            }
            return true;
        }

        // Reset the game
        function resetGame() {
            setTimeout(() => {
                board = [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null]
                ];
                drawBoard();
                drawMarks();
                updateStatus(`It's Player ${currentPlayer}'s turn.`);
            }, 1000); // Delay reset for 1 second
        }

        // Initialize the game board
        drawBoard();
        drawMarks();
        updateStatus(`It's Player ${currentPlayer}'s turn.`);
    }
</script>
