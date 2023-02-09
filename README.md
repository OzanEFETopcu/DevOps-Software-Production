# CI/CD focused DevOps projects
I always wanted to learn the steps of a professional software development and maintanence since I can remember and being able to demonstrate it here was extremely fulfilling.

##  Project Specifications
- This project follows the GitHub flow that utilizes a simple CI/CD pipeline for small to medium scale projects.
- Unfortunately the system was first developed on GitLab therefore it includes a ".gitlab-ci.yaml" file which is not compatible with GitHub's development environment. However I do plan on converting this project into a version where it is more suitable for GitHub actions.

## Team
Team Members: Ozan Topcu, Anish Natu

## Access to final production
Frontend: http://172.16.4.101:8080/
Backend: http://172.16.4.101:4040/

P.S. Unfortunately, the addresses are unavailable right now since the virtual machine we used to deploy our project to is owned by university and it was given to us for a single semester. Nevertheless, the small ToDo list website is still reachable using the localhost for people who are curious, it is still in a dockerized environement and the instructions on how to run is shown in a later chapter.

## Instructions to run locally
The application can be run by using the "docker-compose up -d" command inside the repository. After running the code user needs to get in "http://localhost:3001" and "http://localhost:5000" to access frontend and backend respectively.

P.S. The internal port is 3001 instead of 3000 since we had personal projects running on port 3000 already.
