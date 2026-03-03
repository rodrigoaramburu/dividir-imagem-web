# Proposal: create-php-alpine-projetct

## What

Scaffold a new PHP application project using the **Slim framework** with **Twig** templates. The build will include an Alpine.js frontend bundled via **Vite**. No Docker or container-focused setup is required; the emphasis is on a lightweight, developer‑friendly PHP starter with modern frontend tooling.

## Why

A Slim+Twig stack provides a minimal yet structured backend environment ideal for small services or prototypes. Integrating Alpine.js and Vite brings fast, reactive frontend capabilities without a heavy JavaScript framework. Avoiding Docker keeps the initial setup simple and accessible for developers who prefer running PHP locally.

## Goals

1. Initialize a Slim framework application with Composer.
2. Configure Twig for HTML templating.
3. Set up Vite to bundle Alpine.js and deliver assets to Twig templates.
4. Provide sample routes and a basic homepage demonstrating frontend interaction.
5. Offer clear README instructions for local development.

## Non-goals

- No Alpine Linux Docker images or build files.
- No server deployment automation beyond running PHP's built-in server or a simple web server configuration.
- Frameworks other than Slim (e.g. Laravel) are out of scope.
