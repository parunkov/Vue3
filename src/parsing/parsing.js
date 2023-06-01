const request = require('request');
// const fs = require('fs');
// const DomParser = require('dom-parser');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const parseMenu = (url) => {
  request(url, (err, res, body) => {
    if (err) throw err;
    console.log(res.statusCode);
    const dom = new JSDOM(body);
    const els = dom.window.document.querySelectorAll('.catalog-main__item');
    els.forEach((item) => {
      console.log(item.querySelector('.catalog-main__item-name').textContent);
    });

    // console.log(body.split('<img class="catalog-main__item-img"').length);
    // const dom = parser.parseFromString(body);
    // console.log(dom.getElementsByClassName('catalog-main__item'));
    // console.log(dom.getElementById(''));
    // const subcategoriesStart = body.split('<div class="subcategories"')[1];
    // if (subcategoriesStart) {
    //   const links = subcategoriesStart.split('<a href="');
    //   links.forEach(async (item) => {
    //     const link = item.split('"')[0];
    //     const titleStart = item.split('div class="subcategories--title"')[1];
    //     if (titleStart) {
    //       const title = titleStart.split('>')[1].split('<')[0].split('\n')[0];
    //       const categoryData = { title, link, menu: [] };
    //       subcategory.menu.push(categoryData);
    //       parseMenu(link, categoryData);
    //       console.log(data);
    //       await fs.writeFile(`./data/menu.json`, JSON.stringify(data), (error) => {
    //         if (error) throw error;
    //       });
    //     }
    //   });
    // }
  });
};
parseMenu('https://kz.iqos.com/ru/catalog/#');
