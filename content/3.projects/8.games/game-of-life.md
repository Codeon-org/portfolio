---
title: Game of Life
description: An implementation of Conway's Game of Life using the Processing programming language.
icon: lucide:route
badges:
  - value: Source
    icon: lucide:github
    to: https://github.com/MrAnyx/Jeu-de-la-vie
    target: _blank
---

A visual simulation of Conway's Game of Life, showcasing cellular automata behavior in a grid environment.

## Goal

- Implement Conway's Game of Life simulation using Processing.
- Provide a visual and interactive experience to observe cellular automata behavior.
- Allow users to switch between random and custom initial states.
- Enable user interaction to activate or deactivate cells manually.
- Control simulation start and stop with keyboard input.

## Why I Built It

I built this project to better understand cellular automata and the behavior of simple rule-based systems that produce complex patterns. Processing was chosen for its simplicity and strong graphical capabilities, which suit this type of simulation well.

## Tech Stack

| Area            | Technology         |
|-----------------|--------------------|
| Programming     | Processing (Java)   |
| Graphics        | 2D Grid Rendering   |
| Input Handling  | Keyboard and Mouse  |
| Simulation Logic| Cellular Automata Rules |

## What I Learned

- How to implement cellular automata logic and Conway's Game of Life rules.
- Efficient management of grid-based data structures with boundary handling.
- Handling keyboard and mouse input for interactive simulations.
- Separating simulation update logic from rendering for cleaner code.
- Balancing simulation speed for smooth visualization.

## Features

- Grid-based visualization of Conway's Game of Life.
- Supports random initialization or manual cell placement.
- Toggle simulation play/pause with the Enter key.
- Switch between random and custom grid initialization modes.
- Interactive cell activation and deactivation using mouse clicks (left click to activate, right click to deactivate).
- Real-time updating of cells according to Game of Life rules every few frames.

## Challenges & Improvements

- Managing the edge cases of the grid required extra padding to avoid array boundary errors.
- Balancing update speed and visual clarity involved implementing an update counter to slow down simulation steps.
- Handling user interaction for manual cell editing during paused state needed careful event handling to prevent conflicts.
- Improvements included optimizing the grid copy process to reduce redundant computations and ensuring stable toggling between modes.
