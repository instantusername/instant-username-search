# Instant Username Search
[![Build Status](https://travis-ci.org/instant-username-search/instant-username-search.svg?branch=master)](https://travis-ci.org/instant-username-search/instant-username-search) <a href="https://www.buymeacoffee.com/1ulP4IGFm" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" height="30" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Instant Username Search helps users find out if their username is taken on more than 100 social media sites. It instantly lists results on the screen while the user is typing.

<a href="https://www.producthunt.com/posts/instant-username-search?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-instant-username-search" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=151501&theme=light&period=daily" alt="Instant Username Search - Check out if your username is available | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>

## Server Repository

This application needs the RESTful web service [instant-username-search-api](https://github.com/umutcanbolat/instant-username-search-api) to query the username availabilities.

## Installation

### For Debian based distros, Ubuntu

You need nodejs and npm installed on your system to run the project. If you don't have, go for the following commands to install. Otherwise pass this step.

```sh
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt install nodejs
```
cd into the application directory and run the commands below. The browser will open the application on http://localhost:3000 automatically.

```sh
npm install
npm start
```

### For Windows

Download and install nodejs from https://nodejs.org/en/download/ and run the following commands in the project directory:

```sh
npm install
npm start
```

## Screenshots
- Desktop version <br> <img src="https://user-images.githubusercontent.com/10065235/52743024-24565080-2fea-11e9-8d96-0c38603c4621.png" width="720" height="405"> <br>
- Mobile version <br> <img src="https://user-images.githubusercontent.com/10065235/52743025-24eee700-2fea-11e9-8834-09831c8a8a17.png" width="300" height="533">  <br>


## Credits
- Core Work: [Umut Canbolat](https://github.com/umutcanbolat)
- Design improvements: [Emirhan K. Kösem](https://github.com/KemalEmirhan)
- Translations in Catalan and Spanish: [Aniol Pagès](https://github.com/aniolpages)
- Translation in French: [Régis Enguehard](https://github.com/regisenguehard)
- Translations in Russian and Ukrainian: My friend Tanya from Ukraine.

See the [contributors page](https://github.com/umutcanbolat/instant-username-search/graphs/contributors) for more details.

## License
This project is licensed under the GNU General Public License v3.0 (GPL 3.0) - see the [LICENSE](LICENSE) file for details.