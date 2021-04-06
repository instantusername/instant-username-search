# Instant Username Search

[![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/instant-username-search/instant-username-search?color=limegreen&label=latest&logo=github&sort=semver)](CHANGELOG)
<a href="https://www.buymeacoffee.com/1ulP4IGFm" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" height="30" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Instant Username Search helps users find out if their username is taken on more than 100 social media sites. It instantly lists results on the screen while the user is typing.

<a href="https://www.producthunt.com/posts/instant-username-search?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-instant-username-search" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=151501&theme=light&period=daily" alt="Instant Username Search - Check out if your username is available | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>

## Development

Instant Username Search local instance expects to have a dev server running at `http://localhost:8080`. This value is set in [.env.development](.env.development) file.

Since there is no dev server implementation ready yet, development API can be replaced with the production API that is in [.env.production](.env.production) file to be able to run the application locally.

After that the following commands can be used the start the dev instance. You need [node](nodejs.org) and [yarn](https://yarnpkg.com/) installed for this.

```shell
yarn && yarn start
```

## Credits

- Core Work: [Umut Canbolat](https://github.com/umutcanbolat)
- Design improvements: [Emirhan K. Kösem](https://github.com/KemalEmirhan)
- Translations in Catalan and Spanish: [Aniol Pagès](https://github.com/aniolpages)
- Translations in French: [Régis Enguehard](https://github.com/regisenguehard) and [Lulucmy](https://github.com/Lulucmy)
- Translations in Russian and Ukrainian: My friends Tanya and Ira from Ukraine.
- Translations in Chinese: My co-workers at Huawei.
- Translations in Portuguese: [Gustavo Guerra](https://github.com/GGustavoGuerra)

See the [contributors page](https://github.com/umutcanbolat/instant-username-search/graphs/contributors) for more details.

## License

This project is licensed under the GNU General Public License v3.0 (GPL 3.0) - see the [LICENSE](LICENSE) file for details.
