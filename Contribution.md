# CONTRIBUTING

This is a volunteer project by BTS Armys for other armys.

Kindly write a proper description while making issues or pull requests.

## Ways of Contributing

### You can contribute in many ways:

1. By adding features
2. By reporting bugs
3. By solving issues
4. By improving the code quality
5. By improving the readme and docs

## Contributing Guidelines

### The basic guidelines for contributing are as follows:

#### How to run the project
- Clone the repo
- Run `npm install` to install all the required packages
- Download [Expo Go](https://expo.dev/client) App to test your work
- Run `npm start` to start the server which will give you QR code to scan in your Expo Go app (Android) or Camera app (iOS)

#### How to contribute with recommended workflow
- Checkout to `develop` branch using
  -`git checkout develop`
- Create a branch from `develop` with feature/bug and issue number etc using
  - `git checkout -b signup/#5` (or whatever you're working on)
  or
  - `git checkout -b bug/#7`
- Fix Issue / Add Feature / Solve Bug / Do Coding
- Test the changes in your system
    - For Storybook run `npm run storybook:start`

- Create a pull request using below commands
  - `git add --all`
  - `git commit -m "your commit message"` (Write self-explanatory commit messages)
  - `git push origin your-branch-name`
- Go to the [Repository](https://github.com/Boraami/boraami-frontend)
- Create Pull Request against `develop` branch
- Add a suitable title and description to the Pull Request
- Add a reviewer
- `Add 'Boraami Frontend' Project in Projects`, and `Tag the Issue number (e.g. #3) in Pull Request description` if the pull request is related to some issue logged here: [Issues](https://github.com/Boraami/boraami-frontend/issues)
- Create a pull request
- YAY! You're done here. Wait for your code to get reviewed and merged

