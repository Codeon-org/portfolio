---
title: HashTag
description: HashTag is a minimalist desktop utility app for hashing text using MD5, SHA-256, and Bcrypt algorithms. Built with Electron using native HTML, CSS, and JavaScript.
icon: lucide:key
badges:
  - value: Source
    icon: lucide:github
    to: https://github.com/MrAnyx/HashTag
    target: _blank
---

A minimalist desktop utility app designed for developers to quickly hash text using popular algorithms like MD5, SHA-256, and Bcrypt. It keeps your previous hashes in memory to speed up your workflow.

## Goal

- Provide a simple, fast, and reliable tool for hashing text.
- Support multiple common hashing algorithms favored by developers.
- Keep a history of previous hashes for easy reference during development.
- Offer a native desktop experience via Electron with familiar web technologies.

## Why I Built It

- To have a lightweight and easy-to-use app for quickly hashing strings without relying on online tools or command-line utilities.
- To streamline the development process by saving previously generated hashes for reuse.
- To experiment with Electron by building a practical utility app that combines web tech (HTML, CSS, JS) with native desktop capabilities.
- This was my **first project using Electron**, and I didn't know much about web development or Electron at the time, so it was a big learning experience.
- To support developers needing quick cryptographic hashes in their workflow.

## Tech Stack

| Area         | Technologies Used                  |
|--------------|----------------------------------|
| Language(s)  | `JavaScript`, `HTML`, `CSS`             |
| Framework(s) | `Electron`                         |
| Tools        | `Node.js`, `npm`                     |
| Platform     | `Windows (currently only supported)` |

## What I Learned

- How to build cross-platform desktop applications using Electron.
- Integration of cryptographic libraries for hashing algorithms in JavaScript.
- Managing state and history within an Electron app.
- Packaging and distributing desktop applications for Windows.
- Practical UX design for minimalist utility apps.

## Features

- Hash text inputs using MD5, SHA-256, and Bcrypt algorithms.
- Memory of previous hashes to avoid repeated work.
- Clean, minimalist UI for distraction-free hashing.
- Easy installation and usage on Windows.
- Open-source code for transparency and community contributions.

## Challenges & Improvements

- Limited platform support as the app only runs on Windows.
- Learning curve working with Electron and web technologies as a first project.
- Ensuring correct and secure implementation of cryptographic algorithms.
- Managing memory efficiently for storing previous hashes.
- Designing a simple, user-friendly interface with limited experience in UI design.

