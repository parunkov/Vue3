const request = require('request');
const fs = require('fs');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const data = [];
const parseMenu = (url) => {
  request(url, (err, res, body) => {
    if (err) throw err;
    console.log(res.statusCode);
    const dom = new JSDOM(body);
    const els = dom.window.document.querySelectorAll('.catalog-main__item');
    els.forEach((item) => {
      const id = item.dataset.productId;
      const title = item.querySelector('.catalog-main__item-name').textContent;
      const image = 'https://kz.iqos.com' + item.querySelector('.catalog-main__item-img').src;
      const icon = item.querySelector('.catalog-main__item-aromatic-icon')
        ? 'https://kz.iqos.com' + item.querySelector('.catalog-main__item-aromatic-icon').src
        : null;
      const text = item.querySelector('.catalog-main__item-aromatic-text')
        ? item.querySelector('.catalog-main__item-aromatic-text').textContent
        : null;
      const textColor = item.querySelector('.catalog-main__item-aromatic-text')
        ? item.querySelector('.catalog-main__item-aromatic-text').style._values.color
        : null;
      const price = item.querySelector('.catalog-main__item-price').textContent;
      const buttonText = item.querySelector('a.btn.black').textContent;
      data.push({ id, title, image, icon, text, textColor, price, buttonText });
    });
    console.log(data.length);
    fs.writeFile(`./catalogData.json`, JSON.stringify(data), (error) => {
      if (error) throw error;
    });
  });
};

parseMenu('https://kz.iqos.com/ru/catalog/#');
