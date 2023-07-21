"use strict";

const shapes = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return shapes[Math.floor(Math.random() * 3)];
}