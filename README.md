# Maps App
This repo provides an example app for Android devices called Maps App, and this app is created with framework react native

This application only contains the map view, and just display the style on the map

# Features
- Home screen with finger button (_not fingerprint_)
![Home](https://github.com/Miko2x/Maps-App/blob/master/src/assets/Screenshot_2018-11-07-22-28-58-606_com.mapapp.png)
- Login screen without authentication
![Login](https://github.com/Miko2x/Maps-App/blob/master/src/assets/Screenshot_2018-11-07-22-29-03-709_com.mapapp.png)
- MapView pins and markers on the map, as well as search and user buttons, and also a descriptions of the mark
![Map](https://github.com/Miko2x/Maps-App/blob/master/src/assets/Screenshot_2018-11-07-22-29-17-425_com.mapapp.png)

# Fork the repository
**Fork** [Maps-App](https://github.com/Miko2x/Maps-App/fork) repo

# Clone the repository
Once you have forked the repo, you can make a clone

## Command line git
1. Clone the [Maps-App](https://github.com/Miko2x/Maps-App.git)
2. `cd` into the `Maps-App` folder
3. Make your changes and create a [pull request](https://help.github.com/articles/creating-a-pull-request/)

# Configuring a Remote for a Fork
If you make changes in the fork and would like to [sync](https://help.github.com/articles/syncing-a-fork/) those changes with the upstream repository, you must first [configure the remote](https://help.github.com/articles/configuring-a-remote-for-a-fork/). This will be required when you have created local branches and would like to make a [pull request](https://help.github.com/articles/creating-a-pull-request/) to your upstream branch.

1. In the Terminal (for Mac users) or command prompt (fow Windows and Linus users) type git remote -v to list the current configured remote repo for your fork.
2. `git remote add upstream https://github.com/Miko2x/Maps-App.git` to specify new remote upstream repository that will be synced with the fork. You can type `git remote -v` to verify the new upstream.

If there are changes made in the Original repository, you can sync the fork to keep it updated with upstream repository.

1. In the terminal, change the current working directory to your local project
2. Type `git fetch upstream` to fetch the commits from the upstream repository 
3. `git checkout master` to checkout your fork's local master branch.
4. `git merge upstream/master` to sync your local master branch with upstream/master. **Note**: Your local changes will be retained and your fork's master branch will be in sync with the upstream repository.
