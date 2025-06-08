---
title: FlappyBird
description: A simple reimplementation of the classic Flappy Bird game using the Processing language.
icon: lucide:bird
badges:
  - value: Source
    icon: lucide:github
    to: https://github.com/MrAnyx/FlappyBird
    target: _blank
---

A faithful re-creation of the famous FlappyBird game using the Processing programming language.

## Goal

- Recreate the original FlappyBird gameplay mechanics.
- Use Processing to manage graphics, animation, and input.
- Implement collision detection, scoring, and game restart logic.

## Why I Built It

I built this project to deepen my understanding of Processing, a flexible software sketchbook and a language for learning how to code within the context of the visual arts. FlappyBird provided a simple but effective challenge to practice animation, physics simulation, and user interaction within a graphical environment.

## Tech Stack

| Area           | Technology          |
|----------------|-----------------------|
| Programming    | Processing (Java-based) |
| Graphics       | PImage for sprite handling |

## What I Learned

- How to simulate basic physics like gravity and velocity in 2D space.
- How to load and render images using `PImage`.
- How to use key inputs to trigger game events.
- How to detect collisions between objects with basic bounding box logic.
- How to manage game states like "running" and "game over".

## Features

- Gravity-based bird jump mechanic.
- Procedurally generated pipes with random heights.
- Collision detection with pipes and screen boundaries.
- Real-time scoring system.
- Game over screen with the ability to restart by pressing the spacebar.
- Custom background colors and images for an immersive experience.

## Challenges & Improvements

- Implementing accurate collision detection using simple bounding box logic for the bird and pipes.
- Simulating gravity and jump behavior using Newtonian principles, which required tuning speed and acceleration values for a natural feel.
- Managing the game state (running vs. game over) and ensuring smooth restart behavior with minimal code repetition.
- Aligning image-based assets precisely to prevent visual glitches during gameplay.
- Balancing pipe speed and spacing to create a fair but challenging experience.
