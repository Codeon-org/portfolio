---
title: Vykon 4
description: A Python and Tkinter implementation of the classic Power 4 board game with a custom skin shop and a basic AI opponent.
icon: tabler:dots-diagonal
badges:
  - value: Source
    icon: lucide:github
    to: https://github.com/MrAnyx/Vykon4
    target: _blank
---

A local 2-player or AI-powered version of Power 4 with custom skins and scores, built in Python with a UI made in Tkinter.

## Story

Vykon 4 was our end-of-year project for the "Computer Science and Digital Science" specialty in 12th grade. While some students opted for the Mathematics specialty, I chose the IT one — and honestly, I have no regrets 😄.

We were a small team of three with very little Python experience, but we were excited to build something cool. We set out to recreate the classic Power 4 game (also known as Connect Four) with a few personal touches. We named it "Vykon" — the Slovak word for "Power" — simply because we liked how it sounded.

The game was built using Python and Tkinter for the UI. We added a local 2-player mode and an AI opponent named Béatrice for solo games. One of our favorite features was a store where players could buy skins and board colors using points earned from winning matches. These scores were saved in a MySQL database.

Since we didn’t know how to use Git back then, we resorted to versioning with folders like `vykon4-final-REALFINAL-v3` and shared code updates via email. It was chaotic, but we got it done.

A particularly funny moment happened when a friend looked at our code and found the database credentials hardcoded in plain text. With full access, he gave himself an infinite score and unlocked every item in the store. It was hilarious — and a huge lesson in basic security!

## Goal

- Create a functional Power 4 (Connect Four) game.
- Implement a simple AI opponent.
- Build a local multiplayer mode.
- Design a store system for buying cosmetic upgrades.
- Store and track player scores using a database.

## Why I Built It

This project was part of our end-of-year assignment for the "Computer Science and Digital Science" specialty in 12th grade. We wanted to create something both fun and technically challenging, and a digital version of Power 4 felt like the perfect choice.

It gave us the opportunity to explore several areas of development: creating a graphical interface with Tkinter, implementing basic AI with our opponent Béatrice, managing a database with MySQL, and even adding a store system to track player progress. Despite our limited experience, we were motivated to push our skills, work collaboratively, and have fun building a complete, playable game from scratch.

## Tech Stack

| Area       | Technology |
|------------|------------|
| Language   | Python     |
| UI         | Tkinter    |
| Database   | MySQL      |

## What I Learned

- Basics of Python and Tkinter for GUI development.
- How to implement game logic and AI decision-making.
- Connecting a Python application to a MySQL database.
- Designing simple UIs and user interaction flows.
- Collaborating in a team without version control tools.
- Debugging and testing without prior experience.

## Features

- Playable Power 4 board game.
- Local 2-player mode on the same computer.
- AI opponent named Béatrice.
- In-game shop with cosmetic upgrades (skins and board colors).
- Player score tracking stored in a MySQL database.

## Challenges & Improvements

- Building the game logic from scratch with no previous experience.
- Designing the UI in Tkinter while learning it at the same time.
- Implementing the store logic and connecting it to scores.
- Managing teamwork without Git, relying on email and folders.
- Debugging a scoring exploit that gave players infinite coins 😅
