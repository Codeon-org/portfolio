---
title: Multiplayer Pong
description: A multiplayer implementation of the classic Pong game using Java RMI for communication and JavaFX for the user interface.
icon: tabler:ping-pong
badges:
  - value: Source
    icon: lucide:github
    to: https://github.com/MrAnyx/Pong_RMI
    target: _blank
---

A multiplayer Pong game built in Java leveraging RMI (Remote Method Invocation) for networked play and JavaFX for the graphical interface.

## Goal

- Implement a real-time multiplayer Pong game.
- Use Java RMI to enable communication between game clients.
- Create a responsive and interactive UI with JavaFX.
- Synchronize game state between remote players.
- Provide smooth gameplay experience over the network.

## Why I Built It

I built Pong RMI to explore Java’s Remote Method Invocation capabilities and understand how to structure multiplayer networked games using Java. Combining JavaFX for rich UI with RMI allowed me to create a simple yet functional multiplayer experience while learning about distributed computing concepts and synchronization challenges in game development.

## Tech Stack

| Area        | Technology |
|-------------|------------|
| Programming | Java       |
| Network    | Java RMI    |
| GUI         | JavaFX     |

## What I Learned

- How to use Java RMI to enable remote communication between clients.
- Managing concurrency and synchronization in a networked multiplayer game.
- Designing a simple yet effective network protocol for real-time gameplay.
- Building a responsive UI using JavaFX components and animation.
- Handling latency and state updates between distributed players.

## Features

- Multiplayer Pong game with two players connected over the network.
- Real-time synchronization of ball and paddle positions.
- Smooth animations and responsive controls via JavaFX.
- Simple game start, pause, and reset functionality.
- Basic scoring system and game state management.

## Challenges & Improvements

- Handling network latency to keep both clients synchronized smoothly.
- Managing concurrent remote method calls without conflicts.
- Ensuring the UI remains responsive while waiting for remote updates.
- Implementing thread safety for shared game state accessed via RMI.
