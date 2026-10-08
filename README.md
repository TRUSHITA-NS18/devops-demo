# DevOps CI Dashboard

A simple web application created to demonstrate Continuous Integration using GitHub and Jenkins.

## Project Overview

The DevOps CI Dashboard represents a basic CI workflow in which source code is maintained in GitHub and Jenkins retrieves the latest code from the main branch for automated build verification.

## Technologies Used

- HTML
- CSS
- JavaScript
- GitHub
- Jenkins

## Project Structure

```text
devops-demo/
├── README.md
├── index.html
├── style.css
└── app.js

**CI Workflow**
Developer
    ↓
GitHub Repository
    ↓
Jenkins
    ↓
Source Code Checkout
    ↓
Build Verification
    ↓
Build Result
Jenkins Integration

Jenkins is configured to connect to this GitHub repository and retrieve the source code from the main branch.

The Jenkins build verifies that the project files are successfully available in the Jenkins workspace.

Purpose

This project demonstrates the basic integration between GitHub and Jenkins as part of a Continuous Integration workflow.
