# Git and GitHub Notes

## Introduction to Git and GitHub

**Git** is a distributed version control system that helps developers track changes in their code, collaborate with others, and manage project history efficiently.

**GitHub** is a cloud-based hosting service for Git repositories. It allows you to store your Git projects online and collaborate with developers across the globe.

### Difference between Git and GitHub

| Feature       | Git                          | GitHub                               |
| ------------- | ---------------------------- | ------------------------------------ |
| Type          | Version Control System       | Hosting service for Git repositories |
| Usage         | Local version control        | Remote repository management         |
| Installation  | Installed on your computer   | Accessed via browser or Git client   |
| Functionality | Track changes, branch, merge | Collaborate, pull requests, CI/CD    |

---

## Why Use Git?

* Track and manage changes to your code
* Collaborate with other developers easily
* Create branches for new features or experiments
* Revert to previous versions when needed
* Maintain project history and logs

---

## Version Control

Version control is a system that records changes to files over time so that you can recall specific versions later. Git is a distributed version control system where each user has a complete copy of the repository.

---

## Basic Git Commands

### `git init`

Initializes a new Git repository in the current directory. Creates a `.git` folder that stores all version history.

```bash
git init
```

### `.git` Hidden Folder

This folder is automatically created when you run `git init`. It contains metadata and object database for the repository.

---

### `git add`

Adds files to the staging area, preparing them to be committed.

```bash
git add filename.txt       # Add a specific file
git add .                  # Add all files in the directory
```

---

### `git commit`

Saves the staged changes to the repository with a message.

```bash
git commit -m "Your commit message"
```

---

### `git push`

Uploads your local repository content to a remote repository (like GitHub).

```bash
git push origin main       # Push changes to the main branch
```

---

### `git pull`

Fetches and merges changes from a remote repository to your local repo.

```bash
git pull origin main
```

---

### `git checkout`

Switches to a different branch or restores working tree files.

```bash
git checkout branch-name   # Switch to a branch
git checkout filename.txt  # Restore a file
```

---

### `git fetch`

Downloads changes from a remote repository but does not merge them.

```bash
git fetch origin
```

---

### `git log` and `git log --oneline`

Shows the commit history.

```bash
git log                    # Full commit logs
git log --oneline          # Short summary of commits
```

---

### `git config`

Used to set Git configuration values like username and email.

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## Git Internal Working

* **Working Directory**: Where you edit files
* **Staging Area (Index)**: Where files are staged using `git add`
* **Repository (.git)**: Permanent store where commits are saved

The general Git workflow:

1. Edit files in Working Directory
2. Stage files using `git add`
3. Commit changes using `git commit`
4. Push to remote repository using `git push`

---

## Branching and Merging

Branching allows you to create separate lines of development in your project.

### Creating and Switching Branches

```bash
git branch branch-name           # Create a branch
git checkout branch-name         # Switch to a branch
git checkout -b branch-name      # Create and switch to a new branch
```

### Merging Branches

```bash
git checkout target-branch
git merge source-branch
```

### Deleting Branches

```bash
git branch -d branch-name        # Delete merged branch
git branch -D branch-name        # Force delete unmerged branch
```

### Viewing Branches

```bash
git branch                       # List all local branches
```

### Resolving Merge Conflicts

Git marks conflicting sections in the files:

```bash
<<<<<<< HEAD
Current branch content
=======
Merged branch content
>>>>>>> branch-name
```

Manually resolve, then:

```bash
git add filename.txt
git commit -m "Resolved merge conflict"
```

---

## .gitignore

Defines intentionally untracked files to ignore. Example:

```
node_modules/
*.log
.env
.idea/
.DS_Store
Thumbs.db
build/
coverage/
test-output/
config.json
```

Create with:

```bash
touch .gitignore
```

Stage and commit:

```bash
git add .gitignore
git commit -m "Add .gitignore file"
```

Update with:

```bash
git add .gitignore
git commit -m "Update .gitignore"
```

View ignored files:

```bash
git check-ignore -v *
```

---

## Git Diff

Shows differences between commits, branches, or working states.

### Basic Usage

```bash
git diff                         # Working directory vs index
```

### Staged Changes

```bash
git diff --cached                # Index vs last commit
```

### Branch Comparison

```bash
git diff branch1..branch2
```

### File Comparison

```bash
git diff branch1..branch2 -- filename.txt
```

### Commit Comparison

```bash
git diff commit1..commit2
```

---

## Git Rebase

**Definition:** `git rebase` is used to move or combine a sequence of commits to a new base commit. It is often used to maintain a linear project history.

```bash
git checkout feature
git rebase main
```

**Why use it?**

* Keeps history clean and linear
* Useful before merging feature branches
* Reduces merge commits

**When not to use:** On shared branches, as it rewrites commit history.

**Example Workflow:**

```bash
git checkout feature
# make changes and commit

git fetch origin
# rebase onto latest main

git rebase origin/main
```

**Difference between `rebase` and `merge`:**

| Feature           | Merge                  | Rebase                        |
| ----------------- | ---------------------- | ----------------------------- |
| Commit History    | Preserves full history | Creates linear history        |
| Merge Commit      | Adds a merge commit    | No merge commit created       |
| Conflict Handling | During merge           | During each re-applied commit |
| Rewrites History  | No                     | Yes (reapplies commits)       |

---

## Git Stash

Temporarily stores changes without committing them.

```bash
git stash          # Save current changes
```

Apply stash later:

```bash
git stash apply    # Reapply latest stash
```

List stashes:

```bash
git stash list
```

---

## Git Revert vs Git Reset

### `git revert`

Creates a new commit that undoes a previous commit.

```bash
git revert <commit-hash>
```

### `git reset`

Moves the current branch to a specified state.

```bash
git reset --soft <commit>    # Keeps files staged

git reset --mixed <commit>   # Unstages files

git reset --hard <commit>    # Deletes all changes
```

**Key Difference:**

* `git revert` is safe for shared branches (does not rewrite history)
* `git reset` is powerful but can destroy changes if not used carefully

---

## Git Cherry-Pick

Apply a specific commit from one branch to another.

```bash
git cherry-pick <commit-hash>
```

Useful when you want to copy only a single commit instead of merging or rebasing a whole branch.

---

## Git Tag

Tags are used to mark specific points in history (like releases).

```bash
git tag v1.0
```

Push tag to remote:

```bash
git push origin v1.0
```

List tags:

```bash
git tag
```

Delete tag:

```bash
git tag -d v1.0
```

---

## GitHub Workflow

### Fork

Copy a repository to your GitHub account.

### Clone

Copy the repository to your local machine.

```bash
git clone <repo-url>
```

### Create a Branch

```bash
git checkout -b new-feature
```

### Make Changes and Commit

```bash
git add .
git commit -m "Add new feature"
```

### Push to GitHub

```bash
git push origin new-feature
```

### Open Pull Request (PR)

Propose changes to be merged into the original repository. Include description and reviewers.

### Address Review Comments

Make changes and push again to update the PR.

### Issues

Used to track bugs, features, and tasks. You can label, assign, and close them through GitHub's UI.

---

Let me know when you're ready to go deeper or need examples with GitHub Desktop, Git GUI clients, or collaboration tips!
