---
title: Minesweeper
description: An implementation of the classic Minesweeper game using Java and JavaFX for graphics and interaction.
icon: tabler:bomb
badges:
  - value: Source
    icon: lucide:github
    to: https://github.com/MrAnyx/Demineur
    target: _blank
---

A classic Minesweeper game recreated in Java with JavaFX, featuring game over detection, live gameplay, and automatic safe cell discovery.

## Goal

- Recreate the Minesweeper game experience with a graphical interface.
- Implement game mechanics including mine placement, flagging, and uncovering cells.
- Detect game over conditions (stepping on a mine).
- Implement automatic discovery of safe cells when possible.
- Provide smooth and interactive gameplay with visual feedback.

## Why I Built It

I built this Minesweeper project to deepen my understanding of JavaFX for building desktop graphical applications and to practice implementing game logic and state management. Minesweeper is a well-known puzzle game that offers a good challenge in handling user interactions, game rules, and UI updates, making it a great project for learning event-driven programming and JavaFX capabilities.

## Tech Stack

| Area         | Technology   |
|--------------|--------------|
| Programming  | Java         |
| GUI          | JavaFX       |

## What I Learned

- How to build a responsive GUI with JavaFX components.
- Managing game state and logic in an event-driven environment.
- Handling user input such as mouse clicks for uncovering and flagging cells.
- Implementing recursive algorithms for auto-discovery of safe cells.
- Detecting and responding to win and lose conditions.

## Features

- Fully functional Minesweeper gameplay with customizable grid size and mine count.
- Visual grid showing covered, uncovered, and flagged cells.
- Automatic discovery of contiguous safe cells.
- Game over detection with appropriate notifications.
- Smooth and interactive UI responding to mouse input.

## Challenges & Improvements

- Managing recursive auto-discovery efficiently without stack overflow.
- Ensuring UI updates are smooth and reflect the current game state accurately.
- Handling edge cases for flagging and uncovering cells.
- Balancing game difficulty through mine placement randomness.
