# Online Book Store

<img width="957" alt="image" src="https://github.com/rajamaurya/Webpack-React-App/assets/23061771/5d5f1376-9203-4d44-b4ed-f3e9c7832524">

# ----------------------------------------------------------------------------------------------

# Installation Process

Clone it using:

```
git clone <REMOTE_URL>
```

Download all dependencies:

```
npm install

```

# Run Command

```
npm start

```

Runs the app in the development mode.\
 Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Test Command

```
npm test
```

# GIT Commands

```
git init

git remote add origin <REMOTE_URL>
# Sets the new remote

git remote -v
# Verifies the new remote URL

git status
# see your changes

git add .
# Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.

git commit -m "Initial commit following commit guidlines"
# Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

git push origin main
# Pushes your changes in your local repository up to the remote repository you specified as the origin
    or
git push -f origin main
# Use this for force code commit
```

# Commit Guidlines

### Message Structure

A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:

#### type: Subject

#### body

### footer

## Type

#### Must be one of the following:

- **feat** : A new feature
- **fix** : A bug fix
- **docs** : Documentation only changes
- **style** : Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor** : A code change that neither fixes a bug nor adds a feature
- **perf** : A code change that improves performance
- **test** : Adding missing tests
- **chore** : Changes to the build process or auxiliary tools and libraries such as documentation generation
